<template>
  <Filter />
  <progress v-if="loading" class="progress is-small is-primary mt-5" max="100">
    15%
  </progress>
  <div class="containerItems" v-if="!loading">
    <Card
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>

  <Paginator v-if="!loading" />
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import Filter from '../components/Filter.vue'
  import Card from '../components/Card.vue'
  import Paginator from '../components/Paginator.vue'
  import { useStore } from '@/presentation/store'
  import { GET_CHARACTERS } from '@/presentation/store/actionsType'
  export default defineComponent({
    name: 'Home',
    components: {
      Filter,
      Card,
      Paginator,
    },
    setup() {
      const store = useStore()
      store.dispatch(GET_CHARACTERS)
      return {
        characters: computed(() => store.state.character),
        loading: computed(() => store.state.loading),
      }
    },
  })
</script>

<style>
  .containerItems {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    .containerItems {
      justify-content: center;
    }
  }
</style>
