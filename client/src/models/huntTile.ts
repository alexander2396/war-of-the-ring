import { v4 as uuidv4 } from 'uuid';

export class HuntTile {
    key: string;
    imageUrl: string;

    constructor(fileName) {
        this.key = uuidv4();
        this.imageUrl = 'images/hunt/' + fileName;
    }
}