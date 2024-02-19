import mongoose from 'mongoose';
import colors from 'colors';

const connectDb = async()=>{
    try{
        // console.log(process.env.MongoDB_Url);
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if(conn){
        console.log(`connected to the mongodb database ${mongoose.connection.host}`.bgRed.white);
        }
    } catch(error) {
        console.log(`mongodb error ${error}`.bgRed.white)
    }
}
export default connectDb;