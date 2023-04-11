<template>
    <NeshanMapLeaflet
        :options="options"
        @latitude="getLatitude"
        @longitude="getLongitude"
    />
</template>

<script setup>

import NeshanMapLeaflet from "./components/NeshanMapLeaflet.vue";

const options = {
    key: 'web.333a847c2d214d5f9ef0acd862f8d9a2',
    zoom: 12
}

function getLatitude(latitude) {
    console.log(latitude)
}

function getLongitude(longitude) {
    console.log(longitude)
}
</script>
