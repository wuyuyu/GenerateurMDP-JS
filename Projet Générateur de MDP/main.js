// test

const p = new Password();

// p.setRange(Password.all);
// p.exclude(Password.num);
// //p.include();

// //console.log(p.generate(20));
// //console.log(p.range, p.range.toString(2));
// console.log(p.getChars());
// console.log(p.generate(10));


// const mdp = document.getElementById('mdp');

// mdp.innerText = p.generate(10);

let options = document.querySelector('#options');

p.data.forEach(obj => {
    options.innerHTML += `
        <li class="list-group-item">
            ${obj.name}
            (${obj.chars})
        </li>
    `;


});