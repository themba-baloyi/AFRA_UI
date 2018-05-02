export class SuppliersModel {
    private _suppId: string;
    private _name: string;
    private _managerAB: string;

    get suppId(): string {
        return this._suppId;
    }

    set suppId(value: string) {
        this._suppId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get managerAB(): string {
        return this._managerAB;
    }

    set managerAB(value: string) {
        this._managerAB = value;
    }
}