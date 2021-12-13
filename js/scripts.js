const data = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];
//     Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
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
        const node = document.querySelectorAll(`.${displaynoneItem}`);
    node.forEach(element => {
        element.classList.add('d-none');
    });
}
function resetDisplay() {
    let actualDnone = document.querySelectorAll('.d-none');
    actualDnone.forEach(element => {
        element.classList.remove('d-none');
    });
}
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
function init(container,data) {
    const types = [];
    data.forEach(({family,prefix,name,type}, index) => {
        const iconClass = `${family} ${prefix}${name}`;
        const template = `<div class = 'box--${index} type--${type}'>${name} - <i class = '${iconClass}'></div>`;
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
    select.addEventListener ('change',function (){
        resetDisplay();
        const selected = this.value;
        let node;
        switch (selected) {
            case 'animal':
                displayNoneItem('type--vegetable');
                displayNoneItem('type--user');
                break;
                case 'vegetable':
                    displayNoneItem('type--animal');
                displayNoneItem('type--user');
                break;
                case 'user':
                displayNoneItem('type--vegetable');
                displayNoneItem('type--animal');
                break;
            default:
                console.log('default');
                break;
        }
        // for (let index = 0; index < del.length; index++) {
        //     const delItem = del[index];
        // }
    });
}
// acquisisco container
const container = document.querySelector('.container');

//MILESTONE 1
init(container,data);




// BONUS
// 1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2 - popolare le options della select della milestone 3 dinamicamente.
// Consigli del giorno
// Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina ?
//     Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.Solamente quando la parte logica è completa, ci dedichiamo al css.