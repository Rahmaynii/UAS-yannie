<template>
  <div class="widget">
    <h2 class="widget-title">Berikut adalah Widget yang tersedia di website ini</h2>
    <div class="button-container">
      <button @click="showLocation">Location</button>
      <button @click="showStopwatch">Stopwatch</button>
      <button @click="showWeather">Weather</button>
      <button @click="showMiniGame">Mini Games</button>
      <button @click="showJamDigital">Jam Digital</button>
      <button @click="showPhoto">Photo</button>
      <button @click="showKalender">Kalender</button>
    </div>
    <div class="widget-container">
      <LocationWidget v-if="isLocationVisible" />
      <StopwatchWidget v-if="isStopwatchVisible" />
      <WeatherWidget v-if="isWeatherVisible" />
      <MiniGameWidget v-if="isMiniGameVisible" />
      <JamDigitalWidget v-if="isJamDigitalVisible" />
      <PhotoWidget v-if="isPhotoVisible" />
      <KalenderWidget v-if="isKalenderVisible" />
    </div>
  </div>
</template>

<script>
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import MiniGameWidget from '../components/MiniGameWidget.vue';
import JamDigitalWidget from '../components/JamDigitalWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';
import KalenderWidget from '../components/KalenderWidget.vue';

export default {
  data() {
    return {
      isLocationVisible: false,
      isStopwatchVisible: false,
      isWeatherVisible: false,
      isMiniGameVisible: false,
      isJamDigitalVisible: false,
      isPhotoVisible: false,
      isKalenderVisible: false
    };
  },
  methods: {
    showLocation() {
      this.isLocationVisible = true;
      this.isStopwatchVisible = false;
      this.isWeatherVisible = false;
      this.isMiniGameVisible = false;
      this.isJamDigitalVisible = false;
      this.isPhotoVisible = false;
      this.isKalenderVisible = false;
    },
    showStopwatch() {
      this.isLocationVisible = false;
      this.isStopwatchVisible = true;
      this.isWeatherVisible = false;
      this.isMiniGameVisible = false;
      this.isJamDigitalVisible = false;
      this.isPhotoVisible = false;
      this.isKalenderVisible = false;
    },
    showWeather() {
      this.isLocationVisible = false;
      this.isStopwatchVisible = false;
      this.isWeatherVisible = true;
      this.isMiniGameVisible = false;
      this.isJamDigitalVisible = false;
      this.isPhotoVisible = false;
      this.isKalenderVisible = false;
    },
    showMiniGame() {
      this.isLocationVisible = false;
      this.isStopwatchVisible = false;
      this.isWeatherVisible = false;
      this.isMiniGameVisible = true;
      this.isJamDigitalVisible = false;
      this.isPhotoVisible = false;
      this.isKalenderVisible = false;
    },
    showJamDigital() {
      this.isLocationVisible = false;
      this.isStopwatchVisible = false;
      this.isWeatherVisible = false;
      this.isMiniGameVisible = false;
      this.isJamDigitalVisible = true;
      this.isPhotoVisible = false;
      this.isKalenderVisible = false;
    },
    showPhoto() {
      this.isLocationVisible = false;
      this.isStopwatchVisible = false;
      this.isWeatherVisible = false;
      this.isMiniGameVisible = false;
      this.isJamDigitalVisible = false;
      this.isPhotoVisible = true;
      this.isKalenderVisible = false;
    },
    showKalender() {
      this.isLocationVisible = false;
      this.isStopwatchVisible = false;
      this.isWeatherVisible = false;
      this.isMiniGameVisible = false;
      this.isJamDigitalVisible = false;
      this.isPhotoVisible = false;
      this.isKalenderVisible = true;
    }
  },
  components: {
    LocationWidget,
    StopwatchWidget,
    WeatherWidget,
    MiniGameWidget,
    JamDigitalWidget,
    PhotoWidget,
    KalenderWidget
  }
}
</script>

<style scoped>
.widget {
  margin-top: 10px;
  text-align: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.button-container button {
  margin-bottom: 5px;
}

.widget-title {
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 20px;
}

.widget-description {
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 10px;
}

.widget-container {
  margin-top: 10px;
}
</style>
