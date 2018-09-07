function isOldEnoughToDrink(age) {
    if(age>=21){
        return true;
    }else{
        return false;
    }

}
function getProperty(obj, key) {
    return obj.key;
}
function addProperty(obj, key) {
    obj.myProperty = true;
}
function removeProperty(obj, key) {
    obj.key= undefined;
}
function isEven(num) {
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}
function isOdd(num) {
    if(num%2!=0){
        return true;
    }else{
        return false;
    }
}
function addToFront(arr, element) {
    var answer = [element];
    for(var i=0; i<arr.length;i++){
        answer.push(arr[i]);
    }
    return answer;
}
function addToBack(arr, element) {
    arr.push(element);
}
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);

}
function getAllWords(str) {
    if(str.length==0){
        return [];
    }
    var answer = str.split(" ");
    return answer;
}
function extend(obj1, obj2) {
    for(var key in obj2){
        if(obj1.hasOwnProperty(key) === false){
            obj1[key]= obj2[key];
        }
    }
    return obj1;
}
function extend(obj1, obj2) {
    for(var key in obj2){
        if(!obj1[key]){
            obj2[obj1[key]]= obj1[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var key in obj){
        console.log(obj[key]);
        if(typeof obj[key]== "string"){
            console.log("yes");
            delete obj[key];
        }
    }
}
function getIndexOf(char, str) {
    for(var i= 0; i<str.length; i++){
        if(str[i]== char){
            return i;
        }
    }
    return -1;

}
function keep(array, keeper) {
    var answer= [];
    for(var i =0; i<array.length; i++){
        if(array[i]== keeper){
            answer.push(keeper);
        }
    }
    return answer;
}
function getLargestElementAtProperty(obj, key) {
    if(!Array.isArray(obj[key])){
        return undefined;
    }
    if(obj[key].length ===0){
        return undefined;
    }
    if(obj[key] === undefined){
        return undefined;
    }
    var leng = obj[key].length+1;
    console.log(largestElement);
    console.log(leng);
    var largestElement = obj[key][0];
    for(var i=0; i<leng; i++){
        if(largestElement<obj[key][i]){
            largestElement =obj[key][i];
        }
    }
    return largestElement;
}
function calculateBillTotal(preTaxAndTipAmount) {
    var afterTip = preTaxAndTipAmount*0.15;
    var tax = preTaxAndTipAmount*0.095;
    return (preTaxAndTipAmount +afterTip +tax);
}
function sumDigits(num) {
    var newNums= num.toString();
    var sum =0;
    if(Math.sign(num)== -1){
        sum-= parseInt(newNums[1]);
        for(var t=2; t<newNums.length; t++){
            sum+= parseInt(newNums[t]);
        }
    }else{
        for(var i =0; i<newNums.length; i++){
            sum+= parseInt(newNums[i]);
        }
    }
    return sum;
}
function listAllValues(obj) {
    var array =[];
    for(var key in obj){
        array.push(obj[key]);
        console.log(array);
    }
    return array;
}
function detectOutlierValue(string){
    var evens =0;
    var odds =0;
    var array = string.split(" ");
    for(var i=0;i<array.length; i++){
        if(parseInt(array[i])%2===0){
            evens++;
        }else{
            odds++;
        }
    }
    if(evens>odds){
        for(var l=0;l<array.length; l++){
            if(parseInt(array[l])%2!=0){
                return "Number "+(l+1)+" is odd while all the other numbers are even.";
            }
        }
    }
    if(odds>evens){
        for(var h=0;h<array.length; h++){
            if(parseInt(array[h])%2===0){
                return "Number "+(h+1)+" is even while all the other numbers are odd.";
            }
        }
    }
}
function search(array, value) {
    var start=0;
    var stop =array.length-1;
    var middle=Math.floor((start+stop) / 2);
    while(array[middle] !== value && stop>start){
        if(value< array[middle]){
            stop = middle-1;
        }else{
            start = middle+1;
        }
        middle =Math.floor((start+stop) / 2);
        if(array[middle] === value){
            return middle;
        }
    }
    if(array[middle] === value){
        return middle;
    }
    console.log(middle);
    return null;
}
