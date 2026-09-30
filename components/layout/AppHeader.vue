<template>
  <header
    class="sticky top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-container shadow-sm"
    role="banner">
    <div class="max-w-[1140px] mx-auto px-4 md:px-6 flex justify-between items-center h-14">
        <!-- Brand & Status -->
      <div class="flex items-center gap-3">
        <a href="#hero"
          class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface flex items-center gap-2 hover:text-primary-container transition-colors duration-150"
          aria-label="Phạm Xuân Bắc - Trang chủ">
          <span class="material-symbols-outlined text-primary-container">terminal</span>
          <span>Phạm Xuân Bắc</span>
        </a>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
        <a v-for="link in navLinks" :key="link.href" :href="link.href"
          class="text-secondary hover:text-on-surface font-normal transition-colors duration-150 text-body-sm">
          {{ link.label }}
        </a>
      </nav>

      <!-- Trailing Actions -->
      <div class="flex items-center gap-3">
        <!-- GitHub -->
        <a :href="personalInfo.githubUrl" target="_blank" rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-outline-variant/40 hover:border-outline text-secondary hover:text-on-surface font-code-inline text-code-inline transition-all duration-150 active:scale-95 bg-surface-container-lowest shadow-sm"
          aria-label="GitHub profile">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>

        <!-- Download CV -->
        <a :href="personalInfo.cvUrl"
          download="Phạm Xuân Bắc - CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary-container hover:bg-tertiary text-on-primary-container font-label-md text-label-md transition-all duration-150 active:scale-95 shadow-sm border border-tertiary"
          id="nav-download-cv">
          <span>Tải CV</span>
          <span class="material-symbols-outlined text-[16px]">download</span>
        </a>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 rounded-lg hover:bg-surface-container transition-colors"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'" :aria-expanded="mobileOpen" @click="toggleMobile"
          id="mobile-menu-toggle">
          <span class="block h-0.5 bg-on-surface transition-all duration-200 origin-center"
            :class="mobileOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'" />
          <span class="block h-0.5 bg-on-surface transition-all duration-200"
            :class="mobileOpen ? 'w-5 opacity-0' : 'w-4'" />
          <span class="block h-0.5 bg-on-surface transition-all duration-200 origin-center"
            :class="mobileOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'" />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <LayoutMobileMenu :is-open="mobileOpen" @close="mobileOpen = false" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { personalInfo } from '~/data/portfolioData'

const mobileOpen = ref(false)

const navLinks = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#skills', label: 'Kỹ năng' },
  { href: '#projects', label: 'Dự án' },
  { href: '#contact', label: 'Liên hệ' },
]

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

// Close mobile menu on escape key
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') mobileOpen.value = false
  })
})
</script>
