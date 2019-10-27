import {DeputatModel, FractionModel} from "./model";
import {deputats} from "./deputats";

//Right block creation

const rightBlockDeputats: DeputatModel[] = [];

rightBlockDeputats.push(deputats[1], deputats[2], deputats[3]);

const rightBlock: FractionModel = new FractionModel('Right block', rightBlockDeputats);

//Left block creation

const leftBlockDeputats: DeputatModel[] = [];

leftBlockDeputats.push(deputats[4], deputats[5], deputats[6]);

const leftBlock: FractionModel = new FractionModel('Left block', leftBlockDeputats);

// fractions list

export let fractionsList: FractionModel[] = [];

fractionsList.push(leftBlock, rightBlock);