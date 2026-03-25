import { Component, signal } from '@angular/core';
import { EmployeesComponent } from './employees/employees';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeesComponent],
  template: `<app-employees></app-employees>`
})
export class AppComponent {
  title = signal('employee-app');
}