<template>
  <footer class="w-full border-t border-outline-variant/40 bg-surface-container-lowest mt-12" role="contentinfo">
    <div class="max-w-[1140px] mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <!-- Brand -->
      <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <span class="font-headline-sm text-headline-sm font-bold text-on-surface">
          Phạm Xuân Bắc
        </span>
        <span class="hidden sm:inline text-secondary font-label-mono text-label-mono">•</span>
        <span class="font-body-sm text-body-sm text-secondary">
          © {{ currentYear }} Phạm Xuân Bắc • Hệ thống kiến trúc chuẩn mực & hiệu năng cao
        </span>
      </div>

      <!-- Social Links -->
      <nav class="flex items-center gap-5 font-body-sm text-body-sm" aria-label="Footer links">
        <a :href="personalInfo.githubUrl" target="_blank" rel="noopener noreferrer"
          class="text-secondary hover:text-on-surface transition-colors duration-150" aria-label="GitHub profile">
          GitHub
        </a>
        <a :href="personalInfo.facebookUrl" target="_blank" rel="noopener noreferrer"
          class="text-secondary hover:text-on-surface transition-colors duration-150" aria-label="Facebook profile">
          Facebook
        </a>
        <a :href="'mailto:' + personalInfo.email" class="text-secondary hover:text-on-surface transition-colors duration-150"
          aria-label="Send email">
          Gửi Email
        </a>
        <a :href="personalInfo.cvUrl"
          download="Phạm Xuân Bắc - CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary-container font-medium underline underline-offset-4 hover:text-tertiary transition-colors duration-150"
          aria-label="Download CV">
          Tải CV
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { personalInfo } from '~/data/portfolioData'

const currentYear = new Date().getFullYear()
</script>
