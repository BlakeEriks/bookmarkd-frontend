import { atom, useRecoilState } from 'recoil'

const authState = atom({
    key: 'auth',
    // get initial state from local storage to enable user to stay logged in
    default: JSON.parse(localStorage.getItem('user'))
})

export const useAuthState = () => {
    return useRecoilState(authState)
}