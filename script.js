function sudosubmit() {
    var a = document.getElementById("district").value;

    var b = document.getElementById("ward").value;

    var c = document.getElementById("bedroom").value;

    var d = document.getElementById("square").value;
    var e = document.getElementById("something").value;
    document.getElementById("demo").innerHTML = "Giá nhà tại quận "+ a + " phường " + b +" có "+ c + " phòng ngủ " + " với diện tích là " + d + "m2 " + e + " là ";
}

$(function(){
    $("#ward").chained("#district");
   });