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
    // const result = await Playlist.find({ videos : {$gte:50}})
    // const result = await Playlist.find({ ctype : {$in:["Back End","Front End"]}})
    const result = await Playlist.find({ ctype : {$nin:["Back End","Front End"]}})
      .select({ name: 1, _id: 0 })
    //   .limit(1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
// gt = greater than
// lt = less than
// gte = greater than or equal to
// lte = less than or equal to
// in = Equal to 
// nin = Not Equal to
