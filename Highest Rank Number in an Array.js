







Solution:


// function highestRank(arr){
//     arr =arr.sort();
//     let count = 0;
//     let num = arr[0];
//     let max = arr[0];
//     let maxCount = 1;
//     for(let i =1 ; i< arr.length ; i++)
//     {
//         if(num == arr[i])
//         {
//             count++;
//         }
//         else
//         {
//             if(maxCount< count)
//             {
//                 maxCount = count;
//                 max =num;
//             }
//             num = arr[i];
//             count =1;
//         }
//         console.log(arr)
//     }
//     return max;
// }



// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
