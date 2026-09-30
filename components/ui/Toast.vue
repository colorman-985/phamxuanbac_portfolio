<template>
  <Transition name="toast">
    <div v-if="toast.visible"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2.5 px-4 py-3 rounded-xl bg-on-surface text-inverse-on-surface shadow-lg border border-on-surface/10 backdrop-blur-sm"
      role="status" aria-live="polite">
      <span class="material-symbols-outlined text-[16px] text-primary-fixed-dim">check_circle</span>
      <span class="font-label-mono text-label-mono font-medium text-sm">{{ toast.message }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'
const { toast } = useToast()
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px) scale(0.95);
}

.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}
</style>
