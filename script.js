function beforesubmit(event){
if(captchaChecked){
    let outputdate = document.querySelector(".outputdate");   
 let inputdate = document.querySelector(".inputdate");
console.log('inputdate',inputdate.value ); //string --Date (en_IN)

let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");

outputdate.value = formattedDate;

console.log('outputdate', outputdate.value);

}else{
    alert("Please check the reCaptcha box");
    event.preventDefault();
}
 
}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


let captchaChecked = false;

function captchasuccess(){
    captchaChecked = true;
}