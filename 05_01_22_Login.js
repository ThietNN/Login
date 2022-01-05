let account = prompt("Enter Username:");

if (account == 'Admin'){
    let password = prompt("Enter Password");
    if (password == 'TheMaster'){
        alert('Welcome!');
    }
    else if (password == null){
        alert('Canceled');
    }
    else{
        alert('Wrong Password');
    }
}
else if (account == null){
    alert('Canceled');
}
else {
    alert("I don't know you")
}