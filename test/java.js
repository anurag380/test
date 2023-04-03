let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector(' .head .flex .navbar');




menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

function sendmsg(){
    let nam=document.getElementById('name')
    let no=document.getElementById('number')
    if (nam.value === '' || no.value.length === ''){
        document.getElementById('text').innerHTML='Values are not valid'
    }
    else
    {
        alert("HAVE A GOOD DAY")
    }
}