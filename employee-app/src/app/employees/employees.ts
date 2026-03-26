import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './employees.html' 
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  newEmployee = { name: '', email: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().subscribe((data: any) => {
      this.employees = data;
    });
  }

  addEmployee() {
    this.employeeService.create(this.newEmployee).subscribe(() => {
      this.getEmployees();
      this.newEmployee = { name: '', email: '' };
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.delete(id).subscribe(() => {
      this.getEmployees();
    });
  }
}