// Legger til en eventlistener på submit-hendelsen
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleLogin);


async function handleLogin(event) {
  event.preventDefault(); // Hindre at skjemaet blir sendt inn

  // Hent verdien fra input-feltene
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Kjør funksjonen for å logge inn brukeren med de innsendte verdiene
  const userLoggedIn = await loginUser(`${API_BASE_URL}/api/v1/social/auth/login`, {username, password});


  if (userLoggedIn) {
    console.log('User is logged in');
    // ... gjør noe annet
  } else {
    console.log('User login failed');
    // ... gi en feilmelding til brukeren eller gjør noe annet
  }
}


const accessToken = localStorage.getItem('accessToken');

if (accessToken) {
  // brukeren er logget inn, last inn index.html
  window.location.href = 'index.html';
} else {
  // vis innloggingsskjemaet
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userLogin = {
      email: email,
      password: password,
    };

    const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
    const response = await loginUser(loginUrl, userLogin);

    if (response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
      window.location.href = 'index.html';
    } else {
      alert('Feil brukernavn eller passord');
    }
  });
}
