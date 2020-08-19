const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Double = require('@mongoosejs/double');
const postSchema = new Schema({
  //change to lat lon
  lat: { type: Double },
  lng: { type: Double },
  description: { type: String },
  experience: { type: String },
  badgeNumber: { type: String, required: false },
  date: { type: Date, default: Date.now },
  // file: {type: String, required: false}
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;