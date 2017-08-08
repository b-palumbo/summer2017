let input = window.document.querySelector('#num');
let button = window.document.querySelector('#btnGenerate');
let div = window.document.querySelector('#wrapper');



button.addEventListener('click', createGrid);


function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createGrid() {
    var items = [];
    var strings = '';
    var ttlaverage = 0;
    var average = 0;



    var result = input.value;
    div.innerHTML = result;
    parseInt(result);

    strings += '<table border="1">';
    
    for (let rows = 0; rows < result; rows++) {
        items[rows] = [];
        strings += '<tr>';
        for (let col = 0; col < result; col++) {
            items[rows][col] = randomNumber(1, 100);

            if (items[rows][col] % 3 === 0) {
                strings += '<td class="red">' + items[rows][col] + '</td>';
            } else if (items[rows][col] % 2 === 0) {
                strings += '<td class = "blue">' + items[rows][col] + '</td>';
            } else {

                strings += '<td>' + items[rows][col] + '</td>';
            }
            ttlaverage =+ items[rows][col];
            parseInt(ttlaverage);
        }
        
        
        strings += '</tr>';
        var average = ttlaverage / result;
    }
    strings += '</table>';
    div.innerHTML = strings;
    document.p.innerHTML = average;
}
;
button.addEventListener('click', createGrid);