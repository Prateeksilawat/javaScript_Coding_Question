
//Que-1

 let n = 754
 let arr = [2000,500,200,100,50,20,10,5,2,1]  
 let count = {
      1 : 0,
      2:0,
      5:0,
      10:0,
      20:0,
      50:0,
      100:0,
      200:0,
      500:0,
      2000:0
 }      
 
 for(let i = 0 ; i<arr.length;i++){
    while(n>=arr[i]) {
        n = n- arr[i]
        count[arr[i]]++
    }
 }
 for(let key in count){
    console.log(`${key} * ${count[key]}`)
 }
