import axios from "axios";

const api = axios.create({
  baseURL: "http://feud72.hopto.org/api/v1/books/"
});

export const booksApi = {
  getList: () => api.get("?format=json"),
  getInstance: ibsn => api.get(`${ibsn}`)
};