const router = require("express").Router();
const Story = require("../models/Story");

//CREATE Story
router.post("/",async (req, res) => {
  const newStory = new Story(req.body);
  try{
    const saveStory = await newStory.save();
    res.status(200).json(saveStory);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Story
router.put("/:title", async (req, res) => {
  try{
    const story = await Story.findById(req.params.title);
    try{
      const updatedStory = await story.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedStory);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Story BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const story = await Story.find({"idTitle": req.params.idTitle});
    res.status(200).json(story);
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a story
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedStory = await Story.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedStory);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Stories
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const coverpage = req.query.coverpage;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let stories;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
    }
    if(coverpage !== undefined ){
      query.coverpage = req.query.coverpage;
    }

    if(limit){
      stories = await Story.find(query).sort({_id:-1}).limit(req.query.limit);
    }
    else{
        stories = await Story.find(query).sort({_id:-1});
    }

    res.status(200).json(stories);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;