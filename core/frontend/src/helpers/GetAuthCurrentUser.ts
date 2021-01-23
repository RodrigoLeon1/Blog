export const GetAuthCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user') as string)
}
