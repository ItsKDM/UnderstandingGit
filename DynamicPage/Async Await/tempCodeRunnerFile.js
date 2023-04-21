const posts = [];
let lastActivityTime = null;

function createPost(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { title };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

createPost("First post")
  .then((post) => {
    return Promise.all([updateLastUserActivityTime(), post]);
  })
  .then((result) => {
    console.log("All posts:", posts);
    console.log("Last activity time:", lastActivityTime);
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log("Deleted post:", deletedPost);
    console.log("New set of posts:", posts);
  })
  .catch((error) => {
    console.error(error);
  });
