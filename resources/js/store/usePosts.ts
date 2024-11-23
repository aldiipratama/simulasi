import { Post } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface PostStore {
  posts: Post[];
  addPost: (posts: Post[]) => void;
  fetchPosts: () => Promise<void>;
}

export const usePosts = create<PostStore>((set) => ({
  posts: [],
  addPost: (posts: Post[]) => set(({ posts })),
  fetchPosts: async () => {
    try {
      const { data }: { data: Post[] } = await axios.get(
        route("getAllPosts")
      );
      set({ posts: data })
    } catch (error) {
      console.log(error);
    }
  }
}))