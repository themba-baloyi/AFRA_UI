export class SupplierProjectModel {
    private _estCost: any;
    private _actCost: any;
    private _supplierId: string;
    private _projectId: string;


    get estCost(): any {
        return this._estCost;
    }

    set estCost(value: any) {
        this._estCost = value;
    }

    get actCost(): any {
        return this._actCost;
    }

    set actCost(value: any) {
        this._actCost = value;
    }

    get supplierId(): string {
        return this._supplierId;
    }

    set supplierId(value: string) {
        this._supplierId = value;
    }

    get projectId(): string {
        return this._projectId;
    }

    set projectId(value: string) {
        this._projectId = value;
    }
}