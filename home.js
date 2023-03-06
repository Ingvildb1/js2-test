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



//------ Lag en ny post


function addPost(event) {
  event.preventDefault();
  const title = document.getElementById("postTitle").value;
  const subtitle = document.getElementById("postSubtitle").value;
  const content = document.getElementById("postContent").value;
  const postDiv = document.createElement("div");
  postDiv.classList.add("card");
  postDiv.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
      <p class="card-text">${content}</p>
      <a href="#" class="card-link">Update</a>
      <a href="#" class="card-link">Delete</a>
    </div>
  `;
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.appendChild(postDiv);
}

const postForm = document.getElementById("postForm");
postForm.addEventListener("submit", addPost);

