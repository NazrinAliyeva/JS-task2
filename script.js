//task1
let array=[1,2,3,4,5];
for(let i=array.length-1;i>=0;i--){
    console.log(array[i])
}
//task2
let numbers=[2,3,4,7,8,9,10,24,67,86,98,23,45,56,76,81,12,14,12,13]
for(let i=0; i<20;i++){
    if(i%2==0){
        console.log(numbers[i]);
    }
}
//task3
let nums=[];
let a =parseInt(prompt('100ve 1 arasinda eded daxil edin'))
let count=0;
for(let i=0;i<25;i++){
    let num=(Math.trunc(Math.random()*(100-1)+1))
    nums.push(num)
if(nums[i]==a){
    count++;
}
}
console.log(nums)
console.log(count)
//task4
let arr2=[];
let bolunen3=0;
let bolunen5=0;
let bolunen7=0;
for(let i=0;i<13;i++){
    let num=(Math.trunc(Math.random()*(100-1)+1))
    arr2.push(num)
if(arr2[i]%3==0){
bolunen3++
}
if(arr2[i]%5==0){
    bolunen5++
    }
    if(arr2[i]%7==0){
        bolunen7++
        }
}
console.log(bolunen3)
console.log(bolunen7)
console.log(bolunen5)
console.log(arr2)