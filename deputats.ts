import {DeputatModel} from "./model";

export let deputats: DeputatModel[] = [];

const deputat1: DeputatModel = new DeputatModel(78, 187, 'Petro', 'Poroh', 56, false, 0, 75);
const deputat2: DeputatModel = new DeputatModel(98, 177, 'Ivan', 'Ghuin', 64, true, 300);
const deputat3: DeputatModel = new DeputatModel(67, 183, 'Morozov', 'Yuriy', 39, false, 0, 90);
const deputat4: DeputatModel = new DeputatModel(99, 169, 'Sobolev', 'Zakhar', 48, true, 280);
const deputat5: DeputatModel = new DeputatModel(60, 154, 'Myasnikov', 'Grigoriy', 35, false, 0, 300);
const deputat6: DeputatModel = new DeputatModel(95, 199, 'Nedbaylo', 'Anastasia', 56, true, 290);
const deputat7: DeputatModel = new DeputatModel(74, 184, 'Smirnova', 'Nadezhda', 56, false, 30, 260);
const deputat8: DeputatModel = new DeputatModel(81, 179, 'Prutyla', 'Faina', 56, true, 60);
const deputat9: DeputatModel = new DeputatModel(59, 164, 'Pavlenko', 'Sophia', 56, false, 90, 130);
const deputat10: DeputatModel = new DeputatModel(67, 182, 'Maxym', 'Gonchar', 29, true, 300);
const deputat11: DeputatModel = new DeputatModel(91, 176, 'Andriy', 'Plotnik', 55, false, 0, 330);
const deputat12: DeputatModel = new DeputatModel(74, 185, 'Danylo', 'Lavan', 37, false, 0, 280);
const deputat13: DeputatModel = new DeputatModel(75, 175, 'Ruslan', 'Popovich', 33, true, 300);
const deputat14: DeputatModel = new DeputatModel(78, 165, 'Pavlo', 'Grafov', 39, true, 1189);
const deputat15: DeputatModel = new DeputatModel(69, 188, 'Kolya', 'Arzhakov', 45, false, 0, 130);

deputats.push(deputat1, deputat2, deputat3, deputat4, deputat5, deputat6, deputat7, deputat8, deputat9, deputat10, deputat11, deputat12, deputat13, deputat14, deputat15);