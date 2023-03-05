const API_BASE_URL = 'https://nf-api.onrender.com';

//Registers urser 

/**
 * API call that registers the user
 * @param {string} url
 * @param {any} data
 * ```js
 * 
 * ```
 */


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
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const userToRegister = {
  name: 'test_user1',
  email: 'test_pink@noroff.no',
  password: 'pinkgirl123',
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

//registerUser(registerUrl,userToRegister);

//Login User

const userLogin = {
    email: 'test_pink@noroff.no',
    password: 'pinkgirl123',
  };

async function loginUser(url, data) {
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      const accessToken = json.accessToken;
      localStorage.setItem('accessToken', accessToken);
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  
  loginUser(`${API_BASE_URL}/api/v1/social/auth/login`, userToRegister);

//---Making requests with JWT token

async function fetchWithToken(url) {
    try {
      const token = localStorage.getItem('accessToken');
      const getData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, getData);
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchWithToken(API_BASE_URL + '/api/v1/social/posts');