import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// API proxy for Google Vietnamese Text-To-Speech
app.get('/api/tts', async (req, res) => {
  try {
    const text = (req.query.text as string) || '';
    if (!text.trim()) {
      return res.status(400).send('Missing text parameter');
    }

    // Google Translate TTS supports ~200 characters per segment
    // We split into chunks if length > 180 chars
    const chunks: string[] = [];
    if (text.length <= 180) {
      chunks.push(text);
    } else {
      // Split by punctuation
      const sentences = text.match(/[^.!?;\n]+[.!?;\n]+/g) || [text];
      let current = '';
      for (const s of sentences) {
        if ((current + ' ' + s).length <= 180) {
          current = current ? current + ' ' + s : s;
        } else {
          if (current) chunks.push(current);
          current = s;
        }
      }
      if (current) chunks.push(current);
    }

    const buffers: Buffer[] = [];
    for (const chunk of chunks) {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
        chunk.trim()
      )}&tl=vi&client=tw-ob`;

      const response = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      if (response.ok) {
        const arrayBuf = await response.arrayBuffer();
        buffers.push(Buffer.from(arrayBuf));
      }
    }

    if (buffers.length === 0) {
      return res.status(500).send('Failed to generate audio');
    }

    const combined = Buffer.concat(buffers);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Content-Length', combined.length);
    res.send(combined);
  } catch (error) {
    console.error('TTS error:', error);
    res.status(500).send('Internal TTS error');
  }
});

async function start() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
