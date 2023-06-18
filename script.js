document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      const postsContainer = document.getElementById('posts');
      let counter = 0;

      posts.forEach(post => {
        if (counter >= 9) {
          return; // show posts upto 9
        }

        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
        counter++;
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const titleElement = document.createElement('h2');
  titleElement.textContent = post.title;

  const bodyElement = document.createElement('p');
  bodyElement.textContent = post.body;

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyElement);

  return postElement;
}
