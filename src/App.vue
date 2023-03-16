<template>
  <div id="app">
    <nav class="top-navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/repos">Repos</router-link>
      <router-link to="/error">Error</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #fefefe;
}

main {
  background-color: black;
}

.top-navbar {
  margin: -4rem -1rem 0 -1rem;
  padding: 20px;
  background-color: #f6f4f9;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: whitesmoke;
  background-color: blueviolet;
}

.footer {
  padding-top: 10%;
}
</style>
