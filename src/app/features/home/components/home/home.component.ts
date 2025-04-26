import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  features = [
    {
      title: 'Characters',
      description: 'Explore all the characters from the Rick and Morty universe',
      icon: 'people',
      route: '/characters'
    },
    {
      title: 'Locations',
      description: 'Discover the various locations from the show',
      icon: 'place',
      route: '/locations'
    },
    {
      title: 'Episodes',
      description: 'Browse all episodes from the series',
      icon: 'movie',
      route: '/episodes'
    }
  ];
}
