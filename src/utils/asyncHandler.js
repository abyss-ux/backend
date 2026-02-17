//* asyncHandler function using promises

 


export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

    //* one of the method to form asyncHandler function using try catch block 

// const asyncHandler = (fn) => async (req,res,next) => {
//         try{
//             await fn(req,res,next)
//         }
//         catch(error){
//             res.status(err.code||500).json({
//                 success:false,
//                 message:err.message 
//             })
//         }
// }