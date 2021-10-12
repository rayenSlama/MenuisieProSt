import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conges } from '../Model/Conges';

const baseUrl = 'http://localhost:8080/conge';
const baseUrladd = 'http://localhost:8080/addConge';
const baseUrlget = 'http://localhost:8080/getConge';
const baseUrldell = 'http://localhost:8080/delete';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

    public host:string="http://localhost:8080"
    public dataForm:  FormGroup | undefined;
  
    constructor(private http:HttpClient) { }


    public getConge(){
        return this.http.get(this.host+"/conges");
    }
    
public gettConge(){
  return this.http.get(this.host+"/getConge");
}

   /* public delete(url: string){
        return this.http.delete(url);
      }*/
      public delete(id:number):Observable<Conges>{
        return this.http.delete<Conges>(`${baseUrldell}/${id}`);
      }
  
   /* public saveData (data: any):Observable<any>{
      /*  return this.http.post<Conges>(url,data);*/
    /*  return this.http.post(`${this.host+"/addConge"}`, data);
      }*/


     public saveData(id: number,data:any):Observable<any>{
        return this.http.put(`${baseUrladd}/${id}`, data);

      }
   /*   public saveData (url : string,data: any):Observable<any>{
        return this.http.put(url,data);
      }*/

}