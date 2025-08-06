<template>
  <div class="p-4 bg-gray-200">
    <UButton :label="label" color="primary" @click="onClick" variant="solid"/>
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
