const crw = require('console-read-write');

import {DeputatModel} from '../model'

export async function deputatPossibilities(chosenNumber: string, deputatfirstName: string, deputatLastName: string, deputats: DeputatModel[]) {
    let deputat: DeputatModel | undefined = deputats.find((deputat) => {
        if (deputatfirstName === deputat.firstname && deputatLastName === deputat.lastname) {
            return deputat;
        }
    });

    if (!deputat) {
        console.log('No such deputat');

        return 0;
    }

    console.log('1 - You can try to buy deputat, if you have enough moneys...');

    chosenNumber = await crw.read();

    switch (chosenNumber) {
        case '1':
            let moneys: number = await crw.read();

            deputat.tryToDoGraft(moneys);

            break;

        default:
            console.log('Invalid number');
    }
}