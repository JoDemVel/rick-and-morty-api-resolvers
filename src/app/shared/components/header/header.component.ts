import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navLinks = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/characters', label: 'Characters', icon: 'people' },
    { path: '/locations', label: 'Locations', icon: 'place' },
    { path: '/episodes', label: 'Episodes', icon: 'movie' }
  ];
}
