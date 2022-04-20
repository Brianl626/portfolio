import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate([''], {fragment: 'home'});
  }

  goAbout() {
    this.router.navigate([''], { fragment: 'about' });
  }

  goSkill() {
    this.router.navigate([''], { fragment: 'skills' });
  }

  goProject() {
    this.router.navigate([''], { fragment: 'projects' })
  }

}
