import {Component, OnInit, ViewChild} from '@angular/core';
import {ResourceModel} from '../model/Resources/ResourceModel';
import {ResourceService} from '../services/Resources/ResourceService';
import {ModelBuilder} from './ModelBuilder';
import {SupplierService} from '../services/suppliers/SupplierService';
import {Router} from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.css']
})

export class IconsComponent implements OnInit {
    public resources: ResourceModel[] = [];
    resourceBuilder: ModelBuilder = new ModelBuilder();
    resourceModel: ResourceModel = new ResourceModel();

    constructor(private  service: ResourceService, private router: Router, private supplier: SupplierService) {

    }

    ngOnInit() {
        this.initResources();
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      //  this.dataSource.filter = filterValue;
    }

    public initResources() {
        this.service.getAllResources().subscribe((response) => {
           this.resources = response;
        });
    }

    createResource (id: string, fname: string, lname: string, email: string, type: string, role: string, supplierId: string) {
        if (id !== '' && fname !== '' && lname !== '' && email !== '' && type !== '' && role !== '' && supplierId !== '') {
            const data = this.resourceBuilder.build(id, fname, lname, type, role, email, supplierId);
            this.service.createResource(data).subscribe((response) => {

                if ( response.status === 200) {
                    console.log(response);
                    this.notification('New resource has been create', 'success');
                } else if (response.status === 409) {
                    window.location.reload();
                    this.notification('AB number is already allocated to another resource, Record not saved.', 'danger');
                }

            });
        } else {
            this.notification('Error Creating Resources, fill in the missing fields', 'danger');
        }


    }

    /*supplierById( supplierId: string) {
      //  this.supplierService.getSupplierById(supplierId).subscr
    }*/

    updateResource (id: string, fname: string, lname: string, email: string, type: string, role: string, supplierId: string) {
        const data = this.resourceBuilder.build(id, fname, lname, type, role, email, supplierId);
        this.service.updateResource(data).subscribe((response) => {
            if (response === 200) {
                this.notification('Resource updated successfully.', 'success');
                this.initResources();
            } else {
                this.notification('Resource not updated, make sure all fields are filled.', 'danger');
                this.initResources();
            }
        //    console.log(response.status);

        });
    }

    deleteResource(id: string) {
        this.service.deleteResource(id).subscribe( (response) => {
            if ( response.status === 200) {
                this.notification('Resource deleted successfully', 'success');
            } else if (response.status === 404) {
                this.notification('Resource does not exist, please refresh the page and try to delete again.', 'danger');
            } else {
                this.notification('Internal error. Record not deleted', 'danger');
            }
        });
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

        this.initResources();
    }



}
