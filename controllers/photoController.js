const Photo = require('../models/Photo')
const fs = require('fs')

exports.createController = async (req, res) => {
  try {
    const uploadDir = 'public/uploads'
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir)
    }
    let uploadedImage = req.files.image
    let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name

    uploadedImage.mv(uploadPath,
      async () => {
        await Photo.create({
          ...req.body,
          image: '/uploads/' + uploadedImage.name
        })
      })
    res.redirect('/')
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).json({
        status: 'fail',
        error: 'Title must be unique.',
      });
    } else {
      res.status(500).json({
        status: 'error',
        error: 'An error occurred.',
      });
    }
  }
};
exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id)

  const uploadDir = 'public/uploads'
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }
  let uploadedImage = req.files.image
  let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name

  uploadedImage.mv(uploadPath, async () => {
    await Photo.findByIdAndUpdate(photo, {
      title: req.body.title,
      description: req.body.description,
      image: '/uploads/' + uploadedImage.name
    })
  })


  photo.save()
  res.redirect('/')
}
