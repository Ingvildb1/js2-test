// Hent alle filterelementene og lagre dem i variabler
const fashionCheckbox = document.getElementById("defaultCheck1");
const interiorCheckbox = document.getElementById("defaultCheck2");
const animalsCheckbox = document.getElementById("defaultCheck3");

// Legg til en "change"-hendelse på alle filterelementene
fashionCheckbox.addEventListener("change", filterPosts);
interiorCheckbox.addEventListener("change", filterPosts);
animalsCheckbox.addEventListener("change", filterPosts);

function filterPosts() {
  // Hent alle postene på siden
  const posts = document.querySelectorAll(".card");

  // Loop gjennom alle postene
  for (let i = 0; i < posts.length; i++) {
    // Hent taggen som angir kategorien for denne posten
    const categoryTag = posts[i].querySelector(".card-subtitle");

    // Hvis posten skal vises (alle filtrene er deaktivert eller denne kategorien er valgt),
    // vis posten og gå videre til neste post
    if (
      (!fashionCheckbox.checked && !interiorCheckbox.checked && !animalsCheckbox.checked) ||
      (fashionCheckbox.checked && categoryTag.textContent === "Fashion") ||
      (interiorCheckbox.checked && categoryTag.textContent === "Interior") ||
      (animalsCheckbox.checked && categoryTag.textContent === "Animals")
    ) {
      posts[i].style.display = "block";
      continue;
    }

    // Hvis posten ikke skal vises, skjul den
    posts[i].style.display = "none";
  }
}



// ------ Søk funksjon

// Finn input-elementet og lagre det i en variabel
const input = document.querySelector('input[type="search"]');

// Finn alle kortene (card-elementene) og lagre dem i en variabel
const cards = document.querySelectorAll('.card');

// Legg til en "keyup"-lytter på input-elementet
input.addEventListener('keyup', function(event) {
  // Hent teksten fra input-feltet og lagre den i en variabel
  const searchText = event.target.value.toLowerCase();

  // Gå gjennom alle kortene og sjekk om teksten finnes i kortets tittel eller tekst
  cards.forEach(function(card) {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const text = card.querySelector('.card-text').textContent.toLowerCase();
    if (title.includes(searchText) || text.includes(searchText)) {
      // Hvis teksten finnes, vis kortet
      card.style.display = '';
    } else {
      // Hvis teksten ikke finnes, skjul kortet
      card.style.display = 'none';
    }
  });
});






  //----------- get posts 
  const apiUrl = 'https://nf-api.onrender.com/api/v1/social/posts';



  const postContainer = document.getElementById('post-container');
 

  fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
      // Loop through the posts and create a card element for each post
      posts.forEach(post => {
        const author = post.author;
        const comments = post.comments;
        const reactions = post.reactions;

        // Create the post card
        const postCard = document.createElement('div');
        postCard.classList.add('card');

        // Add the post title
        const postTitle = document.createElement('h5');
        postTitle.classList.add('card-header');
        postTitle.innerText = post.title;
        postCard.appendChild(postTitle);

        // Add the post body
        const postBody = document.createElement('div');
        postBody.classList.add('card-body');
        postBody.innerText = post.body;
        postCard.appendChild(postBody);

        // Add the post author
        const postAuthor = document.createElement('div');
        postAuthor.classList.add('card-footer');
        postAuthor.innerText = 'Author: ' + author.name;
        postCard.appendChild(postAuthor);

        // Add the post comments
        const postComments = document.createElement('div');
        postComments.classList.add('card-footer');
        postComments.innerText = 'Comments: ' + comments.length;
        postCard.appendChild(postComments);

        // Add the post reactions
        const postReactions = document.createElement('div');
        postReactions.classList.add('card-footer');
        postReactions.innerText = 'Reactions: ' + reactions.length;
        postCard.appendChild(postReactions);

        // Add the post card to the container
        postContainer.appendChild(postCard);
      });
    })
    .catch(error => console.error(error));

  
  
  


  

