const mongoose = require("mongoose");

// Connection creation and creating a new database
mongoose
  .connect("mongodb://localhost:27017/practicedatabase")
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));

// Defining Schema
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

// Create document or insert
// First method

// const reactPlaylist = new Playlist({
//     name:"React JS",
//     ctype:"Front End",
//     videos:80,
//     author:"Thapa Technical",
//     active:true
// })
// reactPlaylist.save();


// Second method
// const createDocument = async () => {
//     try{
//         const reactPlaylist = new Playlist({
//           name: "Node JS",
//           ctype: "Backend End",
//           videos: 80,
//           author: "Thapa Technical",
//           active: true,
//         });
//         const result = await reactPlaylist.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// };

// createDocument();


// Insert Many Document
const createDocument = async () => {
    try{
        const NodeJSPlaylist = new Playlist({
          name: "Node JS",
          ctype: "Backend End",
          videos: 76,
          author: "Thapa Technical",
          active: true,
        });
        const reactJSPlaylist = new Playlist({
          name: "React JS",
          ctype: "Front End",
          videos: 80,
          author: "Thapa Technical",
          active: true,
        });
        const MongoDBPlaylist = new Playlist({
          name: "MongoDB",
          ctype: "Database",
          videos: 12,
          author: "Thapa Technical",
          active: true,
        });
        const MongoosePlaylist = new Playlist({
          name: "Mongoose",
          ctype: "Database Framework",
          videos: 12,
          author: "Thapa Technical",
          active: true,
        });
        const result = await Playlist.insertMany([NodeJSPlaylist,reactJSPlaylist,MongoDBPlaylist,MongoosePlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }

};

// createDocument();

const getDocument = async () => {
    try{
        // const result = await Playlist.find({ctype:"Front End"}).select({name:1,_id:0}).limit(1).skip(1);
        const result = await Playlist.find({ctype:"Front End"}).select({name:1,_id:0}).limit(1);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

getDocument();