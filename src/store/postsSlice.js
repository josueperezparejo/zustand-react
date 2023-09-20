import { create } from 'zustand'

export const postsSlice = create((set) => ({
    posts: [],
    isLoading: false,
    setPosts: async () => {
        set({ isLoading: true })
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        set({ posts: data })
        set({ isLoading: false })
    },
}))