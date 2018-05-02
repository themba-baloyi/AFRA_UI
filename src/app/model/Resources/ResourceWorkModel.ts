export class ResourceWorkModel {
    private _month: string;
    private _hours: any;
    private _year: number;
    private _confirmation: string;
    private _abNumber: string;
    private _projectId: string;


    get month(): string {
        return this._month;
    }

    set month(value: string) {
        this._month = value;
    }

    get hours(): any {
        return this._hours;
    }

    set hours(value: any) {
        this._hours = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    get confirmation(): string {
        return this._confirmation;
    }

    set confirmation(value: string) {
        this._confirmation = value;
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
}