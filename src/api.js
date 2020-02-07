import axios from "axios";

const api = axios.create({
  baseURL: "http://feud72.hopto.org/api/v1/"
});

let returnArray = [];

export function getBookList(page){
  return api.get(`books/?page=${page}&format=json`).then(function(response){
    returnArray = returnArray.concat(response.data.results);
    if(response.data.next === null) return returnArray;
    else return getBookList(page + 1);
  }).catch(function() {
    return returnArray;
  }
)};

export const booksApi = {
  getList: () => api.get("books/?format=json"),
  getInstance: ibsn => api.get(`books/${ibsn}`),
  getSearchbyTerm: term => api.get(`books/?term=${term}`),
  getSearchbyAuther: auther => api.get(`books/?auther=${auther}`),
  getSearchbyYear: year => api.get(`books/?year=${year}`)
};

export const loginApi = {
  login: (idTerm, passwordTerm) =>
    api.post("accounts/login/", {
      username: encodeURIComponent(idTerm),
      password: encodeURIComponent(passwordTerm)
    }),
  loginKakao: () =>
    api.post("accounts/login/kakao/"),
  signup: (idTerm, emailTerm, password1Term, password2Term) =>
    api.post("accounts/signup/", {
      username: encodeURIComponent(idTerm),
      email: emailTerm,
      password1: encodeURIComponent(password1Term),
      password2: encodeURIComponent(password2Term)
    }),
  user: (token) =>
    api.get("users/?format=json", {
      headers: {
        Authorization: token
      }
    }),
};