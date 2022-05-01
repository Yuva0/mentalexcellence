const router = require("express").Router();
const Post = require("../models/Post");

//CREATE POST
router.post("/",async (req, res) => {
  const newPost = new Post(req.body);
  try{
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE POST
router.put("/:title", async (req, res) => {
  try{
    const post = await Post.findById(req.params.title);
    try{
      const updatedPost = await post.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedPost);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET POST BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const post = await Post.find({"idTitle": req.params.idTitle});
    res.status(200).json(post);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req,res) => {
  const category = req.query.category;
  try{
    let posts,queryString;

    let query = {};

    if(req.query.category){
      query.category = req.query.category;
    }
    if(req.query.isDetailed){
      query.isDetailed = req.query.isDetailed;
    }

    if(req.query.limit){
      posts = await Post.find(query).sort({_id:-1}).limit(req.query.limit);
    }
    else{
      posts = await Post.find(query).sort({_id:-1});
    }

    res.status(200).json(posts);
    
    // if(category && limit && detailed){
    //   posts = await Post.find({category,detailed}).sort({_id: -1}).limit(limit);
    // }
    // else if(limit){
    //   posts = await Post.find().sort({_id: -1}).limit(limit);
    // }
    // else if(category){
    //   posts = await Post.find({category}).sort({_id: -1});
    // }
    // else{  
    //   posts = await Post.find({}).sort({_id: -1});
    // }
    // res.status(200).json(posts);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;