class errorhandler extends Error
{
    constructor(message, statuscode)
    {
        super(message) //it calls the parent class constructor ( here it is the Error class ), you cannot use "this." without super, you will get a refernce error)
        this.statuscode=statuscode
        
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = errorhandler

