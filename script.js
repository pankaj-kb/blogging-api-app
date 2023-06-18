fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

    .then(posts => {
        // console.log(posts)

        posts.forEach(id => {

            const blogItem = document.createElement('div')
            blogItem.classList.add('blog-Item');

            const blogTitle = document.createElement('h1')
            blogTitle.textContent = id.title;

            const blogText = document.createElement('p')
            blogText.textContent = id.body;

            blogItem.appendChild(blogTitle)
            blogItem.appendChild(blogText)

            // const blogList = document.getElementsByClassName('blog-list')

            // blogList.appendChild(blogItem)

            console.log(blogItem)

            document.body.appendChild(blogItem)
        });

    })


    .catch(error => {
        // Handle any errors that occur during the request
        console.log('Error:', error);
    });
