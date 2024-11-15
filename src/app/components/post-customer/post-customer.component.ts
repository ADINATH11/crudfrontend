import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {

  postCustomerForm:FormGroup= new FormGroup({});

  constructor(private customerService:CustomerService,
    private fb:FormBuilder,
    private route:Router
  ){}

  ngOnInit(){
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]]
    });
  }
  
  postCustomer(){
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
      console.log(res);
      this.route.navigateByUrl('');
    })
  }
}
