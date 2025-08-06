import { resolveComponent as i, createElementBlock as l, openBlock as r, createVNode as s, withCtx as a, createTextVNode as m, toDisplayString as u, defineCustomElement as p } from "vue";
const _ = { class: "p-4 bg-gray-200" }, d = {
  __name: "MyButton",
  props: {
    label: { type: String, default: "Clique aqui" }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = e;
    function n() {
      o("click");
    }
    return (y, k) => {
      const c = i("UButton");
      return r(), l("div", _, [
        s(c, {
          color: "primary",
          variant: "solid",
          onClick: n
        }, {
          default: a(() => [
            m(u(t.label), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
}, f = p(d);
customElements.define("my-button", f);
