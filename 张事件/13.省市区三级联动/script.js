var arr=[
    "北京",[
        "海淀",["海淀1","海淀2","海淀3"],
        "朝阳",["朝阳1","朝阳2","朝阳3"]
    ],
    "山东",[
        "济南",["济南1","济南2","济南3"],
        "泸州",["泸州1","泸州2","泸州3"]
    ],
    "河北",[
        "张家口",["张家口1","张家口2","张家口3"],
        "石家庄",["石家庄1","石家庄2","石家庄3"]
    ]
]

var pos=document.getElementById("pos");
var city=document.getElementById("city");
var county=document.getElementById("county");

for(var i=0;i<arr.length;i++){
    if(typeof arr[i]=="string"){
        pos.add(new Option(arr[i],arr[i]))
    }
}

pos.onchange=function(){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==pos.value){
            // alert(pos.value)
            // alert(arr[i+1])
            var brr=arr[i+1];
            city.innerHTML="";
            for(var j=0;j<brr.length;j++){
                if(typeof brr[j]=="string"){
                    city.add(new Option(brr[j],brr[j]))
                }
            }
        }
    }
}

city.onchange=function(){
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i]!="string"){
            // alert(arr[i])
            var crr=arr[i];
           
            for(var k=0;k<crr.length;k++){
                if(typeof crr[k]=="string"){
                    if(crr[k]==city.value){
                        var drr=crr[k+1];
                        // alert(drr)
                        county.innerHTML="";
                        for(var w=0;w<drr.length;w++){
                            county.add(new Option( drr[w],drr[w]))
                        }
                    }
                    
                }
            }
        }
    }
}