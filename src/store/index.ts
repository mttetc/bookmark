import create from "zustand";
import { persist } from "zustand/middleware";
import { bookmarksSlice } from "./slices/bookmark";
import { Store } from "./types";

export const useStore = create<Store>(
  persist(
    (set, _) => ({
      ...bookmarksSlice(set),
      reset: () =>
        set({
          bookmarks: [],
        }),
    }),
    {
      name: "store",
    }
  )
);
