function mysubmit() {
    let choicesym = document.getElementById("choice").value;
    if (choicesym == "") {
        alert("กรุณาเลือกอาการ");
        return false;
    }
    else if (choicesym == "1") {
        symp = "ปวดท้อง";
        detail = "อาจท้องเสีย";
    }
    else if (choicesym == "2") {
        symp = "ปวดหัว";
        detail = "อาจเกิดจากการนอนดึก";
    }
    else if (choicesym == "3") {
        symp = "ผมร่วง";
        detail = "อาจเกิดจากการเป็นมะเร็ง";
    }
    else if (choicesym == "4") {
        symp = "ปวดตา";
        detail = "อาจเกิดจากการใช้สายตาเยอะ";
    }
    else if (choicesym == "5") {
        symp = "ท้องอืด";
        detail = "อาจเกิดจากท้องอืด";
    }
    else if (choicesym == "6") {
        symp = "ท้องเสีย";
        detail = "อาจเกิดจากท้องเสียปั่นป่วน";
    }

    document.getElementById("symp").innerHTML = symp;
    document.getElementById("detail").innerHTML = detail;
}


