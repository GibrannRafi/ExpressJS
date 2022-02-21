//CRUD

const UserModel = require('../models').user

const res = require("express/lib/response")

const createUser = async(req,res) => {

    const payload = req.body
    const user = await UserModel.create(payload)

    return res.json({
        status : 'Succes',
        msg : 'Berhasil menambahkan user'
    })
//  return res.json({
//      data: payload, // untuk memastikan body sudah di dapatkan  
//  })
}


module.exports = {createUser}