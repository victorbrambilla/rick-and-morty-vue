<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="character.image" alt="Character image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ character.name }}</p>
          </div>
        </div>

        <div class="content">
          <strong>Status: </strong>{{ character.status
          }}{{ character.status === 'Alive' ? '🟢' : '🔴' }}
        </div>
      </div>
      <footer class="card-footer">
        <button class="button is-primary card-footer-item">Ver</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
  import { CharacterModel } from '@/domain/models'
  import { defineComponent, PropType } from 'vue'
  export default defineComponent({
    name: 'Card',
    props: {
      character: {
        type: Object as PropType<CharacterModel>,
        required: true,
      },
    },
  })
</script>

<style>
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
  .button {
    width: 100%;
  }
  @media (max-width: 768px) {
    .card {
      width: 200px;
      min-height: 300px;
    }
    .card-image {
      min-height: 200px;
    }
  }
  @media (max-width: 425px) {
    .card {
      width: 250px;
      min-height: 250px;
    }
    .card-image {
      min-height: 250px;
    }
  }
</style>
