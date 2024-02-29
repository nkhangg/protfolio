import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { MotionPlugin } from '@vueuse/motion';
import './index.css';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, far, fas);

createApp(App).use(MotionPlugin).component('fa', FontAwesomeIcon).use(store).use(router).mount('#app');
