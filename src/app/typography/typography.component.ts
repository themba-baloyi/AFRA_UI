import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Element {
    name: string;
    abNumber: number;
    estCost: number;
    actCost: string;
    role: string;
    resourceType: string;
}

const ELEMENT_DATA: Element[] = [
    {abNumber: 1, name: 'Hydrogen', estCost: 1.0079, actCost: 'H', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 2, name: 'Helium', estCost: 4.0026, actCost: 'He', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 3, name: 'Lithium', estCost: 6.941, actCost: 'Li', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 4, name: 'Beryllium', estCost: 9.0122, actCost: 'Be', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 5, name: 'Boron', estCost: 10.811, actCost: 'B', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 6, name: 'Carbon', estCost: 12.0107, actCost: 'C', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 7, name: 'Nitrogen', estCost: 14.0067, actCost: 'N', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 8, name: 'Oxygen', estCost: 15.9994, actCost: 'O', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 9, name: 'Fluorine', estCost: 18.9984, actCost: 'F', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 10, name: 'Neon', estCost: 20.1797, actCost: 'Ne', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 11, name: 'Sodium', estCost: 22.9897, actCost: 'Na', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 12, name: 'Magnesium', estCost: 24.305, actCost: 'Mg', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 13, name: 'Aluminum', estCost: 26.9815, actCost: 'Al', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 14, name: 'Silicon', estCost: 28.0855, actCost: 'Si', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 15, name: 'Phosphorus', estCost: 30.9738, actCost: 'P', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 16, name: 'Sulfur', estCost: 32.065, actCost: 'S', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 17, name: 'Chlorine', estCost: 35.453, actCost: 'Cl', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 18, name: 'Argon', estCost: 39.948, actCost: 'Ar', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 19, name: 'Potassium', estCost: 39.0983, actCost: 'K', role: 'yolo', resourceType: 'Tester'},
    {abNumber: 20, name: 'Calcium', estCost: 40.078, actCost: 'Ca', role: 'yolo', resourceType: 'Tester'},
];
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
    displayedColumns = ['abNumber', 'name', 'estCost', 'actCost', 'role', 'resourceType', 'project', 'month', 'year', 'action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}
