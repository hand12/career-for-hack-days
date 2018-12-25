import firebase from '@/plugins/firebase'

const db = firebase.database()
const jobPostingsRef = db.ref('/job_postings')

export const state = () => ({
  jobPostings: [],
})

export const getters = {
  jobPostings: state => state.jobPostings,
}

export const actions = {
  bindJobPosting({ commit }) {
    jobPostingsRef.on('value', snapshot => {
      const values = snapshot.val()
      const jobPostings = Object.keys(values).map(id => Object.assign(values[id], { id: id }))
      commit('setJobPosting', jobPostings)
    })
  },
}

export const mutations = {
  setJobPosting(state, jobPostings) {
    state.jobPostings = jobPostings
  },
}
