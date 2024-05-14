'use strict';

let utenti = [
    {
        name: 'Wayne Barnett',
        role: 'Chief Editor',
        image: 'wayne - barnett - founder - ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela - caroll - chief - editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter - gordon - office - manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela - lopez - social - media - manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott - estrada - developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara - ramos - graphic - designer.jpg',

    }];

let utentiarray = [utenti];
let table = document.getElementById('table')
const elementTableTR = document.createElement('tr')

for (let index = 0; index < utenti.length; index++) {

    for (let i2 = 0; i2 < 3; i2++) {
        const elementTableTD = document.createElement('td')
        table.append(elementTableTD)

        for (let i = 0; i < 3; i++) {
            elementTableTD.append(elementTableTR)
            elementTableTR.append('i')
        }
    }
    const utentiobj = (utenti[index])


    elementTableTR.append(utenti)
    console.log(utentiobj.name)

}


