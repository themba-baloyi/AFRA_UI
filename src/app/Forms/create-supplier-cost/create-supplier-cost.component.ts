import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-supplier-cost',
  templateUrl: './create-supplier-cost.component.html',
  styleUrls: ['./create-supplier-cost.component.scss']
})
export class CreateSupplierCostComponent implements OnInit {

    animal: string;
    name: string;

  constructor( public dialog: MatDialog) { }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

  ngOnInit() {
  }

}

export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
