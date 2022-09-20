let zouazo1 = document.getElementById('zouazo1');
let zouazo2 = document.getElementById('zouazo2');
let zouazo3 = document.getElementById('zouazo3');
let zouazo4 = document.getElementById('zouazo4');
let zouazo5 = document.getElementById('zouazo5');
let zouazo6 = document.getElementById('zouazo6');
let start = document.querySelector('button');

let tableau = [
    zouazo1,
    zouazo2,
    zouazo3,
    zouazo4,
    zouazo5,
    zouazo6
];

function cacher () {
    zouazo1.style.visibility = 'hidden';
    zouazo2.style.visibility = 'hidden';
    zouazo3.style.visibility = 'hidden';
    zouazo4.style.visibility = 'hidden';
    zouazo5.style.visibility = 'hidden';
    zouazo6.style.visibility = 'hidden';
};
cacher();

let x = 0;
zouazo1.addEventListener('click', yes);
zouazo2.addEventListener('click', yes);
zouazo3.addEventListener('click', yes);
zouazo4.addEventListener('click', yes);
zouazo5.addEventListener('click', yes);
zouazo6.addEventListener('click', yes);
    function yes() {
        x += 1;
        console.log(x);
        score.innerHTML = x;
    }

start.addEventListener('click', go);
    function go() {
        let aZero = x * 0;
        score.innerHTML = aZero;
        let myTimeout = setInterval(hehe, 1000);
            function hehe() {
                let myTimeout = 
                setTimeout(aleatoir, 900);
                    function aleatoir() {
                        let b = Math.floor(Math.random() * tableau.length);
                        console.log(b);
                        setTimeout(aff, 10);
                            function aff() {
                                tableau[b].style.visibility = 'visible';
                                setTimeout(cach, 800);
                                function cach() {
                                    tableau[b].style.visibility = 'hidden';
                                }
                            }
                    } 
            }

        setTimeout(zero, 10000);
            function zero() {
                clearTimeout(myTimeout);
            }
    }