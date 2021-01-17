function rev(arr){
    var narr=[];
    for (var i=arr.length-1;i>=0;i--)
    {
    narr+=arr[i];
    }
    return narr;
    }
    console.log(rev([8,7,6,5]));