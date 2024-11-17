import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  categories: any[] = [];
  regForm: FormGroup;
  public isLoading = false;

  constructor(private http:HttpClient, private route:Router) {
    this.regForm  = new FormGroup({
      category:new FormControl(null,Validators.required),
    })
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (!jwtToken){
      window.alert("You can't Access this!")
      this.route.navigate(['/login'])
    }
    }
    ngOnInit() {
      this.fetchCategories();
    }
    fetchCategories() {
      this.isLoading = true;
      this.http.get<any[]>('http://localhost:5100/getAllCatogory').subscribe(
        categories => {
          this.categories = categories;
          this.isLoading = false;
        },
        error => {
          console.error(error);
          this.isLoading = false;
        }
      );
    }

    onSubmit(details={category:String}): void {
    this.isLoading = true;
    this.http.post('http://localhost:5100/add-category',details).subscribe((response) => {
      window.alert("Category Added Successfully!")
      this.regForm.reset();
      this.isLoading = false;
      this.fetchCategories();
    })
  }
}