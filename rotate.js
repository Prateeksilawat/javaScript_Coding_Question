function search(x,y){
   

 let Arr = []
for(let i = y ; i<x.length ; i++)
{
    Arr.push(x[i])
}
for(let j = 0 ; j<y ;j++)
{
    Arr.push(x[j])
}
return Arr
}

function indexFind(p,y){
 for(let i = 0 ; i<p.length ; i++){
    if(y == p[i]){
        return i
    }
 }
 return -i
}

const y = 5
const z = search([0,1,2,3,4,5,6,7,8,9],y)
const p = [0,1,2,3,4,5,6,7,8,9]
console.log('Original Array' +" "+ p)
console.log('Rotate Array'+" "+z)

const index = indexFind(p,y)
console.log('index' +' ' +index)