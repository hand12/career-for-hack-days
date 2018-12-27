export default function ({ store, redirect }) {
  if (!store.getters['user/isSignedIn']) {
    return redirect('/login')
  }
}
