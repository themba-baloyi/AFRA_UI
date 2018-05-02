import {ProjectModel} from '../model/Projects/ProjectModel';

export class ModelBuilder {
    projectModel: ProjectModel = new ProjectModel();

    public buildProjectModel(projId: string, projName: string, absaNavNum: string, absaInNum: string) {
        this.projectModel.id = projId;
        this.projectModel.name = projName;
        this.projectModel.absaNavNum = absaNavNum;
        this.projectModel.absaInNum = absaInNum;

        return this.projectModel;
    }


}