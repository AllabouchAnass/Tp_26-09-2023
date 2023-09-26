const root = document.querySelector('#root');
let animInterval;
let isanim = false;
let p = 0;

function recupererValeur() {
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }

    let val = document.querySelector('#val');
    let nbr = parseInt(val.value);

    for (let i = 0; i < nbr; i++) {
        let elm = document.createElement('div');
        root.appendChild(elm);
        elm.classList.add('element');
    }
}

function anim() {
    root.children.item(p).classList.toggle('active');
    p=(p+1)%root.children.length;
}

function animation() {
    if (isanim) {
        clearInterval(animInterval);
        toggleButtonText();
    } else {
        animInterval = setInterval(anim, 100);
        toggleButtonText();
    }
    isanim = !isanim;

}

function toggleButtonText() {
    const toggleButton = document.getElementById('togglebtn');
    toggleButton.innerText = isanim ? 'Start' : 'Stop';
}