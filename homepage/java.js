function Register(){
    var currentYear=new Date().getFullYear();
    var d="";
    var m="";
    var y="";
    for(i=1;i<=31;i++) d+="<option>" + i + "<option>";
    for(j=1;j<=12;j++) m+="<option>" + j + "<option>";
    for(k = currentYear; k>=1930;k--) y+="<option>" + k + "<option>";
    document.getElementById("ngay").innerHTML=d;
    document.getElementById("thang").innerHTML=m;
    document.getElementById("nam").innerHTML=y;
}

function Onchange(){
    var province = document.getElementById("province");
    var city = document.getElementById("city");
    if(province.value=="BR-VT"){
        var array=["TP Vũng Tàu","TP Bà Rịa"];
        for(var i=0;i<array.length;i++){
            var option=document.createElement("option");
            option.value=array[i];
            option.text=array[i];
            city.appendChild(option);
        }
    }
    else if(province.value=="TPHCM"){
        var array=["Quận 1","Thủ Đức"];
        for( var i=0;i<array.length;i++){
            var option=document.createElement("option");
            option.value=array[i];
            option.text=array[i];
            city.appendChild(option);
        }
    }

    else if(province.value=="HN"){
      var array=["Quận Hoàn Kiếm","Quận Ba Đình"];
      for(var i=0;i<array.length;i++){
          var option=document.createElement("option");
          option.value=array[i];
          option.text=array[i]
          city.appendChild(option);
      }
  }
}

function myFunction() {
    var x = document.getElementById("ps");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
