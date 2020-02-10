import axios from "axios";

const api = axios.create({
  baseURL: "http://feud72.hopto.org/api/v1/"
});

export const booksApi = {
  getBookList: page => api.get(`books/?page=${page}&format=json`),
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
  signup: (emailTerm, password1Term, password2Term) =>
    api.post("accounts/signup/", {
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