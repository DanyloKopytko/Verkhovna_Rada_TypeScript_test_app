import {FractionModel} from './Fraction.model';
import {DeputatModel} from "./Deputat.model";

export class VerkhovnaRadaModel {
    fractionsList: FractionModel[] = [];

    constructor(fractionsList: FractionModel[] = []) {
        this.fractionsList = fractionsList;
    }

    addFraction(fractionName: string, fractionsList: FractionModel[]): void {
        let fractionWasAdded: FractionModel | undefined = fractionsList.find((fraction) => {
            if (fractionName === fraction.fractionName) {
                this.fractionsList.push(fraction);

                return true;
            }
        });

        if (!fractionWasAdded) {
            console.log('No such fraction');
        }
    }

    deleteFraction(fractionName: string): void {
        let fractionWasDeleted: FractionModel | undefined = this.fractionsList.find((fraction: FractionModel, index: number) => {
            if (fractionName === fraction.fractionName) {
                this.fractionsList.splice(index, 1);

                return true;
            }
        });

        if (!fractionWasDeleted) {
            console.log('No such fraction');
        }
    }

    showAllFractions(): void {
        console.log(this.fractionsList);
    }

    showThisFraction(fractionName: string): void {
        let fractionToFound: FractionModel | undefined = this.fractionsList.find((fraction: FractionModel) => {
            if (fractionName === fraction.fractionName) {
                return fraction;
            }
        });

        if (!fractionToFound) {
            console.log('No such fraction');
        }

        console.log(fractionToFound);
    }

    addDeputatToFraction(fractionName: string, deputatFirstName: string, deputatLastName: string, deputats: DeputatModel[]): void {
        let deputatWasAdded: FractionModel | undefined = this.fractionsList.find((fraction: FractionModel) => {
            if (fractionName === fraction.fractionName) {
                fraction.addDeputat(deputatFirstName, deputatLastName, deputats);

                return true;
            }
        });

        if (!deputatWasAdded) {
            console.log('No such fraction');
        }
    }

    deleteDeputatFromFraction(fractionName: string, deputatFirstName: string, deputatLastName: string): void {
        let deputatWasDeleted: FractionModel | undefined = this.fractionsList.find((fraction: FractionModel) => {
            if (fractionName === fraction.fractionName) {
                fraction.deleteDeputat(deputatFirstName, deputatLastName);

                return true;
            }
        });

        if (!deputatWasDeleted) {
            console.log('No such fraction');
        }
    }

    showAllGraftersInThisFraction(fractionName: string): void {
        let fractionWasFound: FractionModel | undefined = this.fractionsList.find((fraction: FractionModel) => {
            if (fractionName === fraction.fractionName) {
                fraction.findAllGrafters();

                return true;
            }
        });

        if (!fractionWasFound) {
            console.log('No such fraction');
        }
    }

    showTheBiggestGrafterInThisFraction(fractionName: string): void {
        this.fractionsList.find((fraction: FractionModel) => {
            if (fractionName === fraction.fractionName) {
                fraction.showTheBiggestGrafter();
            }
        });
    }

    showTheBiggestGrafterInWholeRada(): void {
        let theBiggestGraftersFromEachFraction: DeputatModel[] = [];

        this.fractionsList.find((fraction: FractionModel) => {
            theBiggestGraftersFromEachFraction.push(fraction.showTheBiggestGrafter());
        });

        let theBiggestGrafterInWholeRada: DeputatModel = theBiggestGraftersFromEachFraction.reduce(
            (prev: DeputatModel, cur: DeputatModel) => (cur.stolenMoneys as number) > (prev.stolenMoneys as number) ? cur : prev
        );

        console.log(theBiggestGrafterInWholeRada);
    }

    showAllDeputatesInThisFraction(fractionName: string): void {
        this.fractionsList.forEach((fraction: FractionModel) => {
            if (fractionName === fraction.fractionName) {
                fraction.allDeputates();
            }
        });
    }

}