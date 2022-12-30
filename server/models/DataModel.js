const mongoose = require ('mongoose')

const User = mongoose.Schema(
     {
          name: {
               type: String,
               required: true
          },
          alamat: {
               type: String,
               required: true
          },
          telepon: {
               type: Number,
               required: true
          },
          fasilitas: {
               type: String,
               required: true
          },
          buka: {
               type: Number,
               required: true
          },
          tutup: {
               type: Number,
               required: true
          },
          lat: {
               type: Number,
               required: true
          },
          lng: {
               type: Number,
               required: true
          }
     });

module.exports = mongoose.model('Datas', User);