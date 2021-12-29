# ⚛️ Vuejs component for 🍃 Neshan Leaflet map.


## Getting started

In the simple case you just need to add `options` prop to `NeshanMap` component and import [`NeshanLeaflet`](https://static.neshan.org/sdk/leaflet/1.4.0/leaflet.css) stylesheet.


```javascript
import {createApp} from 'vue'
import App from './App.vue'

import NeshanMapLeaflet from 'vuejs-neshan-map-leaflet'

const app = createApp(App)

app.use(NeshanMapLeaflet)

app.mount('#app')
```

### Installation

npm:
```
npm i vuejs-neshan-map-leaflet
```

### Global Registration

```javascript
import Vue from 'vue'
import NeshanMap from 'vuejs-neshan-map-leaflet'

Vue.use(NeshanMap)
```

### Local Registration

```vuejs
import NeshanMap from 'vuejs-neshan-map-leaflet'

  export default {
    components: {
      NeshanMap,
    }
  }
```

### Usage

```vue
<template>
  <neshan-map :options="options"/> 
</template>

<script>
    export default {
        data(){
            return {
                options:{
                     key: 'YOUR_API_KEY',
                     maptype: 'dreamy',
                     poi: true,
                     traffic: false,
                     center: [35.699739, 51.338097],
                     zoom: 13
                }
            }
        },
    }
</script>
```

## Features

### Neshan Maps API Loads on Demand

There is no need to place a `<script src=` tag at top of page. The Neshan Maps API loads upon the first usage of the `NeshanMapReactLeaflet` component.
