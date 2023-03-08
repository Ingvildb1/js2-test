const API_BASE_URL = 'https://nf-api.onrender.com';

//Registers user 


async function registerUser(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}



const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', async () => {
  const usernameInput = document.getElementById('usernameInput');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');

  const userToRegister = {
    name: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  await registerUser(registerUrl, userToRegister);

  // Redirect to login page after registration
  window.location.href = 'login.html';
});
