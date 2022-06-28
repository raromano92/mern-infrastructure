// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import { token } from 'morgan'
import * as usersAPI from './users-api'
import * as LoginForm from '../components/LoginForm/LoginForm'

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData)
  // Persist the "token"
  localStorage.setItem('token', token)
  return getUser();
} 

// DATA WE GET BACK FROM THE FETCH REQUEST IN USERS-API LOGIN FUNCTION
// DATA WILL BE RETURNED FROM THE SERVER, THEN TOKEN IT SET FOR USER LOGIN
export async function login(credentials) {
  const token = await usersAPI.login(credentials)
  localStorage.setItem('token', token)
  return getUser();
}

export function getToken() {
  // getItem return null if there's no string
  const token = localStorage.getItem('token')
  if (!token) return null
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token')
    return null;
  }
  return token
}

export function getUser() {
  const token = getToken();
   // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
  localStorage.removeItem('token');
}

export function checkToken() {
  alert('clicked')
}

