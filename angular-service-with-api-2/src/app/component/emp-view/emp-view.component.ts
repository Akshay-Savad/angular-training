import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {
  employees: Employee[];
  employee:Employee;
  constructor(private employeeService: EmployeeService) {
    this.employee=new Employee();
    this.employeeService.GetAllEmployees().subscribe(response => {
      this.employees = response;
      console.log(this.employees);
    });
  }

  ngOnInit(): void {
  }
  AddEmployee() //AddEmployee
  {
    this.employeeService.AddEmployee(this.employee).subscribe(response=>{
      console.log(response)
      this.employee=new Employee();
      this.GetAll()
    },error=>console.log(error));
  }
  EditEmployee() //Edit Employee
  {
    this.employeeService.EditEmployee(this.employee).subscribe(response=>{
      console.log(response)

      this.GetAll()
    },error=>console.log(error));
  }
  Search() //Search Employee
  {
    let id=this.employee.employeeId;
    this.employeeService.GetEmployee(id).subscribe(response=>
      {
        this.employee=response;
        console.log(this.employee);
      })
  }
  Delete() //Delete Employee By Id
  {
    let id=this.employee.employeeId;
    this.employeeService.DeleteEmployee(id).subscribe(response=>
      {
        this.GetAll();
        console.log(this.employee);

      })
  }

  GetAll() //Get All Employees
  {
    this.employeeService.GetAllEmployees().subscribe(response => {
      this.employees = response;
      console.log(this.employees);
    });
  }

}
