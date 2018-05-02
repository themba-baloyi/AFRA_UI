import {ResourceModel} from '../model/Resources/ResourceModel';

export class ModelBuilder {
    resourceModel: ResourceModel = new ResourceModel();

    build(abNum: string, fname: string, lname: string, type: string, role: string, email: string, supplierFk: string) {
        this.resourceModel.id = abNum;
        this.resourceModel.fname = fname;
        this.resourceModel.lname = lname;
        this.resourceModel.type = type;
        this.resourceModel.role = role;
        this.resourceModel.email = email;
        this.resourceModel.supplierFk = supplierFk;

        return this.resourceModel;
    }
}