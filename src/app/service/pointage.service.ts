import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  public baseURL:string="http://localhost:8080/listEmployes";
  public host:string="http://localhost:8080";
  public burl:string="http://localhost:8080/getpointageMens";
  public burl1:string="http://localhost:8080/getpointageMois";
  constructor(private http:HttpClient) { }



  public getPointage(){
    
    return this.http.get(this.host+"/pointages");
}

public getPointageByMois(des:string){
  return this.http.get(this.host+"/pointages/search/byMois?des="+des);
}

public getPointageByIdEmpl(id_empl:number){
  return this.http.get(this.host+"/pointages/search/byId?des="+id_empl);
}


/*public getEmpById(empl_id: number): Observable<any>{
  return this.http.get("http://localhost:8080/findemploye/"+empl_id)

}*/


public getEmpById(id: number): Observable<any>{
  return this.http.get(`${this.burl}/${id}`);
}

public getpointByMpois(mois:string): Observable<any>{
  return this.http.get(`${this.burl1}/${mois}`);
}
}
