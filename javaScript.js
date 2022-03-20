function bmi() {
    var bb = document.getElementById("bb").value;
    var tb = document.getElementById('tb').value;
    var tbb = tb*tb;
    var hasil = bb/tbb;
    document.getElementById("result").innerHTML = hasil ;

    if (hasil<18.5) {
        var paragraph = document.getElementById("classification");
        var text = document.createTextNode("UNDERWEIGHT");

        paragraph.appendChild(text);
    }

    else if (hasil<24.9) {
        var paragraph = document.getElementById("classification");
        var text = document.createTextNode("NORMAL");

        paragraph.appendChild(text);
    }
    else if (hasil<29.9) {
        var paragraph = document.getElementById("classification");
        var text = document.createTextNode("OVERWEIGHT");

        paragraph.appendChild(text);
    }

    else if (hasil<34.9) {
        var paragraph = document.getElementById("classification");
        var text = document.createTextNode("OBESE");

        paragraph.appendChild(text);
    }

    else {
        var paragraph = document.getElementById("classification");
        var text = document.createTextNode("EXTREMELY OBESE");

        paragraph.appendChild(text);
    }
}