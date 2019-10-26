import {HumanModel} from './Human.model'

export class DeputatModel extends HumanModel {
    firstname: string;
    lastname: string;
    age: number;
    grafter?: boolean;
    graftAmountToAgreed?: number;
    stolenMoneys?: number;

    constructor(weight: number, height: number, firstname: string, lastname: string, age: number, grafter: boolean, stolenMoneys?: number, graftAmountToAgreed?: number) {
        super(weight, height);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.grafter = grafter;
        this.stolenMoneys = stolenMoneys || 0;
        this.graftAmountToAgreed = graftAmountToAgreed || 0;
    }

    tryToDoGraft(graftAmount: number): boolean {
        if (this.grafter === false && (graftAmount as number) >= (this.graftAmountToAgreed as number)) {
            this.grafter = true;
            this.graftAmountToAgreed = 0;

            (this.stolenMoneys as number) += +graftAmount;

            console.log(this.stolenMoneys);

            return true;
        } else if (this.grafter){
            (this.stolenMoneys as number) += +graftAmount;

            console.log(this.stolenMoneys);

            return true;
        } else {
            console.log('You can\'t but this deputat');

            return false;
        }
    }


}