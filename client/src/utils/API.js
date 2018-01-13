import axios from "axios";
export default {
  // Gets all books
  getCryptoDB: function() {
    return axios.get("/api/crypto");
  },
  // Deletes the book with the given id
  deleteCrypto: function(id) {
    return axios.delete("/api/crypto/" + id);
  },
  // Saves a book to the database
  saveCrypto: function(cryptoData) {
    return axios.post("/api/crypto", cryptoData);
  },

  getCrypto: function(name){
    return axios.get("https://api.coinmarketcap.com/v1/ticker/" + name + "/");
  },

  scrapper: function(){
    return axios.get("/api/crypto/hi");
  },

  display: function(){
    return axios.get("/api/crypto/display");
  }
  
};