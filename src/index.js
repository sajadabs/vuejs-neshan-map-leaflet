import { defineComponent } from "vue";
import NeshanMapLeaflet from "@/components/NeshanMapLeaflet.vue";

export default defineComponent({
    name: 'NeshanMapLeaflet',
    install(app) {
        app.component('NeshanMapLeaflet', NeshanMapLeaflet)
    }
})
