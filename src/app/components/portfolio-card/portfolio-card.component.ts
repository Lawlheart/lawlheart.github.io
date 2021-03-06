import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  @Input() project: Project;
  @Output() skillFilterEvent = new EventEmitter();
  limitNum = 8;

  constructor() { }

  ngOnInit(): void {
  }

  link(linkurl): void {
    window.open(linkurl);
  }

  showMore(): void {
    this.limitNum = this.limitNum === 8 ? 20 : 8;
  }

  skillFilter(skill): void {
    this.skillFilterEvent.emit(skill);
  }

}
