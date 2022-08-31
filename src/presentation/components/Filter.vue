<template>
  <div class="Acontainer">
    <q-select
      contained
      v-model="filterTypeRef"
      :options="FilterTypes"
      style="width: 100%"
      label="Filtrar Por"
    />

    <q-select
      v-if="filterType === 'status'"
      contained
      v-model="filterValueRef"
      :options="status"
      style="width: 100%"
      label="Filtrar Por Status"
    />

    <q-select
      v-if="filterType === 'genero'"
      contained
      v-model="filterValueRef"
      :options="genders"
      style="width: 100%"
      label="Filtrar Por Gênero"
    />

    <q-select
      v-if="filterType === 'especie'"
      contained
      v-model="filterValueRef"
      :options="species"
      style="width: 100%"
      label="Filtrar Por Espécie"
    />

    <q-input
      v-if="filterType === 'nome'"
      contained
      debounce="1000"
      type="text"
      v-model="(filterValueRef as string)"
      label="Filtrar por nome"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>
<script lang="ts">
  import { FilterTypes } from '@/presentation/enums/filtersTypes'
  import { status } from '@/presentation/enums/status'
  import { genders } from '@/presentation/enums/gender'
  import { species } from '@/presentation/enums/species'

  import { computed, defineComponent, watch } from 'vue'
  import { useStore } from '@/presentation/store'
  import {
    SET_FILTER_TYPE,
    SET_FILTER_VALUE,
    SET_PAGE,
  } from '@/presentation/store/mutationsType'
  import { GET_CHARACTERS } from '@/presentation/store/actionsType'

  export default defineComponent({
    name: 'Filter',
    setup() {
      const store = useStore()
      const type = computed(() => store.state.filterType)

      const filterTypeRef = computed({
        get: () => FilterTypes.filter((item) => item.value === type.value)[0],
        set: (value: any) => store.commit(SET_FILTER_TYPE, value.value),
      })

      const filterValueRef = computed({
        get: () => {
          if (type.value === 'status') {
            return status.filter(
              (item) => item.value === store.state.filterValue
            )[0]
          }
          if (type.value === 'genero') {
            return genders.filter(
              (item) => item.value === store.state.filterValue
            )[0]
          }
          if (type.value === 'especie') {
            return species.filter(
              (item) => item.value === store.state.filterValue
            )[0]
          }
          if (type.value === 'nome') {
            return store.state.filterValue
          }
        },
        set: (value: any) => {
          store.commit(SET_FILTER_VALUE, value.value || value),
            store.commit(SET_PAGE, 1)
          store.dispatch(GET_CHARACTERS)
        },
      })
      watch(type, (newValue: string, oldValue: string) => {
        if (newValue == 'nenhum') {
          store.commit(SET_FILTER_TYPE, 'nenhum')
          store.commit(SET_FILTER_VALUE, '')
          store.dispatch(GET_CHARACTERS)
        }
      })

      return {
        FilterTypes,
        status,
        genders,
        species,
        filterType: type,
        filterValue: computed(() => store.state.filterValue),
        filterTypeRef,
        filterValueRef,
      }
    },
  })
</script>
<style scoped>
  .select {
    width: 100%;
  }
  .label {
    color: #fff;
  }
  .Acontainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .inputSelect {
    width: 100%;
    color: white;
    background-color: rgb(18, 18, 18);
  }
  .input {
    width: 100%;
    color: white;
    background-color: rgb(18, 18, 18);
  }
  .input::placeholder {
    color: white;
  }
</style>
