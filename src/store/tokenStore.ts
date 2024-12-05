import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Define the store state interface
interface TokenState {
  token: string | null
  setToken: (token: string | null) => void
  clearToken: () => void
}

// Create the store with proper type definitions
const tokenStore = create<TokenState>()(
  persist(
    (set) => ({
      token: null,
      
      setToken: (token: string| null) =>
        set(() => ({
          token,
        })),
      
      clearToken: () =>
        set(() => ({
          token: null,
        })),
    }),
    {
      name: 'token-storage', // name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
      }),
    }
  )
)

export default tokenStore
