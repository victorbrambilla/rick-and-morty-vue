<template>
  <div>
    <q-card class="my-card">
      <img :src="character.image" />
      <q-card-section>
        <div class="text-h5">{{ character.name }}</div>
        <div class="text-subtitle2">
          <span class="text-h7">Status:</span>
          {{ character.status }}{{ character.status === 'Alive' ? '🟢' : '🔴' }}
        </div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn class="button" color="primary" @click="seeCharacter">Ver</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
  import { CharacterModel } from '@/domain/models'
  import { defineComponent, PropType } from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'Card',
    props: {
      character: {
        type: Object as PropType<CharacterModel>,
        required: true,
      },
    },

    setup(props) {
      const router = useRouter()
      const seeCharacter = () => {
        router.push({
          name: 'Character',
          params: { id: props.character.id },
        })
      }
      return {
        seeCharacter,
      }
    },
  })
</script>

<style scoped>
  .my-card {
    border-radius: 15px;
  }
  .button {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
</style>
