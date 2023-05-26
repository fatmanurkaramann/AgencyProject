const Photo = require('../models/Photo')

exports.getHomePage = async (req, res) => {
    const photos = await Photo.find()
    const photo = await Photo.findById(req.params.id)
    console.log(req.params.id)
    res.render(
        'index',
        {
            photos:photos,
            photo:photo
        }
    )
}

exports.getEditPage=async(req,res)=>{
    const photo = await Photo.findById(req.params.id)
    res.render('edit', { photo })
}