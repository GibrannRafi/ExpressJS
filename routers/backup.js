const express = require("express");
const routers = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const uploadSingleValidation = require("../middleware/singleUploadMiddleware");
const uploadMultiValidation = require("../middleware/MultiUploadMiddleware");
// routers.use(authMiddleware)

routers.get("/user", authMiddleware, (req, res) => {
  let data = req.query;
  let { keyword, name, kelas } = req.query;
  res.json({
    status: "success",
    msg: "ini adalah method get",
    data: data,
    keyword: keyword,
    name: name,
    kelas: kelas,
  });
});
routers.get("/user/:nama", (req, res) => {
  let nama = req.params.nama;
  //let {nama} = req.params
  res.json({
    status: "succes",
    msg: "ini adalah method get",
    nama: nama,
  });
});

//query string

routers.post("/user", (req, res) => {
  let data = req.body;
  res.json({
    status: "succes",
    data: data,
  });
});
routers.put("/user", (req, res) => {
  res.send("ini method put");
});
routers.delete("/user", (req, res) => {
  res.send("ini method delete");
});
routers.post("/user/upload", uploadSingleValidation, (req, res) => {
  const url = `${req.protocol}://${req.get("host")}/${req.file.filename}`;
  return res.json({
    status: "Fail",
    url: url,
  });
});

routers.post("/user/upload/multi", uploadMultiValidation, (req, res) => {
  const files = req.files;
  const data = []
  files.map((file, index) => {
    data.push({
      namaFIle: file.originalname,
       url : `${req.protocol}://${req.get("host")}/${file.filename}`,
    });
  })
  return res.json({
    files: data,
  });
});

module.exports = routers;
