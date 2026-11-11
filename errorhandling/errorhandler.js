export default function (err, req, res, next) {
    console.log(err.message)
    console.log(err.statusCode)

    let statusCode = err.statusCode || 500;
    let error = err.error || "Internal Server Error";
    let message = err.message || "Something went wrong";

    if (statusCode == 404) {
        error = "Not Found";
    } else if (satusCode == 400) {
        error = "Bad Request";
    } else if (statusCode == 401) {
        error = "Unauthorized";
    } else if (statusCode == 403) {
        error = "Forbidden";
    } else if (statusCode == 409) {
        error = "Conflict";
    } else if (statusCode == 418) {
        error = "I'm a teapot";
    }

    res.status(statusCode).json({
        message: message,
        error: error,
        statusCode: statusCode
    });
}