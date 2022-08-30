<template>
  <div class="Acontainer">
    <div class="field">
      <label class="label is-medium">Filtrar Por</label>
      <div class="control">
        <div class="select is-rounded is-primary is-medium">
          <select
            class="inputSelect"
            :value="filterType"
            @input="setFilterType($event)"
          >
            <option v-for="filter in FilterTypes" :value="filter.value">
              {{ filter.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div
      class="select is-rounded is-primary is-medium"
      v-if="filterType === 'status'"
    >
      <select class="inputSelect" @input="setFilterValue($event)">
        <option v-for="item in status" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div
      class="select is-rounded is-primary is-medium"
      v-if="filterType === 'genero'"
    >
      <select class="inputSelect" @input="setFilterValue($event)">
        <option v-for="item in genders" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div
      class="select is-rounded is-primary is-medium"
      v-if="filterType === 'especie'"
    >
      <select class="inputSelect" @input="setFilterValue($event)">
        <option v-for="item in species" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div class="field" v-if="filterType === 'nome'">
      <p class="control has-icons-right has-icons-right">
        <input
          class="input is-rounded is-primary is-medium"
          type="text"
          placeholder="Filtrar por nome"
          is-rounded
          is-primary
          @input="setFilterValue($event)"
        />
        <span class="icon is-small is-right">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
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
  } from '@/presentation/store/mutationsType'
  import { GET_CHARACTERS } from '@/presentation/store/actionsType'

  export default defineComponent({
    name: 'Filter',
    setup() {
      const store = useStore()
      const type = computed(() => store.state.filterType)

      watch(type, (oldValue: string, newValue: string) => {
        if (oldValue !== newValue && newValue !== 'nenhum') {
          store.commit(SET_FILTER_TYPE, 'nenhum')
          store.commit(SET_FILTER_VALUE, '')
          store.dispatch(GET_CHARACTERS)
        }
      })

      const setFilterType = (event: any) => {
        store.commit(SET_FILTER_TYPE, event?.target?.value)
      }
      const setFilterValue = (event: any) => {
        store.commit(SET_FILTER_VALUE, event?.target?.value)
        store.dispatch(GET_CHARACTERS)
      }

      return {
        FilterTypes,
        status,
        genders,
        species,
        filterType: type,
        filterValue: computed(() => store.state.filterValue),
        setFilterType,
        setFilterValue,
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
