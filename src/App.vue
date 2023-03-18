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
@import url("https://fonts.googleapis.com/css2?family=Stick&display=swap");
#app {
  font-family: "Stick", sans-serif;
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
  padding: 30px;
  background-color: whitesmoke;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 15px;
  margin: 20px;
  border-radius: 4px;
}

nav a:hover {
  color: whitesmoke;
  background-color: black;
}

.footer {
  padding-top: 10%;
}
</style>
