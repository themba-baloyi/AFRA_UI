export class UsersModel {
    private _password: string;
    private _abnumber: string;
    private _accessKey: number;

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get abnumber(): string {
        return this._abnumber;
    }

    set abnumber(value: string) {
        this._abnumber = value;
    }

    get accessKey(): number {
        return this._accessKey;
    }

    set accessKey(value: number) {
        this._accessKey = value;
    }
}