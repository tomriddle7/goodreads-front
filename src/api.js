import axios from "axios";

const api = axios.create({
  baseURL: "http://feud72.hopto.org/api/v1/"
});

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
      headers: {
        username: encodeURIComponent(idTerm),
        password: encodeURIComponent(passwordTerm)
      }
    }),
  signup: (idTerm, passwordTerm) =>
    api.post("accounts/signup/", {
      headers: {
        username: encodeURIComponent(idTerm),
        password: encodeURIComponent(passwordTerm)
      }
    })
};