<template>
  <div class="weather-container">
    <div class="background"></div>
    <div class="weather">
      <h1 class="title">Cuaca</h1>
      <div v-if="weatherData" class="weather-info">
        <p class="city">{{ weatherData.name }}</p>
        <p class="description">{{ weatherData.weather[0].description }}</p>
        <p class="temperature">{{ Math.round(weatherData.main.temp) }}°C</p>
        <img :src="getWeatherIconUrl(weatherData.weather[0].icon)" :alt="weatherData.weather[0].description" class="weather-icon" />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <div class="search-bar">
        <input type="text" v-model="city" placeholder="Masukkan kota" required class="form-control" />
        <button @click="fetchWeatherData" class="btn btn-primary">Cari</button>
        <button @click="fetchWeatherDataByLocation" class="btn btn-primary">Cek Lokasi</button>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      weatherData: null,
      city: 'Jakarta',
      errorMessage: null,
    };
  },
  mounted() {
    this.fetchWeatherData();
  },
  methods: {
    fetchWeatherData() {
      const API_KEY = '1e5de52e77c26fbe944232c835ecf744';
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`;

      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          this.weatherData = data;
          this.errorMessage = null;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          this.weatherData = null;
          this.errorMessage = 'Error fetching weather data. Please try again later.';
        });
    },
    fetchWeatherDataByLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const API_KEY = '1e5de52e77c26fbe944232c835ecf744';
          const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

          fetch(API_URL)
            .then(response => response.json())
            .then(data => {
              this.weatherData = data;
              this.errorMessage = null;
            })
            .catch(error => {
              console.error('Error fetching weather data:', error);
              this.weatherData = null;
              this.errorMessage = 'Error fetching weather data. Please try again later.';
            });
        });
      } else {
        this.errorMessage = 'Geolocation is not supported by your browser.';
      }
    },
    getWeatherIconUrl(iconCode) {
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    },
  },
};
</script>

<style scoped>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
}

.weather {
  display: inline-block;
    border: 1px solid black;
    border-radius: 6px;
    padding: 10px;
    text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.weather-info {
  margin-top: 24px;
}

.city {
  font-size: 18px;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: #888;
  margin-top: 8px;
}

.temperature {
  font-size: 24px;
  margin-top: 16px;
}

img.weather-icon {
  width: 80px;
  margin-top: 16px;
}

.search-bar {
  margin-top: 24px;
}

input[type="text"] {
  padding: 8px 16px;
  border: 10px solid black;
  background-color: black;
  color: black; /* Added: Text color */
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 50px;
}

button {
  padding: 8px 16px;
  background-color: #c0ae8c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: #ff0000;
  margin-top: 16px;
}
</style>
