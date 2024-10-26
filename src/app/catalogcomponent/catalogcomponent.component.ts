import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-catalogcomponent',
  templateUrl: './catalogcomponent.component.html',
  styleUrl: './catalogcomponent.component.scss'
})
export class CatalogcomponentComponent {
  images = [
    { name: 'Gopuram', url: 'Budha.png' },
    { name: 'babyKrishna', url: 'babyKrishna.png' },
    { name: 'homeSweetHome', url: 'homeSweetHome.png' },
    { name: 'Budha', url: 'Budha.png' },
    { name: 'girlWithGuitar', url: 'girlAndGuitar.png' }
  ];
}
