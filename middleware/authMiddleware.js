const authMiddleware =  (req, res, next) => {
let {authorization, role}= req.headers

if(authorization !== "12345"){
    return res.status(422).json({
        status : 'fail',
        msg : 'Anda belum login',
        // Headers : req.headers,
        authorization : authorization
    })
}  
    if(authorization !== "12345"){
    return res.status(422).json({
        status : 'fail',
        msg : 'Anda tidak memiliki akses',
        // Headers : req.headers,
        authorization : authorization
    })
}  
    next()
}

module.exports = authMiddleware