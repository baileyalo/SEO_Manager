// App types defined
export interface YouTubeData {
  id: number;
  kind: string;
  etag: string;
  snippet: {
    description: string;
    channelTitle: string;
    title: string;
  };
  tags: string[];
  url: string;
}

export interface  ContentEntry {
  title: string;
  keywords: string;
  youtubeDescription: string;
  spotifyDescription: string;
  appleDescription: string;
  publishDate: string;
}
