<template>
  <div class="home-container">
    <h1 class="home-title">Github Repos</h1>
    <div class="homephotos">
      <img alt="Repo Image" src="../assets/repo1.jpg" />
      <img alt="Repo Image" src="../assets/repo2.jpg" />
      <img alt="Repo Image" class="last" src="../assets/repo3.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.home-container {
  margin: 0 auto;
}

.home-title {
  font-size: 2rem;
  margin-top: 20px;
  padding-top: 40px;
}
.homephotos {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(253, 253, 253);
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 5px 10px 18px rgb(193, 191, 191);
  height: 50vh;
}

.homephotos img {
  width: 250px;
  margin: 0 0 0 1rem;
  border: 50px;
  border-radius: 30px;
  align-items: center;
}

.footer {
  padding-top: 10%;
}

@media screen and (max-width: 961px) {
  .home-container {
    margin: 0 0.5rem;
  }
  .homephotos img {
    width: 130px;
  }
}

@media screen and (max-width: 481px) {
  .homephotos img {
    width: 100px;
  }

  .last {
    margin-right: 0.5rem;
  }
}
</style>
