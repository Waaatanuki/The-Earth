<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyImg from '../../components/MyImg.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <MyImg
        v-if="page.relativePath.startsWith('npc/') && frontmatter.id"
        :id="String(frontmatter.id)"
        type="npc"
        :name="frontmatter.name"
        class="character-avatar"
      />
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.character-avatar {
  margin-bottom: 24px;
}
</style>
