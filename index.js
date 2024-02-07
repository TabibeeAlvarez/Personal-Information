document.getElementById('pop-bg').style.display = 'none'

function pasok(){
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if(username === 'tabibee' && password === '12345'){
        window.location.href = '/inside/index-inside.html'
    }
    else{
        document.getElementById('pop-bg').style.display = 'block'
        document.getElementById('bg').style.display = 'none'
    }
    event.preventDefault();
}

const popUp = document.querySelectorAll('.pop-paper');
window.addEventListener('click', pops);

function pops(){
    const triggerBottom = window.innerHeight / 3 * 2;

    popUp.forEach(puppy => {
        const puppyTop = puppy.getBoundingClientRect().top;

        if(puppyTop < triggerBottom){
            puppy.classList.add('popUp');
        }
        else{
            puppy.classList.remove('popUp');
        }
    })
}
