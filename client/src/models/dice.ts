import { v4 as uuidv4 } from 'uuid';

export class Dice {
    key: string;
    imageUrl: string;

    constructor(imageUrl: string) {
        this.key = uuidv4();
        this.imageUrl = imageUrl;
    }
}