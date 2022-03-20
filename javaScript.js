function bmi() {
    var bb = document.getElementById("bb").value;
    var tb = document.getElementById('tb').value;
    var hasil = bb/tb ** 2;
    var a = "UNDERWEIGHT";
    var b = "NORMAL";
    var c = "OVERWEIGHT"
    var d = "OBESE";
    var e = "EXTREMELY OBESE";
    document.getElementById("result").innerHTML = format_number(hasil);

    function format_number(n) {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
      }

    if (hasil<18.5) {
        document.getElementById("classification").innerHTML = a;
    }

    else if (hasil<24.9) {
        document.getElementById("classification").innerHTML = b;

    }
    else if (hasil<29.9) {
        document.getElementById("classification").innerHTML = c;

    }

    else if (hasil<34.9) {
        document.getElementById("classification").innerHTML = d;

    }

    else {
        document.getElementById("classification").innerHTML = e;

    }
}