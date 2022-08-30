import { CharacterModel } from '@/domain/models'
import {
  makeRemoteFilterCharactersByGender,
  makeRemoteFilterCharactersByName,
  makeRemoteFilterCharactersBySpecies,
  makeRemoteFilterCharactersByStatus,
  makeRemoteGetCharacters,
} from '@/main/fatories/usecases'
import { GET_CHARACTERS } from '@/presentation/store/actionsType'
import {
  SET_CHARACTERS,
  SET_FILTER_TYPE,
  SET_FILTER_VALUE,
  SET_LOADING,
  SET_PAGE,
  SET_TOTAL_PAGE,
} from '@/presentation/store/mutationsType'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'

export interface IStore {
  character: CharacterModel[]
  page: number
  totalPage: number
  filterType: string
  filterValue: string
  loading: boolean
}

export const key: InjectionKey<Store<IStore>> = Symbol()

export const store = createStore<IStore>({
  state: {
    totalPage: 0,
    character: [],
    page: 1,
    filterType: 'nenhum',
    filterValue: '',
    loading: false,
  },
  mutations: {
    [SET_CHARACTERS](state, payload: CharacterModel[]) {
      state.character = payload
    },
    [SET_PAGE](state, payload: number) {
      state.page = payload
    },
    [SET_TOTAL_PAGE](state, payload: number) {
      state.totalPage = payload
    },
    [SET_FILTER_TYPE](state, payload: string) {
      state.filterType = payload
    },
    [SET_FILTER_VALUE](state, payload: string) {
      state.filterValue = payload
    },
    [SET_LOADING](state, payload: boolean) {
      state.loading = payload
    },
  },
  actions: {
    [GET_CHARACTERS]({ commit, state }) {
      console.log(state.filterType)
      switch (state.filterType) {
        case 'nome':
          commit(SET_LOADING, true)
          makeRemoteFilterCharactersByName()
            .perform({
              page: state.page,
              name: state.filterValue,
            })
            .then((response) => {
              commit(SET_CHARACTERS, response?.results)
              commit(SET_TOTAL_PAGE, response?.info.pages)
              commit(SET_LOADING, false)
            })
          break
        case 'status':
          commit(SET_LOADING, true)
          makeRemoteFilterCharactersByStatus()
            .perform({
              page: state.page,
              status: state.filterValue,
            })
            .then((response) => {
              commit(SET_CHARACTERS, response?.results)
              commit(SET_TOTAL_PAGE, response?.info.pages)
              commit(SET_LOADING, false)
            })
          break
        case 'especie':
          commit(SET_LOADING, true)
          makeRemoteFilterCharactersBySpecies()
            .perform({
              page: state.page,
              species: state.filterValue,
            })
            .then((response) => {
              commit(SET_CHARACTERS, response?.results)
              commit(SET_TOTAL_PAGE, response?.info.pages)
              commit(SET_LOADING, false)
            })
          break
        case 'genero':
          commit(SET_LOADING, true)
          makeRemoteFilterCharactersByGender()
            .perform({
              page: state.page,
              gender: state.filterValue,
            })
            .then((response) => {
              commit(SET_CHARACTERS, response?.results)
              commit(SET_TOTAL_PAGE, response?.info.pages)
              commit(SET_LOADING, false)
            })
          break
        case 'nenhum':
          commit(SET_LOADING, true)
          makeRemoteGetCharacters()
            .perform({
              page: state.page,
            })
            .then((response) => {
              commit(SET_CHARACTERS, response?.results)
              commit(SET_TOTAL_PAGE, response?.info.pages)
              commit(SET_LOADING, false)
            })
          break
      }
    },
  },
  getters: {
    characters: (state) => state.character,
    page: (state) => state.page,
    totalPage: (state) => state.totalPage,
    filterType: (state) => state.filterType,
    filterValue: (state) => state.filterValue,
    loading: (state) => state.loading,
  },
})
export function useStore(): Store<IStore> {
  return vuexUseStore(key)
}
