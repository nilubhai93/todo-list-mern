const testController=(req, res)=>{
    res.status(200).send("<h1>test success </h1>")
}


module.exports = { testController }