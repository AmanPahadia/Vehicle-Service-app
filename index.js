const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const app=express();
const PORT=process.env.PORT||3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));

app.post("/submit",(req, res) => {
  console.log("Received submission:");
  console.log(req.body);
  res.json({
    status:"success",
    message:"Form received",
    received:{ vehicleNo:req.body.vehicleNo,
      vehicleModel:req.body.vehicleModel,
      jobType:req.body.jobType,  }, }); });

app.get("/",(req,res)=>{ res.sendFile(path.join(__dirname, "public","index.html"));
});
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});
