<template>
  <vue-awesome-paginate
    :total-items="count"
    :items-per-page="20"
    :max-pages-shown="5"
    :current-page="page"
    :on-click="onClickHandler"
  />
</template>
<script lang="ts">
  import { useStore } from '@/presentation/store'
  import { computed, defineComponent } from 'vue'

  export default defineComponent({
    name: 'Paginator',
    setup() {
      const store = useStore()
      const onClickHandler = (page: number) => {
        store.commit('SET_PAGE', page)
        store.dispatch('GET_CHARACTERS')
      }
      return {
        onClickHandler,
        page: computed(() => store.state.page),
        count: computed(() => store.state.count),
      }
    },
  })
</script>
<style>
  .pagination-container {
    display: flex;
    justify-content: center;
    width: 100%;
    column-gap: 10px;
    padding: 20px 0;
  }
  .paginate-buttons {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
  }
  .paginate-buttons:hover {
    background-color: #00d1b2;
    color: white;
  }
  .active-page {
    background-color: #00d1b2;
    border: 1px solid #00d1b2;
    color: white;
  }
  .active-page:hover {
    background-color: #00d1b2;
  }
</style>
