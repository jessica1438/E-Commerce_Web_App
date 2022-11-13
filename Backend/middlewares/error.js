//const ErrorHandler = require("../utils/Errorhandler")

module.exports = (err,req,res,next)=>{
    err.statusCode=err.statusCode || 500
    err.message=err.message  || "Internal Server error"

    res.status(err.statuscode).json({
        success: false,
        error: err.message
    })
}

