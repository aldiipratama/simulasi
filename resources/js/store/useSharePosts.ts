import { SharePost } from '@/types';
import axios from 'axios';
import { create } from 'zustand'

interface SharePostStore {
  sharePosts: SharePost[],
  addSharePosts: (sharePosts: SharePost[]) => void,
  fetchSharePosts: () => Promise<void>,
  sumSharePosts: (sharePosts: SharePost[], postId: number) => number,
}

export const useSharePosts = create<SharePostStore>(set => ({
  sharePosts: [],
  addSharePosts: (sharePosts: SharePost[]) => set({ sharePosts }),
  fetchSharePosts: async () => {
    try {
      const { data } = await axios.get(route('getAllSharePosts'))
      set({ sharePosts: data })
    } catch (error) {
      console.log(error);
    }
  },
  sumSharePosts: (data: SharePost[], postId: number) => {
    return data.filter(sharePost => sharePost.post_id === postId).length
  }
}))