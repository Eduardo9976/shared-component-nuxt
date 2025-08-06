<template>
  <div class="p-4 bg-gray-200">
    <UButton
      color="primary"
      variant="solid"
      @click="onClick"
    >
      {{ label }}
    </UButton>
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
