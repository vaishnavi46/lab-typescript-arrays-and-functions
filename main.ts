import {StringManipulationService } from "./app-service";

export class ArrayManipulations implements StringManipulationService {

   
      arrayFindMultiples(myArray: any) 
      {
         for(let i=0;i<myArray.length;i++)
         {
            if(myArray[i]%5==0 || myArray[i]%10==0)
            {
               console.log(myArray[i]);
            }
         }
      }

      arraySeparate(myArray : any)
      {
         for(let i1=0;i1<myArray.length;i1++)
         {
            if(isNaN(myArray[i1]))
            {
               console.log(myArray[i1]);
            }
         }
      }
      arraySplit(myString : string)
      {
         for(let i2=0;i2<myString.length;i2++)
         {
            
         }
      }
      arraySort(myArray : any) 
      {
         myArray.sort();
         console.log(myArray);
      }
      arrayReplace(myArray : any)

      {
         for(let i4=0;i4<myArray.length;i4++)
         {
            if(myArray[i4]%3==0)
            {
               myArray[i4]=5;
            }
            console.log(myArray[i4]);
         }
         
      }
   }

var myArray: any[] = [34, 45, 60, 23, 13, 25, 70,"467","1224","hii","prograd","hello"];
let array = new ArrayManipulations();
array.arrayFindMultiples(myArray);
array.arraySeparate(myArray);
array.arraySort(myArray);
array.arrayReplace(myArray);


