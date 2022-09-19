import { Platform } from "react-native";

export const isWeb = Platform.OS === "web";
export const isMobile = Platform.OS === "ios" || Platform.OS === "android";
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export function getFormattedDate(date: Date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

export const DUMMY_ITEMS = [
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
