import { z } from "zod";

export const createProductValidationSchema = z.object({
    body : z.object({
        name : z.string(),
        image: z.string(),
        price : z.number(),
        category: z.enum([
           'Dumbbells'  , 'ExerciseBikes' ,'WeightPlates' 
          
          ]),
        description : z.string(),
        stockQuantity : z.string()
    })
})
export const UpdateProductValidationSchema = z.object({
    body : z.object({
        name : z.string().optional(),
        image: z.string().optional(),
        price : z.number().optional(),
        category: z.enum([
           'Dumbbells'  , 'ExerciseBikes' ,'WeightPlates'
          
          ]).optional(),
        description : z.string().optional(),
        stockQuantity : z.string().optional()
    })
})

