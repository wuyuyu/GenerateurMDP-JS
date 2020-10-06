// -------------Objet-----------
//mon objet ordiateur
function Ordinateur(couleur, inch) {
    this.couleur = couleur;
    this.inch = inch;
    this.showVersion();
}

// en passant par prototype, je peux ajouter une méthode à mon objet Ordinateur
Ordinateur.prototype.showVersion = function () {
    console.log('version 1.0.0');
}

// instances d'objet
const ordi = new Ordinateur('noir', 17);
const ordi2 = new Ordinateur('gris', 15);

console.log(ordi, ordi2);
ordi.showVersion();



//-----------------------------------------
//String est un objet propre de js
//ajouter une méthode "greeting" en passant par prototype
String.prototype.greeting = function (name) {
    return this.toString() + ' ' + name;
};

let str = 'Bonjour';

console.log(str.length, str.toUpperCase());

// on a accès à la méthode greeting
console.log(str.greeting('toto'));


//-------------------------------------------Héritage

//déclaration du objet mère

Personne = function (firstname) {
    this.firstname = firstname;
    this.age = 90;
}

// déclaration du objet fils
Troll = function (firstname) {
    this.firstname = firstname;
}

// héritage
Troll.prototype = new Personne();

//instance de objet Troll à l'accès aux propriétaires de objet mère Personne
t = new Troll('yuyuan');
t.age;
console.log('Héritage: ');
console.log(t.age);

// 2ème méthode de héritage


Troll2 = function (firstname, lastname) {
    Personne.call(this, firstname); // appelle le constructeur Parent: on applle la mère et on lui passe un paramètre
    this.lastname = lastname;
}

f = new Troll2('wu', 'yuyuan');
console.log(f);


Personne.prototype.appelMoi = function (name) {
    return `Hey${name}`;
}

Troll2.prototype.bipMoi = function (name) {
    return `Bip bip !!${this.appelMoi(name)}`;
}

g = new Troll2('wu', 'yoyo');
console.log('-------------------');
console.log(g.bipMoi);


