export default function (err, req, res, next) {
    
    console.log(err.message)
    console.log(err.statusCode)

    let error = "Internal Server Error";
    if (err.statusCode == 404) {
        error = "Not Found";
    } else if (err.statusCode == 400) {
        error = "Bad Request";
    }
    // TODO: Lav alle de andre error navne her

    res.status(err.statusCode).json({
        message: err.message,
        error: error,
        statusCode: err.statusCode
    });
}