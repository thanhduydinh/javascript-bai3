var postApi = "https://api.github.com/users/ptit9x";

fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (post) {
    // console.log(post);
  })
  .catch(function () {
    // console.log("error");
  });
