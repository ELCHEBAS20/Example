import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saluda',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderApp implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() { }

  public StorageAccion() {
    this.router.navigate(['/home']);
    localStorage.setItem('AppRol', '');
  }

}
