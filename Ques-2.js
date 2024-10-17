



// Question-2 

 let num= [5,7,6,7,7,8,9]
 let sum = 0
 let mean 
 for( i=0 ;i<num.length;i++){
    sum =  num[i] + sum
     mean = (sum)/num.length
 }
 console.log( 'sum' +' ' +sum)
 console.log('mean' + ' ' +mean)


function bubbleSort(array){
    for(i=array.length;i>0;i--){
        for(j=0; j<i-1; j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
}

 const res = bubbleSort([9,8,7,6,5,4,3,2,1,0])
 console.log('sort'+' '+res)
console.log(res.length, 'length')

 if((res.length % 2) !== 0) {
  
    let midindex = (res.length - 1)/2
       console.log('Median' + ' '+res[midindex])

 }
 else {
    console.log(res.length)
    let midindex = res.length/2;
    let nextIndex = res.length/2 + 1;
    console.log('Median' + ' '+ res[midindex], res[nextIndex])
  }


  //mode
  
function findMode(arr){
if(arr === 0) null
 
let mode = arr[0]
let maxCount = 0


for(let i=0 ;i<arr.length; i++)
{
    let count = 0
    for(let j=0 ;j<arr.length;j++)
    {
        if(arr[i]===arr[j]){
            count ++
        }
    }
    if(count > maxCount){
        maxCount = count
        mode = arr[i]
    }
}
 return mode
}
const arr = res
const result1 = findMode(arr) 
console.log(result1)



