import { Component } from '@angular/core';

@Component({
  selector: 'app-paintingcomponent',
  templateUrl: './paintingcomponent.component.html',
  styleUrl: './paintingcomponent.component.scss'
})
export class PaintingcomponentComponent {
  videos = [
    { name: 'Gopuram', url: 'https://www.instagram.com/reel/C-4IOeYtu5h/?igsh=MXNlMmJoY253NWkyZA==' },
    { name: 'babyKrishna', url: 'https://www.instagram.com/reel/C-4IOeYtu5h/?igsh=MXNlMmJoY253NWkyZA==' },
    { name: 'homeSweetHome', url: 'https://www.instagram.com/reel/C-4IOeYtu5h/?igsh=MXNlMmJoY253NWkyZA==' },
    { name: 'Budha', url: 'https://www.instagram.com/reel/C-4IOeYtu5h/?igsh=MXNlMmJoY253NWkyZA==' },
    { name: 'gitlWithGuitar', url: 'https://www.instagram.com/reel/C-4IOeYtu5h/?igsh=MXNlMmJoY253NWkyZA==' }
  ];
}
