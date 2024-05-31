const printError = (id, msg) => {
    document.getElementById(id).innerHTML = msg;
}
const validate = () => {
    let nameErr = mmobileErr = emailErr = hobbyErr = langErr = true;
    let data = {
        name: "",
        mobile: "",
        email: "",
        hobbies: [],
        lang: "",
    }
    //code goes here to check for validation
    const name = document.studentFrm.name.value;
    const mobile = document.studentFrm.mobile.value;
    const email = document.studentFrm.email.value;
    const hobbies = document.getElementsByName("hobby");//array
    const lang = document.studentFrm.lang.value;

    if (name === "") {
        printError("nameErr", "Please enter your name");
    }
    else {
        printError("nameErr", "");
        data = { ...data, name };
        nameErr = false;
    }

    if (mobile === "") {
        printError("mobileErr", "Please enter your mobile number");
    }
    else {
        printError("mobileErr", "");
        data = { ...data, mobile };
        mmobileErr = false;
    }

    if (email === "") {
        printError("emailErr", "Please enter your email-ID");
    }
    else {
        printError("emailErr", "");
        data = { ...data, email };
        mmobileErr = false;
    }

    if (hobbies.length > 0) {
        for (let hobby of hobbies) {
            if (hobby.checked === true) {
                data.hobbies.push(hobby.value);
            }
        }
        // hobbyErr=false;
    }
    if (data.hobbies.length > 0) {
        printError("hobbyErr", "");
        data = { ...data, hobby };
        hobbyErr = false;
    }
    else {
        printError("hobbyErr", "Select your hobbies");
    }

    if (lang === "Select") {
        printError("langErr", "Select your language");
    }
    else {
        printError("langErr", "");
        data = { ...data, lang };// taaki purana data delete na ho
        langErr = false;
    }


    if (nameErr || mobileErr || emailErr || hobbyErr || langErr)
        return false;
    else {
        console.log(data);
        prompt("hlo");
        alert(JSON.stringify(data));
        return true;
    }
}