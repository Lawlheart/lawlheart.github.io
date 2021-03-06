import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navLinks = [
    { label: 'PORTFOLIO', link: ''},
    { label: 'ALGORITHMS', link: 'algorithms'},
    { label: 'ARTICLES', link: 'articles'},
    { label: 'ABOUT', link: 'about'}
  ];
  urlLinks: string[] = this.navLinks.map(nav => `/${nav.link}`);
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getRoute(): number {
    return this.urlLinks.indexOf(this.router.url);
  }

  navigate(e): void {
    const url = this.navLinks[e.index].link;
    this.router.navigate([url]);
  }

}
