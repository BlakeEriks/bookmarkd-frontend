import { atom, useRecoilState } from 'recoil'

const authState = atom({
    key: 'token',
    // get initial state from local storage to enable user to stay logged in
    default: JSON.parse(localStorage.getItem('token'))
})

const userState = atom({
    key: 'user',
    // get initial state from local storage to enable user to stay logged in
    default: JSON.parse(localStorage.getItem('username'))
})

export const useAuthState = () => {
    return useRecoilState(authState)
}

export const useUserState = () => {
    return useRecoilState(userState)
}