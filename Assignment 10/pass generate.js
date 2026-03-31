

// Complete Yesterday's PasswordGenerator code 
function generate(length) {
    let password = "";
    let s = '';
    passwordData = 'asdfvghtbneASDECADAKJAF123456789!@#%^&*'
    for (var i = 0; i < length; i++) {
        let pos = Math.floor(Math.random() * passwordData.length)
        password += passwordData[pos];
    }
    console.log(password);
}
//declaration 
function call1() {
    console.log("call")
}

generate(5);
generate(8);

