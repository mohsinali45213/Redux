import { BYU_CAKE } from "./CakeType";
export const buyCake=(number=1)=>{
    return{
        type:BYU_CAKE,
        payload:number
    }
}