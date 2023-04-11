import { onMounted as s, openBlock as E, createElementBlock as p, createElementVNode as m } from "vue";
const M = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAArCAYAAACEsIO/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MzlmMDM2MC1jMTExLTRhOTAtYmEzOC0wOWY3MDY5OWRlOGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzEyN0JCMEIwOUQ5MTFFOThFMDFGMEExMEEyQTE3MzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzEyN0JCMEEwOUQ5MTFFOThFMDFGMEExMEEyQTE3MzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjc1ODRiYi1jMGE5LTQ1MTMtYWU0My1iNjhlNjRmMDNmOTIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplMjJmYTZjZS00ZjEwLTExN2MtOWE1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", r = "https://static.neshan.org", h = `${r}/sdk/leaflet/1.4.0/leaflet.js`, u = `${r}/sdk/leaflet/1.4.0/leaflet.css`;
function G(a) {
  return (() => {
    const { onError: e, onLoad: o } = a, t = document.createElement("script"), n = document.createElement("link");
    n.rel = "stylesheet", n.href = u, t.src = h, t.onload = () => {
      o && o();
    }, t.onerror = () => {
      e && e();
    }, document.body.appendChild(t), document.head.appendChild(n);
  })();
}
const Y = {
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
  emits: ["latitude", "longitude"],
  setup(a, { emit: i }) {
    const e = a, o = {
      key: "YOUR_API_KEY",
      maptype: "dreamy",
      poi: !0,
      traffic: !1,
      center: [36.30284183765441, 59.5958496945331],
      zoom: 14
    }, t = {
      width: "600px",
      height: "450px",
      margin: 0,
      padding: 0,
      background: "#eee",
      border: "2px solid #aaa",
      position: "relative"
    }, n = {
      width: "30px",
      height: "44px",
      background: "transparent center center no-repeat",
      position: "absolute",
      left: "50%",
      top: "50%",
      margin: "-44px auto auto -15px",
      zIndex: "401",
      "background-image": "url(" + M + ")"
    }, A = {
      ...t,
      ...e.styles
    }, d = "map-" + Math.floor(Math.random() * 100);
    return s(() => {
      G({
        onLoad: () => {
          const c = new window.L.Map(d, { ...o, ...e.options });
          c.on("moveend", function() {
            const l = c.getCenter();
            i("latitude", l.lat), i("longitude", l.lng);
          });
        },
        onError: () => {
          console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly");
        }
      });
    }), (c, l) => (E(), p("div", {
      id: d,
      style: A
    }, [
      m("div", { style: n })
    ]));
  }
};
export {
  Y as NeshanMapLeaflet
};
