const ErrorHandler = require("../utils/Errorhandler")

module.exports = (err,req,res,next)=>{
    err.statuscode=err.statuscode || 500
    err.message=err.message  || "Internal Server error"

    res.status(err.statuscode).json({
        success: false,
        message: err.message    
    })
}

 