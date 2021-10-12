import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaireService {
  public host:string="http://localhost:8080";
  public burl:string="http://localhost:8080/getpointageMens";
  constructor(private http:HttpClient) { }



  public getSalaires(){
    
    return this.http.get(this.host+"/salaires");
}

public getEmpById(id: number): Observable<any>{
  return this.http.get(`${this.burl}/${id}`);
}

public getSalairesByMois(des:string){
  return this.http.get(this.host+"/salaires/search/byMois?des="+des);
}
}
