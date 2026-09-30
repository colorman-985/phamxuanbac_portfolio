<template>
  <NuxtLayout name="default">
    <div class="max-w-[1140px] mx-auto px-4 md:px-6">
      <SectionsHeroSection />
      <SectionsAboutSection />
      <SectionsSkillsSection />
      <SectionsProjectsSection />
      <SectionsContactSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { personalInfo } from '~/data/portfolioData'

// SEO Meta Tags
useSeoMeta({
  title: 'Phạm Xuân Bắc — Backend Developer',
  description:
    'Phạm Xuân Bắc – Lập trình viên Backend chuyên sâu về Laravel, PHP, MySQL và thiết kế RESTful API. Fresher tại TP. Cần Thơ, Việt Nam.',
  ogTitle: 'Phạm Xuân Bắc — Backend Developer',
  ogDescription:
    'Lập trình viên Backend chuyên sâu về Laravel, PHP, MySQL và thiết kế RESTful API. GPA 3.92 – Tốt nghiệp Thủ khoa FPT Polytechnic.',
  ogType: 'website',
  ogLocale: 'vi_VN',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Phạm Xuân Bắc — Backend Developer',
  twitterDescription:
    'Lập trình viên Backend chuyên sâu về Laravel, PHP, MySQL và RESTful API. Làm việc tại TP. Cần Thơ.',
})

// Schema.org JSON-LD Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        description: personalInfo.bio,
        email: personalInfo.email,
        url: 'https://leminhquocbao.dev',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Can Tho City',
          addressCountry: 'VN',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'FPT Polytechnic',
        },
        sameAs: [
          personalInfo.githubUrl,
          personalInfo.facebookUrl,
        ],
        knowsAbout: [
          'Laravel',
          'PHP',
          'MySQL',
          'RESTful API',
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'Backend Developer',
        ],
      }),
    },
  ],
})
</script>
