import { resolveComponent as c, createElementBlock as i, openBlock as m, createVNode as s, defineCustomElement as a } from "vue";
const r = { class: "p-4 bg-gray-200" }, u = {
  __name: "MyButton",
  props: {
    label: { type: String, default: "Clique aqui" }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e;
    function o() {
      n("click");
    }
    return (_, d) => {
      const l = c("UButton");
      return m(), i("div", r, [
        s(l, {
          label: t.label,
          color: "primary",
          onClick: o,
          variant: "solid"
        }, null, 8, ["label"])
      ]);
    };
  }
}, p = a(u);
customElements.define("my-button", p);
