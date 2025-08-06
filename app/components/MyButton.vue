<template>
  <div class="p-4 bg-gray-200">
    <button 
      class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      @click="onClick"
    >
      {{ label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  label: {type: String, default: 'Clique aqui'},
})
const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}
</script>
