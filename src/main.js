import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import DKToast from 'vue-dk-toast';
import VueCookies from 'vue-cookies'

createApp(App).use(store).use(DKToast, {
    duration: 5000,
    pauseOnHover: true,
    positionY: 'top', // 'top' or 'bottom'
    positionX: 'center', // 'left', 'right' or 'center'
    disableClick: false,
    styles: {
      color: '#000',
      backgroundColor: '#fff',
      // Vendor prefixes also supported
    },
    class: 'custom-class', // Added to each toast,
    max: 10,
  }).use(VueCookies)
.mount('#app')
    