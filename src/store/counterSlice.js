import { create } from 'zustand'

export const counterSlice = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    incrementBy: (value) => set((state) => ({ count: state.count + value })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}))
