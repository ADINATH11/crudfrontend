import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  id:Number=this.activatedRoute.snapshot.params["id"];
  updateCustomerForm:FormGroup=new FormGroup({});
  constructor(private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private router:Router,
    private customerService:CustomerService){}
  ngOnInit(){
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]]
    });
    this.getCustomerById();
  }
  getCustomerById(){
    this.customerService.getCustomerById(this.id).subscribe(res=>{
      console.log(res);
    this.updateCustomerForm.patchValue(res);
    })
  }
  updateCustomer(){
    this.customerService.updateCustomer(this.id,this.updateCustomerForm.value).subscribe(res=>{
      console.log(res);
      if(res.id!=null){
        this.router.navigateByUrl("");
      }
    })
    }
}
