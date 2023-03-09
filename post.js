API_BASE_URL = 'https://nf-api.onrender.com/api/v1/social/posts'

async function get_post_html(postId) {
    const response = await fetch(`${API_BASE_URL}/${postId}`);
    const postData = await response.json();
    const postHtml = `
      <div class="card" id="post-container post-container-${postData.id}">
        <div class="card-body">
          <h5 class="card-title">${postData.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${postData.category}</h6>
          ${postData.image_url ? `<img src="${postData.image_url}" class="float-right card-img-top">` : ''}
          <p class="card-text">${postData.content}</p>
          <a href="view-post.html?postId=${postData.id}" class="card-link">View post</a>
          <a href="#" class="card-link update-link">Update</a>
          <a href="#" class="card-link delete-link">Delete</a>
        </div>
      </div>
    `;
    return postHtml;
  }
  

  

// Finn knappen for å se på posten
const viewPostButton = document.querySelector('#viewPostButton');

// Legg til hendelseslytteren
viewPostButton.addEventListener('click', () => {
  const postId = viewPostButton.dataset.postId;
  fetch(`${API_BASE_URL}/social/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
      // Send brukeren til "post.html" med postens ID som parameter
      window.location.href = `post.html?id=${post.id}`;
    })
    .catch(error => console.error(error));
});


  