import { Like } from '@/types'
import axios from 'axios'
import { create } from 'zustand'

interface LikeStore {
  likes: Like[],
  addLike: (likes: Like[]) => void,
  fetchLikes: () => Promise<void>,
  sumPostLikes: (data: Like[], postId: number) => number,
  sumCommentLike: (data: Like[], postId: number) => number,
}

export const useLikes = create<LikeStore>((set) => ({
  likes: [],
  addLike: (likes: Like[]) => set(({ likes })),
  fetchLikes: async () => {
    try {
      const { data } = await axios.get(route("getAllLikes"))
      set({ likes: data })
    } catch (error) {
      console.log(error);
    }
  },
  sumPostLikes: (data: Like[], postId: number) => {
    return data.filter(like => like.post_id === postId).length
  },
  sumCommentLike: (data: Like[], postId: number) => {
    return data.filter((like) => like.comment_id === postId).length
  }
}))