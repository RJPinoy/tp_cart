import { Storable } from "../interfaces/Storable";

export class Cart {
    constructor(private storage: Storable) {

    }

    showLists() {
        return this.storage.store();
    }

    showDetails(): string {
        return `Vous avez un total de courses de : ${this.storage.total()} €`;
    }
}