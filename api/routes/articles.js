const router = require("express").Router();
const Article = require("../models/Article");

//CREATE Article
router.post("/",async (req, res) => {
  const newArticle = new Article(req.body);
  try{
    const saveArticle = await newArticle.save();
    res.status(200).json(saveArticle);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Article
router.put("/:title", async (req, res) => {
  try{
    const article = await Article.findById(req.params.title);
    try{
      const updatedArticle = await article.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedArticle);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like an article
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedArticle = await Article.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedArticle);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Article BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const article = await Article.find({"idTitle": req.params.idTitle});
    res.status(200).json(article);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Articles
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const coverpage = req.query.coverpage;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let articles;

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
      articles = await Article.find(query).sort({_id:-1}).limit(req.query.limit);
    }
    else{
        articles = await Article.find(query).sort({_id:-1});
    }

    res.status(200).json(articles);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;