const list = document.querySelectorAll('li');

list.forEach(element => {
    element.style.backgroundColor = 'yellow';
});

const text = document.createTextNode('Item 4'); //creation de code html: #TEXT
const a = document.createElement('a');   // creation de code html: <a></a>
const li = document.createElement('li'); // creation de code html: <li></li>

// appendChild pour donner un enfant à un 
a.href = "#";
a.appendChild(text);
li.appendChild(a);                       // creation de code html: <li><a> </a></li>


const ul = document.querySelector('ul');
// =====> ajoute un li ================
//** 1er façon */ 
//list[0].parentNode.appendChild(li);

//** 2ème façon */ 
//const ul = document.querySelector('ul');
//ul.appendChild(li);
// ======================================


// =====> supprimer la 2ème item =======
//** 1er façon */
// list[1].remove();
//** 2ème façon */
// ul.removeChild(list[1]);

// const child = ul.childrenNodes[2];

// ======> ajouter un element devant le 2ème item
console.log('22222');
//ul.insertBefore(li, list[1]);


// ======> TP : récupérer le text entré dans input et le ajouter le test dans le ul

const buttonAjouter = document.querySelector('#button');
const input = document.querySelector('input');

const inputLi = document.createElement('li');
const inputA = document.createElement('a');


buttonAjouter.addEventListener('click', evt => {

        var inputText = document.createTextNode(input.value);
        // console.log(inputText);
        inputA.appendChild(inputText);
        console.log(inputA);
        inputLi.appendChild(inputA);
        ul.appendChild(inputLi);
        input.value = '';

}, false);


// un petit todo list 
// PWA, Web Composant , gip