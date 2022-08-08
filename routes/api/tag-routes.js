const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    })
    res.json(tags)
  }
  catch (err) {
    res.json(err)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findOne({
      include: [{ model: Product }],
    })
    res.json(tags)
  }
  catch (err) {
    res.json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tags = await Tag.create(req.body)
    res.json(tags)
  }
  catch (err) {
    res.json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = await Tag.update({
      where: {
        id: req.params.id
      }
    })

    if (!tags){
      res.status(400).json({message: 'No tag found with this ID!'})
      return
    }
    res.status(200).json(tags)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tags){
      res.status(400).json({message: 'No tag found with this ID!'})
      return
    }
    res.status(200).json(tags)
  }
  catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
