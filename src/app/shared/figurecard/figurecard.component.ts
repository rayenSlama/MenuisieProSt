import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figurecard',
  templateUrl: './figurecard.component.html',
  styleUrls: ['./figurecard.component.css']
})
export class FigurecardComponent implements OnInit {

  @Input() headerIcon: string | undefined;
  @Input() category: string | undefined;
  @Input() title: string | undefined;
  @Input() footerIcon : string | undefined;
  @Input() footContent: string| undefined;
  @Input() linearColor: string | undefined;
  @Input() boxShadow: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
