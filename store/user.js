import firebase from '@/plugins/firebase'

export const state = () => ({
  currentUser: null,
  isSignedIn: false,
  loading: false
})

export const getters = {
  currentUser: state => state.currentUser,
  isSignedIn: state => state.isSignedIn,
  loading: state => state.loading
}

export const actions = {
  signIn() {
    firebase.auth().signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  },
  signOut({ commit }) {
    firebase.auth().signOut()
    commit('setCurrentUser', null)
    commit('setSignInState', false)
  },
  watchSignedInState({ commit }) {
    commit('setLoading', true)
    firebase.auth().onAuthStateChanged(response => {
      if (response) {
        const user = {
          name: response.displayName,
          profileImage: `${response.photoURL}?type=large`,
          uid: response.uid
        }
        commit('setCurrentUser', user)
        commit('setSignInState', true)
      } else {
        commit('setSignInState', false)
      }
      commit('setLoading', false)
    })
  },
}

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  },
  setSignInState(state, isSignedIn) {
    state.isSignedIn = isSignedIn
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}
