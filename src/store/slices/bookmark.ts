import { SetState } from "zustand";
import { Bookmark, Store } from "../types";

export const bookmarksSlice = (set: SetState<Store>) => ({
  bookmarks: [],
  setBookmarks: (bookmarks: Bookmark[]) => set({ bookmarks }),
  addBookmark: (bookmark: Bookmark) =>
    set((prev) => ({ bookmarks: [bookmark, ...prev.bookmarks] })),
});
