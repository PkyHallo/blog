var posts=["2024/08/12/tips-and-tricks/","2024/08/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };