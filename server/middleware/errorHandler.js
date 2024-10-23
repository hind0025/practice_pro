const {constants}=require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR: res.json({
            title: "Validation failed",
            message: err.message,
            stackTrace: err.stack,
        });
        break;
        case constants.NOT_FOUND: res.join({
            title: "Not Found",
            message: err.message,
            stackTrace: err.stack,
        });
        case constants.UNAUTHORIZED: res.join({
            title: "Unauthorized",
            message: err.message,
            stackTrace: err.stack,
        });
        case constants.SERVER_ERROR: res.join({
            title: "Server Error",
            message: err.message,
            stackTrace: err.stack,
        });
        default:
            console.log("no error");
            break;
    }
};
module.exports = errorHandler