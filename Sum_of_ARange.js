var num = [];
function range (arr){  
    var lower = Math.min(...arr);    
    var upper = Math.max(...arr);  

    for (var i=lower;i<=upper;i++){  
        num.push(i);  
    }
    return num; 
}  

function sum(arr){  
    var total = 0;
    for(var i in arr){  
       total = total+arr[i];  
    }
    return total;
}  

console.log(sum(range([1,10]))); 