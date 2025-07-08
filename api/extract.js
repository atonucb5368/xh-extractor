import fetch from 'node-fetch';

export default async function handler(req, res) {
  const videoUrl = req.query.url;

  if (!videoUrl || !videoUrl.includes('xhamster.com')) {
    return res.status(400).json({ error: 'Invalid xHamster URL' });
  }

  try {
    const html = await fetch(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://xhamster.com'
      }
    }).then(r => r.text());

    const match = html.match(/window\.initials\s*=\s*({.*?});/);
    if (!match) return res.status(404).json({ error: 'Video config not found' });

    const data = JSON.parse(match[1]);
    const videoSrc = data?.xplayerSettings?.sources?.hls?.h264?.url;
    const title = data?.videoEntity?.title;
    const thumb = data?.videoEntity?.thumbs?.["1"];

    res.json({ title, videoSrc, thumb });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
