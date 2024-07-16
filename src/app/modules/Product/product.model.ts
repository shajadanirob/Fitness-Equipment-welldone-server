
import { model, Schema } from "mongoose";
import { TProduct } from "./product.inerface";

const ProductSchema = new Schema<TProduct>({
    name :{
        type : String,
        required : true

    },
    image :{
        type : String,
        required : true

    },
     price:{
        type : Number,
        required : true

    },
    category: {
        type: String,
        enum: [ 'Dumbbells'  , 'ExerciseBikes' ,'WeightPlates' ],
        required : true
    },
    description :{
        type : String,
        required : true

    },
    stockQuantity  :{
        type : Number,
        required : true

    }
})
export const Product = model<TProduct>('Product', ProductSchema);