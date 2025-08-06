// src/MyButton.ce.ts
import { defineCustomElement } from 'vue'
import MyButton from '@/components/MyButton.vue'
import '@/assets/css/main.css'

const MyButtonElement = defineCustomElement(MyButton)
customElements.define('my-button', MyButtonElement)
