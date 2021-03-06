// coeur de ma bibliothèque
// ici on met tous les fonctions dont j'ai beesoin
// pratique, fichier est en minuscule mais le nom de la class est en majuscule

class Api {

    // $('h1') Si le selector est une chaine de caractères alors querySelector
    // $(elem) Si le selector est un element HTML alors on le place directement dans le tableau
    constructor(selector) {
        // vérification: si il n'y a pas de selector alors on arrête.
        if (!selector) {
            return;
        }

        // Les éléments séléctionnées par le querySelectorAll.
        this.elems = [];

        // peut import ce qu'on met (un objet ou un element html ou un ou plusieur)
        this.wrap(selector);

        this.event = new MyEvent();

    }

    on(evt, callback) {
        this.elems.forEach(elem => this.event.bind(evt, callback, elem));
        return this;
    }
    /**
     * cette méthode permet de récupérer un selector
     * ou d'envelopper un élément déjà existant.
     * 
     * @param {string|Object} selector 
     */

    wrap(selector) {
        // si c'est un objet et pas un array 
        if (selector === Object(selector) && !Array.isArray(selector)) {
            this.elems = [selector];
        }

        if (typeof selector === 'string' || selector instanceof String) {
            this.elems = [...document.querySelectorAll(selector)]; // ça renvoie une NodeList
        }
    }

    /**
     * text permet de modifier le texte d'un élément
     * @param {*} value 
     */
    text(value) {
        this.elems.forEach(elem => elem.textContent = value);
        return this;
    }

    /**
     * ajouter une class de css à selector
     * application: $('li').addClass('myStyle');
     * resultat: <li class="myStyle"></li>
     */
    addClass(...className) {
        this.elems.forEach(elem => elem.classList.add(...className));
        return this;
    }

    /**
     * on ouvre/étendre la class
     */
    toggleClass(className) {
        this.elems.forEach(elem => elem.classList.toggle(className));
        return this;
    }

    removeClass(className) {
        this.elems.forEach(elem => elem.classList.remove(className));
        return this;
    }

    css(property, value) {
        this.elems.forEach(elem => elem.style[property] = value);
        return this;
    }

    /**
     * selectionner les éléments paire
     */
    even() {
        this.elems = this.elems.filter((_elem, index) => index % 2 === 0);
        return this;
    }
    
    /**
     * selectionner les éléments impaire
     */
    odd() {
        this.elems = this.elems.filter((_elem, index) => index % 2 === 1);
        return this;
    }

}


// les ... vaut dire que, on part de la table initial et on ajoute les choses apres
let t = ['a', 'b', 'c'];
let table = [...t, 'd', 'e', 'f'];
console.log(table);