<template>
  <section id="skills" class="py-12 md:py-18 border-b border-surface-container" aria-labelledby="skills-heading">
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
      <div>
        <h2 id="skills-heading" class="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight">
          Kỹ năng &amp; Hệ sinh thái Công nghệ
        </h2>
      </div>
      <p class="font-body-sm text-body-sm text-secondary max-w-sm">
        Năng lực kỹ thuật vững chắc xoay quanh hệ sinh thái PHP/Laravel, cơ sở dữ liệu và các công cụ phát triển hiện đại.
      </p>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="skill in skills" :key="skill.id"
        class="p-5 rounded-2xl bg-surface-container-lowest border border-surface-variant/80 shadow-sm hover:border-outline-variant hover:shadow-md transition-all duration-200"
        :class="skill.span">
        <!-- Card Header -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="font-headline-sm text-headline-sm font-semibold text-on-surface">
              {{ skill.title }}
            </span>
            <span v-if="skill.badge"
              class="px-2 py-0.5 rounded bg-primary-container/10 text-primary-container font-label-mono text-label-mono">
              {{ skill.badge }}
            </span>
          </div>
          <span class="material-symbols-outlined" :class="skill.iconColor">{{ skill.icon }}</span>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in skill.tags" :key="tag"
            class="px-2.5 py-1 rounded-md bg-surface-container-low border border-surface-variant text-on-surface font-label-mono text-label-mono hover:border-outline-variant transition-colors duration-150 cursor-default">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '~/data/portfolioData'
</script>
