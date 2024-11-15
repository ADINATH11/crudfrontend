import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  postCustomer(customer:any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/customer", customer);
  }
  getAllCustomer():Observable<any>{
    return this.http.get(BASIC_URL+"/api/customers");
  }
  getCustomerById(id:Number):Observable<any>{
    return this.http.get(BASIC_URL+"/api/customer/"+id);
  }
  updateCustomer(id:Number,customer:any):Observable<any>{
    return this.http.put(BASIC_URL+"/api/customer/"+id,customer);
  }
  deleteCustomer(id:Number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api/customer/"+id);
  }
}