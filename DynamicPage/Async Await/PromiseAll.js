let lastActive = new Date();
const posts = [];

var updateLastUserActivityTime = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      lastActive = new Date();
      res();
    }, 1000);
  });
};

var createPost = (post) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      updateLastUserActivityTime();
      posts.push({
        title: post,
        lastActive: lastActive.toLocaleTimeString(),
      });
      res("Success!");
    });
  });
};

var deletePost = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (posts.length === 0) rej("No posts found!");
      else res(posts.pop());
    });
  });
};

var printPosts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(posts.map(post => post));
    });
  });
};

Promise.all([
  createPost("First post"),
  createPost("Second post"),
  createPost("Third post"),
  printPosts(),
  deletePost(),
  printPosts(),
])
  .then((val) => console.log(val))
  .catch((e) => console.log(e));