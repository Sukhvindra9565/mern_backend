const mongoose = require("mongoose");
const nvalidator = require("validator");

// Connection creation and creating a new database
mongoose
  .connect("mongodb://localhost:27017/practicedatabase")
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [2, "Minimum 2 letters required"],
    maxlength: 30,
  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["frontend", "backend", "database"],
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Videos count should not be negative");
      }
      // validate:{
      //     validator:function(value){
      //         return value.length < 0
      //     },
      //     message:"Vidoes count should not be negative"
      // }
    },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!nvalidator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating Collection (Table according to sql)
const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "UI",
      ctype: "Frontend",
      videos: 1,
      author: "Thapa Technical",
      email: "sukhvindrasingh9670@gmail.com",
      active: true,
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

const getDocument = async () => {
  try {
    const result = await Playlist.find({ name: "node js" })
      .select({ name: 1, _id: 0 })
      .limit(1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// getDocument();
