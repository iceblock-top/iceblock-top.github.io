var posts=["2024/08/19/hello-world/","2024/08/20/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };