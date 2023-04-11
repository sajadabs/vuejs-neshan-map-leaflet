# Vuejs component for  Neshan Leaflet map.

## Getting started

### Installation

```
npm i vuejs-neshan-map-leaflet
```

### Usage

In the simple case you just need to add `options` prop to `NeshanMapLeaflet `
component and
import [`NeshanMapLeaflet`](https://static.neshan.org/sdk/leaflet/1.4.0/leaflet.css)
stylesheet.

### Global Registration

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import NeshanMapLeaflet from 'vuejs-neshan-map-leaflet'

const app = createApp(App)

app.use(NeshanMapLeaflet)

app.mount('#app')
```

### Local Registration

```javascript
import NeshanMapLeaflet from 'vuejs-neshan-map-leaflet'

export default {
    components: {
        NeshanMap
    }
}
```

### Usage

```vue

<template>
    <NeshanMapLeaflet :options="options"/>
</template>

<script>
export default {
    data() {
        return {
            options: {
                key: 'YOUR_API_KEY',
                maptype: 'dreamy',
                poi: true,
                traffic: false,
                center: [36.30284183765441, 59.5958496945331],
                zoom: 13
            }
        }
    },
}
</script>
```

## Features

### Neshan Maps API Loads on Demand

There is no need to place a `<script src=` tag at top of page. The Neshan Maps
API loads upon the first usage of the `NeshanMapLeaflet` component.
