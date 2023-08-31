function replaceName() {
    let name = prompt("Silahkan Masukkan Nama Anda?", "");
    document.getElementById("name").innerHTML=name;
}

replaceName();

var slideIndex = 1

setInterval(function(){
    plusIndex(1)
}, 2000)

function plusIndex(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    var imgList = document.getElementsByClassName("autoslide")
    var i;
    if (index > imgList.length) {slideIndex = 1}
    if (index < 1) {slideIndex = imgList.length}

    for (i=0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex -1].style.display = "block";
}

function validateForm(){
    const fullname = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["jeniskelamin"].value;
    const messages = document.forms["message-form"]["pesan"].value;

    if (fullname == "" || birthdate == "" ||gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(fullname, birthdate, gender, messages);

    return false;
}

function setSenderUI(fullname, birthdate, gender, messages){
    document.getElementById("sender-full-name").innerHTML=fullname;
    document.getElementById("sender-birth-date").innerHTML=birthdate;
    document.getElementById("sender-gender").innerHTML=gender;
    document.getElementById("sender-messages").innerHTML=messages;
}
