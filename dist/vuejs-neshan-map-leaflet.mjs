import { ref as l, openBlock as s, createElementBlock as o, Fragment as p, createElementVNode as t, defineComponent as r } from "vue";
const c = /* @__PURE__ */ t("button", null, "sajad", -1), d = {
  __name: "NeshanMapLeaflet",
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const n = {
      ...{
        width: "600px",
        height: "450px",
        margin: 0,
        padding: 0,
        background: "#eee",
        border: "2px solid #aaa"
      },
      ...e.styles
    }, a = l(null);
    return (m, u) => (s(), o(p, null, [
      t("div", {
        id: "map",
        ref_key: "mapEl",
        ref: a,
        style: n
      }, null, 512),
      c
    ], 64));
  }
}, _ = r({
  name: "NeshanMapLeaflet",
  install(e) {
    e.component("NeshanMapLeaflet", d);
  }
});
export {
  _ as default
};
