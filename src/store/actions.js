import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
    login: ({ commit }) => {
        throw new Error('login action should be implemtned')
    },

    fetchLists: ({ commit }) => {
        throw new Error('fetchLists action should be implemtned')
    },

    addTask: ({ commit }) => {
        throw new Error('addTask action should be implemtned')        
    },

    updateTadk: ({ commit }) => {
        throw new Error('updateTask action should be implemtned')        
    },

    removeTask: ({ commit }) => {
        throw new Error('removeTask action should be implemtned')        
    },

    logout: ({ commit }) => {
        throw new Error('logout action should be implemtned')    
    }
}