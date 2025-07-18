const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ayushsjain0:123@cluster0.sz0t5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("database 1 connected"));

const getIndianTimeFormatted = () => {
  const indiaTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  return indiaTime;
};

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: String,
    default: getIndianTimeFormatted, // Now it will store a readable IST string like "12 July 2025, 11:15:23 am"
  },
  content: String,
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }]
});

module.exports = mongoose.model('post', postSchema);
