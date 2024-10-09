/* 
Copyright (c) 2024 by rygogamer (https://codepen.io/rygogamer/pen/yLdErKN)
Fork of an original work Slider with progress bar using setInterval (https://codepen.io/juan-frontdev/pen/MWYeQqp)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//carrucel velocidad
let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); 

function progress() {
  if (i === 100) {
    i = -1;
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

  
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

posts.forEach((post, index) => {
  post.addEventListener("click", () => {
    disablePostsTemporarily();
    i = 0; 
    postIndex = index;
    updatePosts();
  });
});

function disablePostsTemporarily() {
  posts.forEach((post) => {
    post.classList.add("post--disabled");
  });

  setTimeout(() => {
    posts.forEach((post) => {
      post.classList.remove("post--disabled");
    });
  }, 2500);
}

function updatePosts() {
  posts.forEach((post) => {
    post.querySelector(".progress-bar__fill").style.width = 0;
    post.classList.remove("post--active");
  });

  mainPosts.forEach((mainPost) => {
    mainPost.classList.add("main-post--not-active");
    mainPost.classList.remove("main-post--active");
  });

  currentPost = posts[postIndex];
  currentMainPost = mainPosts[postIndex];

  currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
  document.querySelector(
    ".progress-bar--primary .progress-bar__fill"
  ).style.width = `${i}%`;
  currentPost.classList.add("post--active");

  currentMainPost.classList.add("main-post--active");
  currentMainPost.classList.remove("main-post--not-active");
}











