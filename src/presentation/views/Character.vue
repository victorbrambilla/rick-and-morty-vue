<template>
  <i class="icon fa-solid fa-arrow-left" @click="goHome"></i>
  <div class="containera">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="character.image" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="character.image" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ character.name }}</p>
            <p class="subtitle is-6">
              {{ character.status }}
              {{ character.status === 'Alive' ? '🟢' : '🔴' }}
            </p>
          </div>
        </div>

        <div class="content">
          <div><strong>Origem: </strong>{{ character.origin?.name }}</div>
          <div><strong>Espécie: </strong>{{ character.species }}</div>
          <div><strong>Genero: </strong>{{ character.gender }}</div>
          <div>
            <strong>Localização: </strong>{{ character.location?.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { CharacterModel } from '@/domain/models'
  import { makeRemoteGetCharacterById } from '@/main/fatories/usecases'
  import { defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    name: 'Character',
    data() {
      return {
        character: {} as CharacterModel,
      }
    },
    methods: {
      goHome() {
        this.$router.push('/')
      },
    },

    async created() {
      const character = makeRemoteGetCharacterById().perform({
        id: +this.$route.params.id,
      })
      this.character = await character
    },
  })
</script>
<style scoped>
  .icon {
    text-align: center;
    font-size: 38px;
    width: 100%;
    color: #00d1b2;
  }
  .containera {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100%;
  }
  .card {
    width: 300px;

    border-radius: 30px !important;
    min-height: 400px;
  }
  .card-image {
    min-height: 300px;
  }
  .card-image img {
    width: 100%;
    height: auto !important;
    border-radius: 30px !important;
  }
  .media-left img {
    border-radius: 50%;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
</style>
