const Photo = require('../models/Photo')

exports.getHomePage=async (req,res)=>{
    const photos = await Photo.find()
    res.render(
      'index',
      { photos }
    )
}