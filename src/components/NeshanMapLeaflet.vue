<template>
    <div :id="componentUid" :style="bannerStyles">
        <div :style="markerStyles"></div>
    </div>
</template>
<script setup>
import marker from '../images/marker_red.png';
import NeshanMapLoader from '../neshan-map-loader';
import { onMounted } from "vue";

const defaultOptions = {
    key: 'YOUR_API_KEY',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [36.30284183765441, 59.5958496945331],
    zoom: 14,
};

const defaultStyles = {
    width: '600px',
    height: '450px',
    margin: 0,
    padding: 0,
    background: '#eee',
    border: '2px solid #aaa',
    position: 'relative'
};

const markerStyles = {
    width: '30px',
    height: '44px',
    background: 'transparent center center no-repeat',
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-44px auto auto -15px',
    zIndex: '401',
    'background-image': 'url(' + marker + ')'
}

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

const componentUid = 'map-' + Math.floor(Math.random() * 100);

const emits = defineEmits(['latitude', 'longitude']);

onMounted(() => {
    NeshanMapLoader({
        onLoad: () => {
            const _map = new window.L.Map(componentUid, { ...defaultOptions, ...props.options });
            _map.on('moveend', function () {
                const point = _map.getCenter();
                emits('latitude', point.lat);
                emits('longitude', point.lng);
            });
        },
        onError: () => {
            console.error('Neshan Maps Error: This page didn\'t load Neshan Maps correctly')
        },
    })
});
</script>
