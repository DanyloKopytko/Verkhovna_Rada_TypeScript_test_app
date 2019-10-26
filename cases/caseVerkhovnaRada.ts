const crw = require('console-read-write');

import {FractionModel, VerkhovnaRadaModel} from '../model';

//Verkhovna Rada creation

let VerkhovnaRada: VerkhovnaRadaModel = new VerkhovnaRadaModel([]);

export async function VerkhovnaRadaPossibilities(chosenNumber: string, fractionsList: FractionModel[]) {
    console.log('1 - add fraction');
    console.log('2 - show all fractions');
    console.log('3 - show the biggest grafter in whole Rada');
    // console.log('4 - show chosen fraction');
    // console.log('5 - add deputat to fraction');
    // console.log('6 - delete deputat from fraction');
    // console.log('7 - show all grafters in chosen fraction');
    // console.log('8 - show the biggest grafter in chosen fraction');
    // console.log('9 - delete fractions ');
    // console.log('10 - show all deputates in chosen fraction');

    chosenNumber = await crw.read();

    let fractionName: string = '';

    switch (chosenNumber) {
        case '1':
            console.log('Input fraction name (Left block, Right block)');

            fractionName = await crw.read();

            VerkhovnaRada.addFraction(fractionName, fractionsList);
            break;
        case '2':
            VerkhovnaRada.showAllFractions();
            break;
        case '3':
            VerkhovnaRada.showTheBiggestGrafterInWholeRada();
            break;

        default:
            console.log('Invalid number');
    }
}