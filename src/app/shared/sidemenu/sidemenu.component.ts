import { Component } from '@angular/core';

interface MenuItem{
  text: string;
  path: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      path: './template/basicos'
    },
    {
      text: 'Dinámicos',
      path: './template/dinamicos'
    },
    {
      text: 'Switches',
      path: './template/switches'
    },
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      path: './reactive/basicos'
    },
    {
      text: 'Dinámicos',
      path: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      path: './reactive/switches'
    },
  ]



}
