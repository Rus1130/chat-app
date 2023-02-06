const blacklistedWords = ["null", "undefined", "NaN", "Infinity", "false", "true"];

function checkPassword(password){
    // check if it is less than 8 characters
    if(password.length < 8){
        return false;
    }

    // check if the password contains a blacklisted word
    for(let i = 0; i < blacklistedWords.length; i++){
        if(password.includes(blacklistedWords[i])){
            return false;
        }
    }

    // check if the password contains a number
    if(!/\d/.test(password)){
        return false;
    }

    // check if the password contains a lowercase letter
    if(!/[a-z]/.test(password)){
        return false;
    }

    // check if the password contains an uppercase letter
    if(!/[A-Z]/.test(password)){
        return false;
    }

    return true;
}