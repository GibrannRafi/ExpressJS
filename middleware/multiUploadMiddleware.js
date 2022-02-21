const multer = require('multer')//untuk upload atau mengambil file 
const path = require('path') 
const {nanoid} = require('nanoid') //untuk ngasih id 



//arahkan pathnya 

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null , './public/storage')
    },
    filename : function(req,file , cb){
        cb(null , nanoid() + path.extname(file.originalname))
    }
})  


const maxSize = 20 * 1024 *1024 //max 2mb
const upload = multer({
    storage : storage,
    limits : { 
        fileSize : maxSize
    }
}).array('file', 99);

const uploadMultiValidation = (req,res,next) => {
    return upload(req,res, function(err){
        if (err) {
            res.status(422).json({
                status : 'fail',
                msg: err.message
            });
        };
        next()
    });
  
};

module.exports = uploadMultiValidation;