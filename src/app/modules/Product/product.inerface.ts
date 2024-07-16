export type TProduct = {
  name: string;
  image: string;
  price: number;
  category:
  | 'Dumbbells'| 'ExerciseBikes'| 'WeightPlates'
 ;
  description: string;
  stockQuantity : number;
};
