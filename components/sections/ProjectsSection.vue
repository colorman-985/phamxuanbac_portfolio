<template>
  <section id="projects" class="py-16 md:py-24 border-b border-gray-100" aria-labelledby="projects-heading">
    <!-- Section Header -->
    <div class="mb-14">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <h2 id="projects-heading" class="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight leading-tight">
          Dự án tiêu biểu
        </h2>
        <a :href="personalInfo.githubUrl" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150 font-medium group">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          Xem tất cả trên GitHub
          <span class="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
        </a>
      </div>
    </div>

    <!-- Project Cards -->
    <div class="space-y-8">
      <article v-for="(project, index) in projects" :key="project.id"
        class="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
        :aria-labelledby="`project-title-${project.id}`">
        <!-- 16:9 Screenshot -->
        <div class="relative w-full aspect-video bg-gray-100 overflow-hidden border-b border-gray-100">
          <img v-if="project.image" :src="project.image" :alt="`${project.title} screenshot`"
            class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy" />
          <div v-else class="w-full h-full bg-gradient-to-br"
            :class="placeholderGradients[index % placeholderGradients.length]">
            <!-- Grid overlay decoration -->
            <div class="absolute inset-0 opacity-10"
              style="background-image: linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 40px 40px;" />
            <!-- Centered project name watermark for fallback -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center select-none pointer-events-none">
                <h3 class="text-2xl md:text-4xl font-bold text-white/20 tracking-tight">{{ project.title }}</h3>
              </div>
            </div>
          </div>

          <!-- Featured badge top-left -->
          <div class="absolute top-4 left-4 z-10">
          </div>

          <!-- Year top-right -->
          <div class="absolute top-4 right-4 z-10">
            <span
              class="font-jetbrains text-[11px] text-white font-medium tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
              {{ project.year }}
            </span>
          </div>

          <!-- Bottom gradient fade -->
          <div
            class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        <!-- Card Body -->
        <div class="p-7 md:p-8">
          <!-- Title + Role row -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 :id="`project-title-${project.id}`"
                class="text-xl md:text-2xl font-semibold text-gray-950 tracking-tight leading-tight">
                {{ project.title }}
              </h3>
              <p class="mt-1 text-sm text-gray-400 font-medium font-jetbrains">
                {{ project.role }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-2.5 shrink-0">
              <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900 text-sm font-medium transition-all duration-150 active:scale-95"
                :aria-label="`${project.title} on GitHub`">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <!-- Short description -->
          <p class="text-gray-600 text-[15px] leading-relaxed mb-5 max-w-2xl">
            {{ project.shortDescription }}
          </p>

          <!-- Metric Chips (Featured project only) -->
          <div v-if="project.metrics.length > 0" class="flex flex-wrap gap-2 mb-5">
            <span v-for="metric in project.metrics" :key="metric"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 font-jetbrains text-[11px] font-semibold tracking-wide">
              {{ metric }}
            </span>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gray-100 mb-5" />

          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-2">
            <span v-for="badge in project.badges" :key="badge"
              class="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-600 font-jetbrains text-[11px] font-medium tracking-wide hover:border-gray-400 hover:bg-white transition-all duration-150 cursor-default">
              {{ badge }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects, personalInfo } from '~/data/portfolioData'

const placeholderGradients = [
  'from-gray-900 via-red-950 to-gray-900',
  'from-slate-900 via-slate-800 to-slate-900',
  'from-zinc-900 via-zinc-800 to-zinc-900',
]
</script>

<style scoped>
.font-jetbrains {
  font-family: 'JetBrains Mono', monospace;
}
</style>
