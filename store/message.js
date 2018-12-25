import firebase from '@/plugins/firebase'

const db = firebase.database()
const messagesRef = db.ref('/messages')

export const state = () => ({
  messages: [],
})

export const getters = {
  messages: state => state.messages,
}

export const actions = {
  bindMessage({ commit }) {
    messagesRef.on('value', snapshot => {
      const values = snapshot.val()
      const messages = Object.keys(values).map(id => Object.assign(values[id], { id: id }))
      commit('setMessages', messages)
    })
  },
  addMessage(_, message) {
    messagesRef.push({ ...message })
  },
}

export const mutations = {
  setMessages(state, messages) {
    state.messages = messages
  },
}
