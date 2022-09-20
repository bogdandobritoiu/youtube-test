import { useEffect, useState } from "react";

import { YOUTUBE_KEY } from "@env";
import { ICard } from "../components/Card";
import { DUMMY_ITEMS } from "../utils";

const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/";

export function useHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [items, setItems] = useState<ICard[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  useEffect(() => {
    onLoadMore();
  }, []);

  async function getData() {
    try {
      let result = await fetch(
        `${YOUTUBE_URL}search?key=${YOUTUBE_KEY}&part=snippet&type=video&q=programming&maxResults=12&${
          nextPageToken ? "&pageToken=" + nextPageToken : ""
        }`
      ).then((res) => res.json());
      setNextPageToken(result?.nextPageToken || null);
      setItems((currentItems) => [
        ...currentItems,
        ...(result?.items?.map((item: any) => ({
          id: item?.id?.videoId,
          title: item?.snippet?.title,
          creator: item?.snippet?.channelTitle,
          thumbnails: item?.snippet?.thumbnails,
          createdAt: item?.snippet?.publishedAt,
          live: item?.snippet?.liveBroadcastContent,
        })) || []),
        // ...DUMMY_ITEMS,
      ]);
    } catch (error) {
      console.warn(error);
    }
  }

  async function onLoadMore() {
    if (isLoading) {
      await getData();
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setIsLoadingMore(true);
      await getData();
      setIsLoadingMore(false);
    }
  }

  return {
    items,
    isLoading,
    isLoadingMore,
    onLoadMore,
  };
}
