import axios from "axios";
export default {
  //get all posts
  getPosts: function(data) {
    console.log(data)
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/user/signup", userData);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user/");
  },
 //Logout User
 logOut: function(){
   return axios.post("/api/user/logout")
 },
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};
