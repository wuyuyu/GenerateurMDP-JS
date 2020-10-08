// test

const p = new Password();

const options = document.querySelector('#options');
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');


// addEventListener('type', callback(fonction de rapelle, ), boolean: direction de l'événement)
size.addEventListener('input', event => {

    console.log(event);
    console.log(event.target === size); // élévement c'est size

    slider.value = size.value;
}); 

slider.addEventListener('input', e => { size.value = slider.value });


// pour récupérer l'endroit où utilisateur a cliqué sur la page
const body = document.querySelector('body');
body.addEventListener('click', evt => {
    console.log(evt.clientX, evt.clientY);
});



rangeFormList();

function rangeFormList() {
    options.innerHTML='';
    p.data.forEach(obj => {
        options.innerHTML += `
        <li class="list-group-item">
        ${obj.name}
        (${obj.chars})
        <input type="checkbox" value="${obj.range}" ${ obj.range & p.range ? 'checked' : '' }/>
        
        </li>
        `;
    });
   
}


// p.setRange(Password.all);
// p.exclude(Password.num);
// //p.include();

// //console.log(p.generate(20));
// //console.log(p.range, p.range.toString(2));
// console.log(p.getChars());
// console.log(p.generate(10));


// const mdp = document.getElementById('mdp');

// mdp.innerText = p.generate(10);