<template>
  <div class="repo-container">
    <div class="box-content">
      <div class="repo-body">
        <h1 class="title">GitHub Repos</h1>
      </div>

      <div v-if="loading" class="loading">
        <h1>Loading..</h1>
      </div>

      <div>
        <ul>
          <li
            style="text-transform: capitalize"
            v-for="repo in paginatedRepositories"
            v-bind:key="repo.id"
          >
            <router-link :to="{ name: 'Repo', params: { name: repo.name } }">{{
              repo.name
            }}</router-link>

            <div>
              <card v-if="repo.language"> {{ repo.language }}</card>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- PAGINATION -->
    <div>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="pagination-previous"
        >
          Previous
        </button>

        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="pagination-next"
        >
          Next Page
        </button>
      </nav>
    </div>
    <!-- PAGINATION -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReposView",

  data() {
    return {
      repositories: [],
      currentPage: 1,
      perPage: 4,
      totalPages: null,
      loading: true,
    };
  },

  methods: {
    async fetchRepositories() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://api.github.com/users/chakesezechi/repos"
        );
        console.log(response);
        this.repositories = response.data;
        this.totalPages = Math.ceil(this.repositories.length / this.perPage);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    paginatedRepositories() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.repositories.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>

<style>
body {
  font: 15px/1.8 "Poppins", sans-serif !important;
  padding-bottom: 1px;
}
.box-content {
  justify-content: center;
  align-items: center;
  background-color: rgb(253, 253, 253);
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 5px 10px 18px rgb(193, 191, 191);
  margin: 60px;
  padding: 30px;
}

.pagination-previous {
  background-color: whitesmoke;
  padding: 15px;
  margin: 40px;
  border: 1px solid #dbdade;
  font-size: 20px;
  border-radius: 5px;
  text-decoration: none;
}
.pagination-next {
  background-color: whitesmoke;
  padding: 15px;
  margin: 40px;
  border: 1px solid #dbdade;
  font-size: 20px;
  border-radius: 5px;
  text-decoration: none;
}

ul {
  list-style: none;
}
li {
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-decoration: none;
}
@media screen and (max-width: 961px) {
}

@media screen and (max-width: 481px) {
  .box-content {
    width: 70%;
    margin: 40px;
  }
}
</style>
