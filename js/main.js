let postsID = document.getElementById("posts");
fetch("http://localhost:8001/wp-json/wp/v2/posts")
  .then(res => res.json())
  .then(posts => {
    console.log(posts);
    posts.map(p => {
      let node = document.createElement("LI");
      node.innerHTML = p.content.rendered;
      postsID.appendChild(node);
      postsID.appendChild(document.createElement("HR"));
    });
    // postsID.innerHTML = posts[1].content.rendered;
  });
