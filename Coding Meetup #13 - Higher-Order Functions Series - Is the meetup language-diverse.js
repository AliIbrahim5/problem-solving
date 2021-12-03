

// الخطاء للأكثر من الضعفي 
// الصحيح اذا كان متساوي او اكثر بضعف واحد
// مااذا كانت لغة البرمجة اكثر من ضعفي لغات البرمجة فتكون الناتج false وغير ذالك تكون true

// var list1 = [
//     { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//     { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//     { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
//   ];






// function isLanguageDiverse(list) {
//     let obj = {}
//     let arr = []
//     for(i=0; i<list.length; i++) {
//       let language = list[i].language
//       if(!obj[language]) {
//         obj[language] = 0
//       }
//       obj[language]++
//     }
//   for(key in obj) {
//     arr.push(+obj[key])
//   }
//     let highest = findMax(arr)
//     let smallest = findMin(arr)
//     if(highest > smallest * 2) {
//       return false
//     } else {
//       return true
//     }
//   }
  
//   function findMin(arr) {
//     let min = arr[0]
//     for(j=0; j<arr.length; j++) {
//        if(arr[j] < min) {
//         min = arr[j]
//       }
//     }
//     return min
//     }
  
  
//   function findMax(arr) {
//     let max = arr[0]
//     for(x=0; x<arr.length; x++) {
//       if(arr[x] > max) {
//         max = arr[x]
//       }
//     }
//     return max
//   }