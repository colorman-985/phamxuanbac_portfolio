<template>
  <section id="hero" class="pt-16 pb-12 md:py-24 border-b border-surface-container" aria-labelledby="hero-heading">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <!-- Left narrative col -->
      <div class="lg:col-span-7 flex flex-col items-start gap-4">
        <!-- Tag Pill -->
        <div
          class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-lowest border border-surface-variant text-secondary shadow-sm">
          <span class="font-label-mono text-label-mono text-on-surface font-medium">
            {{ personalInfo.heroTags }}
          </span>
        </div>

        <!-- Heading -->
        <div class="space-y-2">
          <p class="font-code-inline text-code-inline text-primary-container font-medium tracking-wide">
            XIN CHÀO, TÔI LÀ
          </p>
          <h1 id="hero-heading"
            class="font-headline-xl md:font-display text-headline-xl md:text-display text-on-surface tracking-tight font-semibold">
            {{ personalInfo.name }}
          </h1>
          <div class="flex flex-col sm:flex-row sm:items-center gap-2">
            <p class="font-headline-md text-headline-md text-secondary font-normal">
              {{ personalInfo.title }}
            </p>
            <span
              class="text-on-surface-variant font-label-mono text-label-mono border border-surface-variant px-2 py-0.5 rounded ml-1 bg-surface-container-lowest">
              {{ personalInfo.level }}
            </span>
          </div>
        </div>

        <!-- Bio -->
        <p class="font-body-lg text-body-lg text-secondary max-w-xl">
          {{ personalInfo.bio }}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a :href="personalInfo.cvUrl" download="Phạm Xuân Bắc - CV.pdf" target="_blank" rel="noopener noreferrer"
            id="hero-download-cv"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container hover:bg-tertiary text-on-primary-container font-label-md text-label-md transition-all duration-150 border border-tertiary shadow-sm active:scale-95">
            <span>Tải CV</span>
            <span class="material-symbols-outlined text-[18px]">download</span>
          </a>
          <a :href="personalInfo.githubUrl" target="_blank" rel="noopener noreferrer" id="hero-github"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 hover:border-outline text-on-surface font-label-md text-label-md transition-all duration-150 active:scale-95 shadow-sm"
            aria-label="GitHub profile">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        <!-- Telemetry Bar -->
        <div
          class="pt-4 flex flex-wrap items-center gap-4 text-secondary font-label-mono text-label-mono border-t border-surface-container/60 w-full max-w-md">
          <!-- <span class="flex items-center gap-1.5">
            <span class="text-primary-container"></span>
            {{ personalInfo.availability }}
          </span> -->
          <span class="text-outline-variant hidden sm:inline">|</span>
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px] text-secondary">location_on</span>
            <span>{{ personalInfo.location }}</span>
          </span>
        </div>
      </div>

      <!-- Right — Developer Card -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <div
          class="w-full max-w-sm rounded-2xl bg-surface-container-lowest p-3 border border-surface-variant/70 shadow-sm relative group hover:border-outline-variant transition-all duration-200">
          <!-- Window Controls Header -->
          <!-- <div
            v-if="personalInfo.status"
            class="flex items-center justify-between px-2 pb-3 pt-1 border-b border-surface-container font-label-mono text-label-mono text-secondary">
            <div class="flex items-center gap-1.5">
            </div>
            <span class="text-primary-container font-medium">
              trạng thái: {{ personalInfo.status }}
            </span>
          </div> -->

          <!-- Photo Frame -->
          <div
            class="relative mt-3 rounded-xl overflow-hidden aspect-square border border-surface-container bg-surface-container-low">
            <img :src="personalInfo.photo" :alt="`${personalInfo.name} - ${personalInfo.title}`"
              class="w-full h-full object-cover object-center grayscale-[15%] contrast-105 group-hover:grayscale-0 transition-all duration-300"
              loading="eager" width="400" height="400" />
            <!-- Floating Badge -->
            <!-- <div
              v-if="personalInfo.status"
              class="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full border border-surface-variant/80 flex items-center gap-2 shadow-sm">
              <span class="font-label-mono text-label-mono text-on-surface font-medium">
                {{ personalInfo.status }}
              </span>
            </div> -->
          </div>

          <!-- Card Footer -->
          <div
            class="mt-3 p-2.5 rounded-lg bg-surface-container-low/60 border border-surface-container flex items-center justify-between font-label-mono text-label-mono text-secondary">
            <span class="text-on-surface font-medium">Công nghệ: {{ personalInfo.stack }}</span>
            <!-- <span v-if="personalInfo.latency" class="text-primary-container font-semibold">{{ personalInfo.latency }}</span> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { personalInfo } from '~/data/portfolioData'
</script>
