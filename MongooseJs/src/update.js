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

// Update Document
const updateDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndUpdate(
      { _id },
      { $set: { name: "NodeJS" } },
      {
        new : true,
        useFindAndModify : false
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
updateDocument("62b5c83a490d69804dc61994");
