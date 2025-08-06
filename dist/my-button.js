import { createElementBlock as o, openBlock as s, createElementVNode as r, toDisplayString as c, defineCustomElement as l } from "vue";
const m = { class: "p-4 bg-gray-200" }, u = {
  __name: "MyButton",
  props: {
    label: { type: String, default: "Clique aqui" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    function i() {
      n("click");
    }
    return (f, d) => (s(), o("div", m, [
      r("button", {
        class: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        onClick: i
      }, c(e.label), 1)
    ]));
  }
}, a = l(u);
customElements.define("my-button", a);
