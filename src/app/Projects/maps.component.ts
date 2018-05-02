import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ProjectModel} from '../model/Projects/ProjectModel';
import {ProjectService} from '../services/Projects/ProjectService';
import {ModelBuilder} from './ModelBuilder';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';
declare var $: any;

//todo: filter values
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

/*const ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
    public proj: ProjectModel[] = [];
    projectBuilder: ModelBuilder = new ModelBuilder();
    public total: number;


    constructor(private projectService: ProjectService, public snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit() {
        this.initProjects();
    }

    public initProjects() {
        this.projectService.getAllProject().subscribe((projects) => {
            this.proj = projects;
        });

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        // this.proj.filter(filterValue);
    }

    update(id: string, projName: string, absaNavNum: string, absaInNum: string) {
        const dataModel = this.projectBuilder.buildProjectModel(id, projName, absaNavNum, absaInNum);
        this.projectService.updateProject(dataModel).subscribe((response) => {
            this.notification('Project has been deleted updated.', 'success');
        });

        //  this.initProjects();
    }

    deleteProject(id: string) {
        this.projectService.deleteProject(id).subscribe(data => {
            if (data.status === 200) {
                this.notification('Project has been deleted successfully.', 'success');

            } else if (data.status === 404) {
                this.notification('Project does not exist. Delete unsuccessful.', 'danger');
            } else {
                this.notification('Something went wrong with the system, please contact the administrator.', 'danger');
            }
        });
    }

    countProjects() {
        const total = this.proj.length;
        return total;
    }

    createProject(projName: string, projAcronym: string, absaNavNum: string, absaInNum: string) {

        if (projName === '' && projAcronym === '' && absaNavNum === '' && absaInNum === '') {
            this.notification('Error: Make sure all fields are filled', 'danger');
        } else {


            const dataModel = this.projectBuilder.buildProjectModel(projAcronym, projName, absaNavNum, absaInNum);
            this.projectService.createProject(dataModel).subscribe((response) => {
                if (response.status === 200) {
                    console.log(response);
                    const message = 'Project: ' + projName + ' (' + projAcronym + ') has been created.';
                    this.notification(message, 'success');
                } else if (response.status === 409) {
                    this.notification('The project acronym is taken, please enter a new project acronym', 'warning');
                } else {
                    console.log(response);
                    // this.notification('Something went wrong with the system, please contact the administrator.', 'danger');
                }
            });
        }
    }

    notification(message: string, alertType: string) {
        $.notify({
            icon: 'notifications',
            message: message

        }, {
            type: alertType,
            timer: 2000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });

        this.initProjects();
    }

}
