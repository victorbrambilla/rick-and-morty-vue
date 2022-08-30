<template>
  <div class="Acontainer">
    <div class="select is-rounded is-primary is-medium">
      <select class="inputSelect">
        <option class="option">Selecione o filtro</option>
        <option v-for="filter in FilterTypes" :value="filter.value">
          {{ filter.label }}
        </option>
      </select>
    </div>

    <div class="select is-rounded is-primary is-medium">
      <select class="inputSelect">
        <option class="option">Filtrar por status</option>
        <option v-for="item in status" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div class="select is-rounded is-primary is-medium">
      <select class="inputSelect">
        <option class="option">Filtrar por gênero</option>
        <option v-for="item in genders" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div class="select is-rounded is-primary is-medium">
      <select class="inputSelect">
        <option class="option">Filtrar por espécies</option>
        <option v-for="item in species" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div class="field">
      <p class="control has-icons-right has-icons-right">
        <input
          class="input is-rounded is-primary is-medium"
          type="text"
          placeholder="Filtrar por nome"
          is-rounded
          is-primary
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

  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Filter',
    setup() {
      return {
        FilterTypes,
        status,
        genders,
        species,
      }
    },
  })
</script>
<style scoped>
  .select {
    width: 100%;
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
