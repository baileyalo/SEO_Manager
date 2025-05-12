import React from "react";
import { YouTubeData } from "../types/Types";
import { Music, Youtube } from "lucide-react"; 

interface Props {
  youtubeData: YouTubeData;
  spotifyData?: any;
}

const MetadataDisplay: React.FC<Props> = ({ youtubeData, spotifyData }) => {
  return (
    <div className="grid gap-6 mt-4">
      {youtubeData && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 space-y-2">
          <div className="flex items-center text-red-600">
            <Youtube className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-semibold">YouTube</h3>
          </div>
          <p>
            <span className="font-bold">Title:</span>{" "}
            {youtubeData.snippet.title}
          </p>
          <p>
            <span className="font-bold">Description:</span>{" "}
            {youtubeData.snippet.description}
          </p>
        </div>
      )}

      {spotifyData && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 space-y-2">
          <div className="flex items-center text-green-600">
            <Music className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-semibold">Spotify</h3>
          </div>
          <p>
            <span className="font-bold">Track:</span> {spotifyData.name}
          </p>
          <p>
            <span className="font-bold">Album:</span>{" "}
            {spotifyData.album?.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default MetadataDisplay;
