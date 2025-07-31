import { create } from 'zustand'
import startups from "@/data.json"
export const useStore = create((set) => ({
    startups: startups,
    setStartups: (startups) => set({ startups }),
}))
