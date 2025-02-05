<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ id: string, type: string, name: string }>()

const imgUrl = computed(() => {
  switch (props.type) {
    case 'weapon':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/weapon/m/${props.id}.jpg`
    case 'npc':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/npc/m/${props.id}_01.jpg`
    case 'summon':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/summon/m/${props.id}.jpg`
    default:
      return ''
  }
})

const wikiUrl = computed(() => {
  switch (props.type) {
    case 'weapon':
      return `https://gbf.huijiwiki.com/wiki/Weapon/${props.id}`
    case 'npc':
      return `https://gbf.huijiwiki.com/wiki/Char/${props.id}`
    case 'summon':
      return `https://gbf.huijiwiki.com/wiki/Summon/${props.id}`
    default:
      return ''
  }
})
</script>

<template>
  <div>
    <img :src="imgUrl" :alt="name" max-w-100px>
    <a :href="wikiUrl" target="_blank">{{ name }}</a>
  </div>
</template>
