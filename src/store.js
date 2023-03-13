import { createStore } from 'vuex'
import { getEpg } from '@/services.js'

const NOT_READY_STATUS = 'not_ready'
const READY_STATUS = 'ready'
const LOADING_STATUS = 'loading'
const ERROR_STATUS = 'error'

const store = createStore({
  state () {
    return {
      fetchChannelsStatus: NOT_READY_STATUS,
      channels: [],
      errorMsg: ''
    }
  },
  getters: {
    fetchChannelsLoading (state) {
      return state.fetchChannelsStatus === LOADING_STATUS
    }
  },
  mutations: {
    fetchChannelsRequest (state) {
      state.fetchChannelsStatus = LOADING_STATUS
    },
    fetchChannelsSuccess (state, channels) {
      state.fetchChannelsStatus = READY_STATUS
      state.channels = channels
    },
    fetchChannelsFailure (state) {
      state.fetchChannelsStatus = ERROR_STATUS
      state.errorMsg = 'Something went wrong'
    }
  },
  actions: {
    async fetchChannels({getters, commit}) {
      if (getters.fetchChannelsLoading) {
        return
      }
      commit('fetchChannelsRequest')
      try {
        const res = await getEpg()
        commit('fetchChannelsSuccess', res.channels)
      } catch (err) {
        console.log(err)
        commit('fetchChannelsFailure')
        throw err
      }
    }
  }
})

export default store