import { openBlock as s, createElementBlock as c, normalizeStyle as p, defineComponent as l } from "vue";
const d = "https://static.neshan.org", i = `${d}/sdk/leaflet/1.4.0/leaflet.js`, f = (t) => (() => {
  const { onError: n, onLoad: o } = t, e = document.createElement("script");
  e.src = i, e.onload = () => {
    o && o();
  }, e.onerror = () => {
    n && n();
  }, document.body.appendChild(e);
})();
const m = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [o, e] of r)
    n[o] = e;
  return n;
}, u = {
  width: "600px",
  height: "450px",
  margin: 0,
  padding: 0,
  background: "#eee",
  border: "2px solid #aaa"
}, a = {
  key: "YOUR_API_KEY",
  maptype: "dreamy",
  poi: !0,
  traffic: !1,
  center: [35.699739, 51.338097],
  zoom: 14
}, h = {
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
  data() {
    return {
      bannerStyles: {
        ...u,
        ...this.styles
      },
      ...a
    };
  },
  mounted() {
    f({
      onLoad: () => {
        new window.L.Map(this.$refs.mapEl.id, { ...a, ...this.options });
      },
      onError: () => {
        console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly");
      }
    });
  }
};
function y(t, r, n, o, e, E) {
  return s(), c("div", {
    id: "map",
    ref: "mapEl",
    style: p(e.bannerStyles)
  }, null, 4);
}
const _ = /* @__PURE__ */ m(h, [["render", y]]), b = l({
  name: "NeshanMapLeaflet",
  install(t) {
    t.component("NeshanMapLeaflet", _);
  }
});
export {
  b as default
};
