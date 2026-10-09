<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <p v-if="frontmatter.applies_to" class="version-pin">
        Applies to {{ frontmatter.applies_to }}.
        <template v-if="frontmatter.verified">
          Last verified {{ frontmatter.verified }}.
        </template>
        <a v-if="frontmatter.manual" :href="frontmatter.manual">Official manual</a>
      </p>
    </template>
  </Layout>
</template>
