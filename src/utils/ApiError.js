class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message - message
        this.success = false // success code nhi jaega coz we are handling api errors not api responses 
        this.errors = errors

        if(statck){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

    export {ApiError}