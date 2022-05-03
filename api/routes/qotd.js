const router = require("express").Router();
const Qotd = require("../models/Qotd");

//CREATE Qotd
router.post("/",async (req, res) => {
  const newQotd = new Qotd(req.body);
  try{
    const saveQotd = await newQotd.save();
    res.status(200).json(saveQotd);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE POST
router.put("/:quote", async (req, res) => {
  try{
    const qotd = await Qotd.findById(req.params.quote);
    try{
      const updatedQotd = await qotd.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedQotd);
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
router.get("/:quote", async (req,res) => {
  try{
    const qotd = await Qotd.find({"quote": req.params.quote});
    res.status(200).json(qotd);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try{
    const qotd = await Qotd.find().sort({_id:-1});
    res.status(200).json(qotd);
  }
  catch(err){
    res.status(500).json(err); 
  }
});

module.exports = router;