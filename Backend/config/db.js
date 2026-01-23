import mongoose from "mongoose"

let connection = async()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/lucenza")
        console.log("Db Connected");
        
   
    
} catch (error) {
    console.log(error,error.message);
}

}
export default connection

