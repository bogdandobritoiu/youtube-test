import { useEffect, useState } from "react";
import { IGridItem } from "./GridItem";

import { YOUTUBE_KEY } from "@env";
const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/";

const DUMMY_ITEMS: IGridItem[] = [
  {
    title: "Title",
    createdAt: "created at",
    id: "1",
    creator: "Creator",
    live: true,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Music makes you happy whenever you bla bla",
    createdAt: "created at",
    id: "2",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "How To Think Like A Programmer bla",
    createdAt: "created at",
    id: "3",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "4",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "5",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "6",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "7",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "8",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "9",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "10",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "11",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "12",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "13",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "14",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "15",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "16",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "17",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "18",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "19",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: "Title",
    createdAt: "created at",
    id: "20",
    creator: "Creator",
    live: false,
    thumbnails: {
      high: {
        url: "",
        width: 100,
        height: 100,
      },
    },
  },
];

export function useGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [items, setItems] = useState<IGridItem[]>([]);
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
        // ...(result?.items?.map((item: any) => ({
        //   id: item?.id?.videoId,
        //   title: item?.snippet?.title,
        //   creator: item?.snippet?.channelTitle,
        //   thumbnails: item?.snippet?.thumbnails,
        //   createdAt: item?.snippet?.publishedAt,
        //   live: item?.snippet?.liveBroadcastContent,
        // })) || []),
        ...DUMMY_ITEMS,
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
