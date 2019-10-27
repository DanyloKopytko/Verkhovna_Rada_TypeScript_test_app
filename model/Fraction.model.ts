import {DeputatModel} from './Deputat.model';

export class FractionModel {
    fractionName: string = '';
    deputatsList: DeputatModel[] = [];

    constructor(fractionName: string, deputatsList: DeputatModel[]) {
        this.fractionName = fractionName;
        this.deputatsList = deputatsList;
    }

    addDeputat(deputatFirstName: string, deputatLastName: string, deputats: DeputatModel[]): DeputatModel | undefined {
        const deputatWasAdded: DeputatModel | undefined = deputats.find((deputat: DeputatModel) => {
            if (deputat.firstname === deputatFirstName && deputat.lastname === deputatLastName) {
                this.deputatsList.push(deputat);

                return true;
            }
        });

        if (!deputatWasAdded) {
            console.log('No such deputat');
        }

        return deputatWasAdded;
    }

    deleteDeputat(deputatFirstName: string, deputatLastName: string): DeputatModel | undefined {
        const deputatWasDeleted: DeputatModel | undefined = this.deputatsList.find((deputat: DeputatModel, index: number) => {
            if (deputat.firstname === deputatFirstName && deputat.lastname === deputatLastName) {
                this.deputatsList.splice(index, 1);

                return true;
            }
        });

        if (!deputatWasDeleted) {
            console.log('No such deputat');
        }

        return deputatWasDeleted;
    }

    deleteAllGrafters(): void {
        this.deputatsList.forEach((deputat: DeputatModel, index: number) => {
            if (deputat.grafter) {
                delete this.deputatsList[index];
            }
        });
    }

    findAllGrafters(): void {
        const grafters: DeputatModel[] = [];

        this.deputatsList.find((deputat: DeputatModel) => {
            if (deputat.grafter) {
                grafters.push(deputat);
            }
        });

        if (!grafters) {
            console.log('No grafters? Wow, Ukraine great again!');
        } else {
            console.log(grafters);
        }
    }

    showTheBiggestGrafter(): DeputatModel {
        const theBiggestGrafter: DeputatModel = this.deputatsList.reduce((prev: DeputatModel, cur: DeputatModel) => (cur.stolenMoneys as number) > (prev.stolenMoneys as number) ? cur : prev);

        console.log(theBiggestGrafter);

        return theBiggestGrafter;
    }

    allDeputates(): void {
        console.log(this.deputatsList);
    }

    deleteAllDeputates(): void {
        this.deputatsList.splice(0, this.deputatsList.length);
    }

    sumOfStolenMoneys(): void {
        let sum: number = 0;

        this.deputatsList.forEach((deputat: DeputatModel) => {
            sum += (deputat.stolenMoneys as number);
        });

        console.log(sum);
    }
}