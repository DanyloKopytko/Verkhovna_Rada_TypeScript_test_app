const crw = require('console-read-write');

import {FractionModel} from '../model';
import {deputats} from '../deputats'

export async function fractionPossibilities(chosenNumber: string, fractionName: string, fractionsList: FractionModel[]) {
    let currentFraction: FractionModel | undefined;

    fractionsList.find((fraction: FractionModel) => {
        if (fractionName === fraction.fractionName) {
            currentFraction = fraction;
        }
    });

    if(!currentFraction) {
        console.log('No such fraction');

        return 0;
    }

    console.log('1 - add deputat');
    console.log('2 - show all deputats');
    console.log('3 - show the biggest grafter in this fraction');

    chosenNumber = await crw.read();

    switch (chosenNumber) {
        case '1':
            console.log('Pls, input deputat first and last names');

            let deputatFirstName: string = '';
            let deputatLastName: string = '';

            deputatFirstName = await crw.read();
            deputatLastName = await crw.read();

            currentFraction.addDeputat(deputatFirstName, deputatLastName, deputats);

            console.log(currentFraction);

            break;
        case '2':
            currentFraction.allDeputates();

            break;
        case '3':
            currentFraction.showTheBiggestGrafter();

            break;

        default:
            console.log('Invalid number');
    }
}