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
    const result = await Playlist.find({$and : [{author:"Thapa Technical"}]})
    .select({ name: 1})
    // .countDocuments();
    // .sort({name : 1}) // 1 For ascending order
    .sort({name : -1}) // -1 For descending order
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();

