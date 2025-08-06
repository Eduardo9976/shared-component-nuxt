// src/MyButton.ce.ts
import { defineCustomElement } from 'vue'
import MyButton from '@/components/MyButton.vue'
import '@/assets/css/main.css'

const MyButtonElement = defineCustomElement(MyButton)

// Adicionar estilos inline ao custom element
const styles = document.createElement('style')
styles.textContent = `
  /* Estilos inline para garantir que funcionem */
  my-button {
    display: block;
  }
  
  my-button .p-4 {
    padding: 1rem;
  }
  
  my-button .bg-gray-200 {
    background-color: rgb(229 231 235);
  }
  
  my-button .inline-flex {
    display: inline-flex;
  }
  
  my-button .items-center {
    align-items: center;
  }
  
  my-button .justify-center {
    justify-content: center;
  }
  
  my-button .rounded-md {
    border-radius: 0.375rem;
  }
  
  my-button .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  my-button .font-medium {
    font-weight: 500;
  }
  
  my-button .transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  my-button .focus-visible\\:outline-none:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  
  my-button .focus-visible\\:ring-2:focus-visible {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
  
  my-button .focus-visible\\:ring-ring:focus-visible {
    --tw-ring-color: hsl(var(--ring));
  }
  
  my-button .focus-visible\\:ring-offset-2:focus-visible {
    --tw-ring-offset-width: 2px;
  }
  
  my-button .disabled\\:pointer-events-none:disabled {
    pointer-events: none;
  }
  
  my-button .disabled\\:opacity-50:disabled {
    opacity: 0.5;
  }
  
  my-button .bg-primary {
    background-color: hsl(var(--primary));
  }
  
  my-button .text-primary-foreground {
    color: hsl(var(--primary-foreground));
  }
  
  my-button .hover\\:bg-primary\\/90:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
  
  my-button .h-10 {
    height: 2.5rem;
  }
  
  my-button .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  my-button .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  /* CSS Variables para cores */
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
`

customElements.define('my-button', MyButtonElement)

// Adicionar estilos ao documento quando o custom element for carregado
if (typeof document !== 'undefined') {
  if (!document.querySelector('style[data-my-button-styles]')) {
    styles.setAttribute('data-my-button-styles', '')
    document.head.appendChild(styles)
  }
}
