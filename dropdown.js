var subjectObject = {
    "Hà Đông": ["Phú Lãm","Yên Nghĩa","Nguyễn Trãi"],
    "Tây Hồ": ["Phú Thượng","Nhật Tân"]
  }
  window.onload = function() {
    var district = document.getElementById("district");
    var ward = document.getElementById("ward");
    for (var x in subjectObject) {
      district.options[district.options.length] = new Option(x, x);
    }

    //district change
    district.onchange = function() {
        ward.length = 1; // remove all options bar first
        if (this.selectedIndex < 1)
        return; // done
      //display correct values
      for (var y in subjectObject[this.value]) {
        ward.options[ward.options.length] = new Option(y, y);
      }
    }
  }