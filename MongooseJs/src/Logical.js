const mongoose = require("mongoose");

// Connection creation and creating a new database
mongoose
  .connect("mongodb://localhost:27017/practicedatabase")
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating Collection (Table according to sql)
const Playlist = new mongoose.model("Playlist", playlistSchema);

const getDocument = async () => {
  try {
    // const result = await Playlist.find({
    //   $or: [{ ctype: "Back End" }, 
    //   { author: "Thapa Technical" }],
    // }).select({ name: 1, _id: 0 });
    // const result = await Playlist.find({
    //   $and: [{ ctype: "Database" }, 
    //   { author: "Thapa Technical" }],
    // }).select({ name: 1, _id: 0 });
    const result = await Playlist.find(
      {videos: { $not: {$gt : 14}}
    })
    // .select({ name: 1, _id: 0 });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
// or operator 
// and operator
// nor operator
// not operator
