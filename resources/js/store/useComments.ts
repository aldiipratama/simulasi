import { Comment } from '@/types'
import axios from 'axios'
import { create } from 'zustand'

interface CommentStore {
  comments: Comment[],
  addComment: (comment: Comment[]) => void,
  fetchComments: () => Promise<void>,
  sumComments: (data: Comment[], postId: number) => number,
}

export const useComments = create<CommentStore>((set) => ({
  comments: [],
  addComment: (comments: Comment[]) => set(({ comments })),
  fetchComments: async () => {
    try {
      const { data } = await axios.get(route("getAllComments"))
      set({ comments: data })
    } catch (error) {
      console.log(error);
    }
  },
  sumComments: (data: Comment[], postId: number) => {
    return data.filter((comment) => comment.post_id === postId).length
  }
}))