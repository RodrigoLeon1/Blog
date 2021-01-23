import { Http } from '../utils/enum/http/Http'

export const login = (email: string, password: string) => {
  const init = {
    method: Http.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  }

  return fetch(`${process.env.REACT_APP_LOCAL_ENDPOINT}/auth/login`, init)
    .then((response) => response.json())
    .then((object) => {
      if (object.data.token) {
        localStorage.setItem('user', JSON.stringify(object.data))
        console.log(object.data.token)
      }
      return object.data
    })
}

export const logout = () => {
  localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user') as string)
}
