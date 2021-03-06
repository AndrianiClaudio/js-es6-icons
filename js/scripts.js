const data = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: `${randomColorGenerator()}`
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: `${randomColorGenerator()}`
    }
];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1 - modificare la struttura dati fornita e valorizzare la propriet?? "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale ?? formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
function randomColorGenerator() {
    const arrayColor = [];
    for (let index = 0; index < 6; index++) {
        let element = getRndInteger(0,15);
        switch (element) {
            case 10:
                element = 'A';
                break;
            case 11:
                element = 'B';
                break;
            case 12:
                element = 'C';
                break;
            case 13:
                element = 'D';
                break;
            case 14:
                element = 'E';
                break;
            case 15:
                element = 'F';
                break;
            default:
                break;
        }  
        arrayColor.push(element);
    }
    let fullColor = '#';
    arrayColor.forEach(element => {
        fullColor += element
    });
    // console.log(fullColor);
    return fullColor;
}
//     Milestone 2
// Ciascuna icona ha una propriet?? "color": utilizzare questa propriet?? per visualizzare le icone del colore corrispondente.
function colorApply({color},boxNum) {
    const box = document.querySelector(`.box--${boxNum}`);
    const icon = box.querySelector('i');
    icon.style.color = color;
}
function createOptions(type,types) {
    const select = document.getElementById('select-type');
    types.push(type);
    const option = document.createElement('option');
    option.value = type;
    option.innerHTML = type;
    select.appendChild(option);
}
function displayNoneItem(displaynoneItem) {
    displaynoneItem.forEach(element => {
        element.classList.add('d-none');
    });
    container.style = 'align-content: flex-start;'; 
}
function resetDisplay() {
    let actualDnone = document.querySelectorAll('.d-none');
    actualDnone.forEach(element => {
        element.classList.remove('d-none');
    });
}
function getElementByTypes(target_value) {
    const boxes = [];
    //acquisisco tuti i box del mi container
    document.querySelectorAll('.box').forEach(element => {
        boxes.push(element);
    });
    return boxes.filter(element => {
        return element.classList[2] !=  `type--${target_value}`;
    });
}
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui ?? presente il nome dell'icona e l'icona stessa.

function init(container,data) {
    const types = [];
    data.forEach(({family,prefix,name,type}, index) => {
        const iconClass = `${family} ${prefix}${name}`;
        const template = `
        <div class = 'box box--${index} type--${type}'>
            <i class = '${iconClass}'></i>
            <span class='icon-name'>${name}</span>
        </div>`;
        container.innerHTML += template;
        // milestone 2
        colorApply(data[index],index);
        if (!types.includes(type)) {
            createOptions(type,types);
        }
    });
    const select = document.getElementById('select-type');
    //     Milestone 3
    // Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
    select.addEventListener ('change',function (event){
        resetDisplay();
        if (event.target.value != 'all') {
            const to_hide = getElementByTypes(event.target.value);
            displayNoneItem(to_hide);
        }
    });
}
// acquisisco container
const container = document.querySelector('.container');

//MILESTONE 1
init(container,data);




// BONUS
// 2 - popolare le options della select della milestone 3 dinamicamente.
// Consigli del giorno
// Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perci?? come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodich??, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come ?? formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina ?
//     Inizialmente pu?? essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.Solamente quando la parte logica ?? completa, ci dedichiamo al css.