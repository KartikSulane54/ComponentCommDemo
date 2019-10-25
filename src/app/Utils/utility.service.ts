import { Injectable } from '@angular/core';
import { Student } from '../Models/Student.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UtilityService {
  students: Student[];

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor() {
    this.students = new Array<Student>();
    this.students.push(new Student(1, 'Kartik', 'IT', '10-02-2019', 'PU', 'Male'));
    this.students.push(new Student(2, 'Kehsa', 'EC', '01-12-2011', 'EU', 'FeMale'));
    this.students.push(new Student(3, 'Ketki', 'IT', '21-08-2015', 'CU', 'FeMale'));
    this.students.push(new Student(4, 'Kiran', 'IT', '09-06-2018', 'BU', 'Male'));
  }

  changeMessage(msg: string) {
    this.messageSource.next(msg);
  }
}
