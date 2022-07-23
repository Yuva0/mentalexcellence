const router = require("express").Router();
const Card = require("../models/Card");

//CREATE Card
router.post("/",async (req, res) => {
  const newCard = new Card(req.body);
  try{
    const saveCard = await newCard.save();
    res.status(200).json(saveCard);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Card
router.put("/:key", async (req, res) => {
  try{
    const card = await Card.findById(req.params.key);
    try{
      const updatedCard = await card.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedCard);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a card
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedCard = await Card.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedCard);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Card BY Key
router.get("/:idTitle", async (req,res) => {
  try{
    const card = await Card.find({"idTitle": req.params.idTitle});
    res.status(200).json(card);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Cards
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    let cards;

    let query = {};

    if(req.query.category){
      query.category = req.query.category;
    }

    if(req.query.limit){
      cards = await Card.find(query).sort({_id:-1}).limit(req.query.limit);
    }
    else{
      cards = await Card.find(query).sort({_id:-1});
    }

    res.status(200).json(cards);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;