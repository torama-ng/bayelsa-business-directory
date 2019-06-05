import { CategoryService } from './../../category.service';
import { Component } from '@angular/core';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-biz',
  templateUrl: './add-biz.component.html',
  styleUrls: ['./add-biz.component.css']
})


export class AddBizComponent  {
categories$;

  constructor(private categoryService: CategoryService, 
    private businessService: BusinessService,
    private router: Router) { 
      // The function for list the categories and it's tied to the categories service at ../../category.service.ts
    this.categories$ = categoryService.getCategories().valueChanges()
      // console.log(this.categories$)
  }
  
  save(business){
    //The function that saves the business on submit 
    this.businessService.create(business);
    // After submiting this function takes them to all the list of business
    this.router.navigate(['/businesses'])
  }

}
