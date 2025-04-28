// console.log("hello world");

// [SECTION] fetch method
// allow us to get, post, update or even delete data in a server

// Get method - retrive the data from the server
// url is a representative address of accessing a resource/ data in another machine (servers)
fetch('https://jsonplaceholder.typicode.com/posts')
// allow us to process the data we retrieve using fetch in another function
.then(function(response) {
    // to parse the incomingfg data as a proper JS object that we can further process.
    return response.json(); // convert the response to json format
})
// to do something with the processed server response.
.then(function(data) {
    // console.log(data); 
    showPosts(data);
})

// showPosts = "Hello";

// showPosts - this will create html elements using our fetched data
const showPosts = (posts) => {
    // console.log(posts);

    // Add each posts as a string
    let postEntries = '';

    posts.forEach(function(post){
        // console.log(post);
        // Pass the post id to delete button
        postEntries += `
            <div class="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="edit('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;

    });

    // Post 1 only
    // postEntries += `
    //     <div class="post-${posts[0].id}">
    //         <h3 id = "post-title-${posts[0].id}">${posts[0].title}</h3>
    //         <p id = "post-body-${posts[0].id}">${posts[0].body}</p>
    //         <button onclick="deletePost('${posts[0].id}')">Delete</button>
    //     </div>
    // `

    // console.log(postEntries);
    
    // we can add html element to another element as string by updating it using innerHTML property.
    document.querySelector('#div-post-entries').innerHTML = postEntries;
}

document.querySelector("#form-add-post").addEventListener('submit', function(e){
    console.log(e)

    // prevent the default behavior of the form to refresh the page.
    e.preventDefault(); 

    // console.log("Hello! The post has been added!");

    // capture the input elements
    let titleInput = document.querySelector('#txt-title');
    let bodyInput = document.querySelector('#txt-body');
    let submitResult = document.querySelector('#div-submit-result');

    // check if the value property captures the current value of the input element
    // console.log(titleInput.value);
    // console.log(bodyInput.value);

    // fetch("url", {options} )
        // options contains other details to be send in the server

    fetch('https://jsonplaceholder.typicode.com/posts', {
        // method: HTTP methods
        method: "POST",
        // This contains the main content that we want to send to the server
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }),
        // headers - contains other details that we need to send to our databse
        headers: {'Content-Type': 'application/json'}
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        if(titleInput.value === '' || bodyInput.value === ''){
            submitResult.innerHTML = `<p>Please fill in the form.</p>`;
            return;
        }
        submitResult.innerHTML = `<p>Submit Successfully.</p>`;

        // clears the input element upon submission
        titleInput.value = '';
        bodyInput.value = '';
    })
})

/*
    Mini Activity (10 mins):
    1. Create a function called editPost(id) that will:
        a. Get the post title from <post-title-id>
        b. Get the post body from <post-body-id>
        c. Populate the form fields with the retrieved data:
            i. post ID
            ii. post title
            iii. post body
        d. Enable the "Update" button by removing the disable attribute
        e. Take a screenshot of your webpage after the form is pre-filled and send it in the chat.
*/ 

// Edit Post
// This function will be called when the edit button is clicked
const edit = function(id){
    const postTitle = document.querySelector(`#post-title-${id}`).innerHTML;
    const postBody = document.querySelector(`#post-body-${id}`).innerHTML;

    // Populate form fields
    document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value = postTitle;
    document.querySelector('#txt-edit-body').value = postBody;

    // Enable update button
    document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

document.querySelector('#form-edit-post').addEventListener('submit', function(e){
    e.preventDefault();

    const postID = document.querySelector('#txt-edit-id').value;
    const newTitle = document.querySelector('#txt-edit-title').value;
    const newBody = document.querySelector('#txt-edit-body').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: postID,
            title: newTitle,
            body: newBody,
            userId: 1
        }),
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.querySelector(`#post-title-${postID}`).innerHTML = newTitle;
        document.querySelector(`#post-body-${postID}`).innerHTML = newBody;

        console.log("Post Updated Successfully!", data);
        alert("Successfully Updated.");

        document.querySelector('#txt-edit-id').value = '';
        document.querySelector('#txt-edit-title').value = '';
        document.querySelector('#txt-edit-body').value = '';
        
    })
})
// Delete Post
const deletePost = function(id){
    // console.log(id);

    const postToDelete = document.querySelector(`.post-${id}`);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        postToDelete.remove();
        console.log("Post Deleted Successfully!", data);
        alert("Post Deleted Successfully!");
    })
}

// Delete All Posts
document.querySelector('#btn-delete-all').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#div-post-entries').innerHTML = '';
    alert("All Posts Deleted");
})



// View Posts
document.querySelector('#txt-post-id').addEventListener('input', function () {
    const btn = document.querySelector('#btn-view-post');
    btn.disabled = this.value.trim() === '';
});

document.querySelector('#form-view-post').addEventListener('submit', function(e){
    e.preventDefault(); 

    let viewPost = document.querySelector('#txt-post-id');
    let postID = viewPost.value;
    let resultDiv = document.querySelector('#div-view-result'); 
    
    if(postID === ''){
        return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(function(response){
        return response.json();
    })
    .then(function(post){
        if(!post.id){
            resultDiv.innerHTML = `<p><strong>P</strong>ost not found.</p>`;
            viewPost.value = '';
            document.querySelector('#btn-view-post').disabled = true;
        } else {
            resultDiv.innerHTML = `
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
            `;
            viewPost.value = '';
            document.querySelector('#btn-view-post').disabled = true;
        }
    })
})

// Sir Tolets Code (VIEW POST)
/*
document.querySelector('#view-post-button').disabled = true;

document.querySelector('#txt-post-id').addEventListener('submit', function (e) {
    e.preventDefault();

    const postID = document.querySelector('#txt-post-id').value;
    const viewPost = document.querySelector('#div-view-result');

    let viewSinglePost = '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        if(data.id !== undefined){
            viewSinglePost += `
                <div class="post-${data.id}">
                    <h3 id="post-title-${data.id}">${data.title}</h3>
                    <p id="post-body-${data.id}">${data.body}</p>
                </div>
            `;
            viewPost.innerHTML = viewSinglePost;
        } else {
            viewPost.innerHTML = `<p>Post not found.</p>`;
             
        }
        document.querySelector('txt-post-id').value = null;
        document.querySelector('#view-post-button').disabled = true;
    }) 


    // Add an addeventListener to the input field to monnitor the changes in the input field
    document.querySelector('#txt-post-id').addEventListener('input', function (e) {
        document.querySelector('#view-post-button').disabled = event.target.value === '';
    }

}
*/