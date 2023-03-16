<template>
  <div class="container">
    <div class="box">
      <p>
        Create a new vue js application then using the GitHub API, fetch your
        GitHub repositories using this endpoint
        https://api.github.com/users/USERNAME/repos.<br />
        Show a page with a list of all your repositories on GitHub(the page
        should have some form of pagination). <br />Then create another page
        showing data for a single repo clicked from the list of repos using
        nested routes. Make sure to implement a wildcard route to catch 404
        pages. NB: Good UI and Designs are important
      </p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top: 3rem;
}
.box {
  width: 50%;
  padding: 20px;
  background-color: #f6f4f9;
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 5px 10px 18px rgb(193, 191, 191);
  margin-top: 50px;
}

.box p {
  word-wrap: break-word;
}

footer {
  height: 1px;
}

@media screen and (max-width: 961px) {
  .container {
    margin-top: 8rem;
  }
}

@media screen and (max-width: 481px) {
  .container {
    width: 80%;
    margin: 50px;
    padding-top: 70px;
  }
  .box {
    width: 100%;
    padding: 10px;
    margin-top: 1rem;
  }

  .footer{
    padding-top: 50px;
  }
}
</style>
