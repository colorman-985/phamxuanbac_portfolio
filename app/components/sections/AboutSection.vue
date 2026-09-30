<template>
  <section id="about" class="py-12 md:py-18 border-b border-surface-container" aria-labelledby="about-heading">
    <div class="max-w-[720px] mx-auto">
      <!-- Heading -->
      <h2 id="about-heading"
        class="font-headline-lg text-headline-lg font-semibold text-on-surface mb-6 tracking-tight">
        Thiết kế Kiến trúc Chuẩn mực &amp; Hệ thống Bền bỉ
      </h2>

      <!-- Bio -->
      <p class="font-body-lg text-body-lg text-secondary leading-relaxed mb-8">
        {{ personalInfo.fullBio }}
      </p>

      <!-- Education/Highlight Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div v-for="item in education" :key="item.id"
          class="p-4 rounded-xl border shadow-sm relative overflow-hidden transition-all duration-150 hover:shadow-md"
          :class="item.highlight
              ? 'bg-surface-container-lowest border-primary-container/30 hover:border-primary-container/60'
              : 'bg-surface-container-lowest border-surface-variant/80'
            ">
          <!-- Accent corner for highlighted card -->
          <div v-if="item.highlight" class="absolute top-0 right-0 w-12 h-12 bg-primary-container/5 rounded-bl-2xl" />

          <span class="font-label-mono text-label-mono block mb-1"
            :class="item.highlight ? 'text-primary-container font-medium' : 'text-secondary'">
            {{ item.label }}
          </span>
          <div class="font-headline-sm text-headline-sm font-semibold"
            :class="item.highlight ? 'text-primary-container' : 'text-on-surface'">
            {{ item.title }}
          </div>
          <span class="font-body-sm text-body-sm text-secondary">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { personalInfo, education } from '~/data/portfolioData'
</script>
