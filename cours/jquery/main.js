// porte de entrée

/**
 * 
 * c'est une fonction pour isoler
 */
(function () {   
    window.$ = selector => {
        return new Api(selector);
    };
}());

// modifier le text en passant par un selector
$('h1').text('hello word');

// modifier le text en passant par un élément
const title = document.querySelector('h1');
$(title).text('你好');

$('h1').addClass('myStyle').css('background-color', 'pink');

console.log($('h1').elems);





// $(document); ===> on peut mettre des éléments comme ici 'document'
// $('a') ==== on peut mettre un selector pour selectionner un élément de la page html

// let MyLib = function (selector) {
//     return {
//         on: function (type, f) {
//             this.addEventListener(type, f, false);
//         }
//     }
// };

// MyLib('#list').on('click', function () {

// });

// MyLib('.item').text('hello');

//------------------------------------------------

// un objet litteral: ( comme un json )
// à l'intérieur on peut mettre les propriété ou les functions
// let obj = {
//     name: 'toto',
//     age: 0,
//     test: function () {

//     }
// };

// //** example: */ 

// let $ = function (selector) {
//     return { // on retourne un objet
//         text: function (str) {
//             document.querySelector(selector).textContent = str;
//         },

//         on: function (evt, f) {
//             document.querySelector(selector).addEventListener(evt, f, false);

//         }
//     }
// };

// $('h1').text('Hello World');

// $('h1').on('click', evt => {
//     alert('my super lib');
// });