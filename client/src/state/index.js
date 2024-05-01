import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //just like a regular function to update or change the above initialState
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setLogin: (state, action) => {
      state.user = action.playload.user
      state.token = action.playload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.playload.friends
      } else {
        console.log('user friends not existent :(')
      }
    },
    setPosts: (state, action) => {
      state.posts = action.playload.posts
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.playloaad.post_id) return action.playload.post
        return post
      })
      state.posts = updatedPosts
    },
  },
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions

export default authSlice.reducer
