<template>
  <div class="repo-box">
    <h1>Repository</h1>
    <ul
      class="repo-ul"
      style="text-transform: capitalize"
      v-if="Object.keys(repository).length !== 0"
    >
      <li>Name: {{ repository.name }}</li>
      <li>Description: {{ repository.description }}</li>
      <li>Stars: {{ repository.stargazers_count }}</li>
      <li>Forks: {{ repository.forks_count }}</li>
      <li>Language: {{ repository.language }}</li>
      <di>
        <a
          style="font-size: 20px"
          target="_blank"
          :href="`${repository.html_url}`"
        >
          Link to repo</a
        >
      </di>
    </ul>
    <p v-else>Loading...</p>
  </div>
  <div>
    <button @click="redirectToHome" class="repo-button">Back To Home</button>
  </div>
</template>

<!-- Disable eslint rule for component name -->
<!-- eslint-disable vue/multi-word-component-names -->
<script type="text/javascript">
export default {
  name: "Repo",
  data() {
    return {
      repository: {},
    };
  },
  created() {
    const repositoryName = this.$route.params.name;
    fetch(`https://api.github.com/repos/chakesezechi/${repositoryName}`)
      .then((response) => response.json())
      .then((data) => {
        this.repository = data;
      });
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
  mounted() {},
};
</script>

<style>
.repo-box {
  padding: 20px;
  background-color: #f6f4f9;
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 5px 10px 18px rgb(193, 191, 191);
  margin: 80px;
  justify-content: center;
}

.repo-button {
  background-color: #f6f4f9;
  padding: 15px;
  border-radius: 5%;
  border: 1px solid rgb(220, 219, 219);
  font-size: 20px;
}

.repo-button:hover {
  background-color: #61587c;
}

@media screen and (max-width: 481px) {
  .repo-box {
    width: 70%;
    margin: 40px;
  }
}
</style>
