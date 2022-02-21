const express = require("express"); //memanggil express
const app = express(); //jadikan variable
const port = 8000;
const routers = require("./routers")
app.use(express.json());
app.use(express.static("public"));
app.use(routers)


app.listen(port, () => console.log(`Server berjalan di port ${port}`));