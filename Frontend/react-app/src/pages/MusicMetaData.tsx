import { useState } from "react";
import { fetchYouTubeVideoDetails } from "../utils/youtubeAPI";
// import { fetchSpotifyTrackDetails } from "../utils/spotifyAPI";
import MetadataDisplay from "../components/MetadataDisplay";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { YouTubeData } from "../types/Types";
import { Card, CardContent } from "../components/ui/Card";
import LoadingSpinner from "../components/LoadingSpinner";

const MusicMetaData = () => {
  const [videoId, setVideoId] = useState("");
  const [trackId, setTrackId] = useState("");
  const [youtubeData, setYouTubeData] = useState<YouTubeData>();
  // const [spotifyData, setSpotifyData] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setVideoId("");
    setTrackId("");
  };

  const handleFetch = async () => {
    if (!videoId) {
      setErrorMessage(
        "Both YouTube video ID and Spotify track ID are required."
      );
      return;
    }

    try {
      setLoading(true);
      const yt = await fetchYouTubeVideoDetails(videoId);
      setYouTubeData(yt);
      handleClear();
      // const sp = await fetchSpotifyTrackDetails(trackId);

      // setSpotifyData(sp);
      setErrorMessage(null);
    } catch (error: any) {
      console.log("error", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-[200px] text-center">
      <h1 className="text-3xl font-bold mb-4 text-center">
         SEO Content Metadata
      </h1>
      <Card className="mt-auto">
        <CardContent className="space-y-4 p-4">
          <Input
            type="text"
            placeholder="YouTube Video ID"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Spotify Track ID"
            value={trackId}
            onChange={(e) => setTrackId(e.target.value)}
          />
        </CardContent>
        <div className="mt-5">
          <Button onClick={handleFetch} disabled={loading}>
            {loading ? <LoadingSpinner size={24} /> : "Fetch Metadata"}
          </Button>
        </div>
      </Card>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <MetadataDisplay youtubeData={youtubeData!} />
    </div>
  );
};

export default MusicMetaData;
