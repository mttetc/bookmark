import { Store } from "../types";

export const selectBookmarks = (state: Store) => state.bookmarks;

export const selectSetBookmars = (state: Store) => state.setBookmarks;

export const selectAddBookmark = (state: Store) => state.addBookmark;
