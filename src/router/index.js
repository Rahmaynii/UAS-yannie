import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import kegiatan from '../components/kegiatan.vue';
import Contact from '../components/Contact.vue';
import Widget from '../components/Widget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import MiniGameWidget from '../components/MiniGameWidget.vue';
import JamDigital from '../components/JamDigitalWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';
import KalenderWidget from '../components/KalenderWidget.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/kegiatan',
    name: 'kegiatan',
    component: kegiatan
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/location',
    name: 'Location',
    component: LocationWidget
  },
  {
    path: '/widget',
    name: 'Widget',
    component: Widget
  },
  {
    path: '/stopwatch',
    component: StopwatchWidget
  },
  {
    path: '/weather',
    component: WeatherWidget
  },
  {
    path: '/minigame',
    component: MiniGameWidget
  },
  {
    path: '/jamdigital',
    component: JamDigital
  },
  {
    path: '/photowidget',
    component: PhotoWidget
  },
  {
    path: '/kalenderwidget',
    component: KalenderWidget
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
