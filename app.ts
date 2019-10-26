const crw = require('console-read-write');

import {deputats} from './deputats';
import {fractionsList} from './fractions';
import {fractionPossibilities, VerkhovnaRadaPossibilities, deputatPossibilities} from './cases';

//main

async function main() {
    let doYouWantToContinue: string = '';

    do {
        console.log('1 - Verkhovna Rada');
        console.log('2 - Fractions');
        console.log('3 - Deputat');

        let chosenNumber: string = await crw.read();

        switch (chosenNumber) {
            case '1':
                await VerkhovnaRadaPossibilities(chosenNumber, fractionsList);

                break;
            case '2':
                let fractionName: string = '';

                console.log('Choose fraction(Left block, Right block)');

                fractionName = await crw.read();

                await fractionPossibilities(chosenNumber, fractionName, fractionsList);

                break;
            case '3':
                let deputatFirstName: string ='';
                let deputatLastName: string ='';

                console.log('Choose deputat, input his first and last names');

                deputatFirstName = await crw.read();
                deputatLastName = await crw.read();

                await deputatPossibilities(chosenNumber, deputatFirstName, deputatLastName, deputats);

                break;

            default:
                console.log('Invalid number');
        }

        console.log('Do you want to continue?');

        doYouWantToContinue = await crw.read();

    } while (doYouWantToContinue.toLowerCase() === 'yes');
}

main();