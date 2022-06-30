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

// Delete Document
const deleteDocuument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

deleteDocuument("62b69c5e2214dcbcbb60b227")