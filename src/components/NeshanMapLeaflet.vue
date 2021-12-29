<template>
    <div id="map" ref="mapEl" :style="bannerStyles"></div>
</template>
<script>
import NeshanMapLoader from '@/neshan-map-loader.js'
import '@/styles/app.css'

const defaultStyles = {
    width: '600px',
    height: '450px',
    margin: 0,
    padding: 0,
    background: '#eee',
    border: '2px solid #aaa'
}

const defaultOptions = {
    key: 'YOUR_API_KEY',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [35.699739, 51.338097],
    zoom: 14,
}

export default {
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
        styles: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            bannerStyles: {
                ...defaultStyles,
                ...this.styles
            },
            ...defaultOptions,
        }
    },
    mounted() {
        NeshanMapLoader({
            onLoad: () => {
                new window.L.Map(this.$refs.mapEl.id, { ...defaultOptions, ...this.options })
            },
            onError: () => {
                console.error('Neshan Maps Error: This page didn\'t load Neshan Maps correctly')
            },
        })
    },
}
</script>
