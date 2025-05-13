import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

async function fetchYouTubeVideoDetails(videoId: string) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );
    if (!res.data.items.length) throw new Error("No video found.");
    return res.data.items[0];
  } catch (err: any) {
    console.error("YouTube Error:", err);
    throw new Error("Failed to fetch YouTube metadata.");
  }
}

export { fetchYouTubeVideoDetails };
