import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent implements OnInit {
  id!: number;
  constructor( private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

}
