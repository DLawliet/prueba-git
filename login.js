function login(user, pass) {
    console.log(user, pass);
}

function validar(user, pass) {
    if (user.length > 5) {
        return true;
    }
    return false;
}
