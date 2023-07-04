<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/widget">Our Widgets</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #eee;
}

nav a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}
</style>