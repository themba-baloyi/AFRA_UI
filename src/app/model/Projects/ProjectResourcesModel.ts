export class ProjectResourcesModel {
    private _rate: any;
    private _abNumber: string;

    get rate(): any {
        return this._rate;
    }

    set rate(value: any) {
        this._rate = value;
    }

    get abNumber(): string {
        return this._abNumber;
    }

    set abNumber(value: string) {
        this._abNumber = value;
    }

    get projectId(): string {
        return this._projectId;
    }

    set projectId(value: string) {
        this._projectId = value;
    }

    private _projectId: string;
}