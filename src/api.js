import axios from "axios";

const api = axios.create({
  baseURL: "http://hackathon.hopto.org/api/v1/"
});

export const booksApi = {
  getBookList: page => api.get(`books/?page=${page}&format=json`),
  getInstance: isbn => api.get(`books/${isbn}`),
  addBook: isbn => api.get(`books/`, {
    isbn: isbn
  }),
  getSearchbyKakao: term => api.get(`books/search/?search=${term}`),
  getSearchbyTerm: term => api.get(`books/?term=${term}`),
  getSearchbyAuther: auther => api.get(`books/?auther=${auther}`),
  getSearchbyYear: year => api.get(`books/?year=${year}`)
};

export const loginApi = {
  login: (emailTerm, passwordTerm) =>
    api.post("accounts/login/", {
      email: emailTerm,
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

export const shelfApi = {
  getMyShelf: (token) => api.get(`shelves/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }),
  getSubscribe: (token, isbn) => api.post(`shelves/`, {
    isbn: isbn
  }, {
    headers: {
      Authorization: `Token ${token}`
    }
  }),
  setReview: (star, description, isbn) => api.post(`reviews/`, {
    book: isbn,
    star: star,
    description: description
  }, {
    headers: {
    Authorization: `Token ${window.sessionStorage.getItem("token")}`
  }})
};

export const meApi = {
  getMyData: (token) => api.get(`users/me/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }),
  updateMyData: (token, id) => api.put(`users/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }),
};