import { Component } from '@angular/core';

@Component({
  selector: 'app-paintingcomponent',
  templateUrl: './paintingcomponent.component.html',
  styleUrl: './paintingcomponent.component.scss'
})
export class PaintingcomponentComponent {
  videos = [
    { name: 'Gopuram', url: 'https://www.youtube.com/embed/1Kx1WZsXcVA' },
    { name: 'babyKrishna', url: 'https://www.youtube.com/embed/mBm_CE_V48w' },
    { name: 'homeSweetHome', url: 'https://www.youtube.com/embed/EFYjA9snZBI' },
    { name: 'Budha', url: 'https://www.youtube.com/embed/_cxpbcyLQ-I' },
   // { name: 'gitlWithGuitar', url: 'https://www.instagram.com/reel/C-4IOeYtu5h/?igsh=MXNlMmJoY253NWkyZA==' }
  ];
}
