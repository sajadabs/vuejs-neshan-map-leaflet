<template>
    <div id="map" ref="mapEl" :style="bannerStyles"></div>
    <button>sajad</button>
</template>
<script setup>
import NeshanMapLoader from '../neshan-map-loader';
import '../styles/app.css';
import { onMounted, ref } from "vue";

const defaultOptions = {
    key: 'YOUR_API_KEY',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [35.699739, 51.338097],
    zoom: 14,
};

const defaultStyles = {
    width: '600px',
    height: '450px',
    margin: 0,
    padding: 0,
    background: '#eee',
    border: '2px solid #aaa'
};

const props = defineProps({
    options: {
        type: Object,
        default: () => ({}),
    },
    styles: {
        type: Object,
        default: () => ({}),
    }
});

const bannerStyles = {
    ...defaultStyles,
    ...props.styles
};

const mapEl = ref(null);

/*onMounted(() => {
    NeshanMapLoader({
        onLoad: () => {
            new window.L.Map(mapEl.value.id, { ...defaultOptions, ...props.options })
        },
        onError: () => {
            console.error('Neshan Maps Error: This page didn\'t load Neshan Maps correctly')
        },
    })
});*/
</script>
