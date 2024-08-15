import { ref, unref } from 'vue'
import {defineStore} from 'pinia'
import {api} from "@/helpers/apiBackend"

export const useAuthStore = defineStore('auth', () => 
    {
    const user = ref(null)
    const token = ref(localStorage.getItem('token'))

    function authenticate(result: any) {
        token.value = result.token;
        if (token.value) localStorage.setItem('token', token.value)
    }

    async function login(payload: any) {
        const result = await api('POST', '/login', payload)
        authenticate(result)
        
        return result
    }

    async function register(payload: any) {
        const result = await api('POST', '/register', payload)
        authenticate(result)
        return result
    }

    async function logout() {
        await api('DELETE', '/logout')
        token.value = null
        user.value = null
        localStorage.removeItem('token')
    }

    async function me() {
        const result = await api('GET', '/me')
        user.value = result.user
        return user.value
    }

    return {user, token, login, register, logout, me}
})

