// Zustand Reactの状態管理ライブラリ
// Githubから拝借
// https://github.com/pmndrs/zustand
import { create } from 'zustand'


// ログインでid email保存
type User = {
  id: string | undefined
  email: string | undefined
}

//状態管理 state
type State = {
  user: User
  setUser: (payload: User) => void
}

const useStore = create<State>((set) => ({
  // 初期値
  user: { id: '', email: '' },
  // アップデート
  setUser: (payload) => set({ user: payload }),
}))

export default useStore