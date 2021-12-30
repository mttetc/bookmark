import { ApiResponse } from "../types/ApiResponse";

export type Bookmark = {
  id: number;
} & ApiResponse;

type BookmarkStore = {
  bookmarks: Bookmark[];
  setBookmarks: (bookmarks: Bookmark[]) => void;
  addBookmark: (bookmark: Bookmark) => void;
};

type CommonStore = {
  reset: () => void;
};

export type Store = BookmarkStore & CommonStore;
