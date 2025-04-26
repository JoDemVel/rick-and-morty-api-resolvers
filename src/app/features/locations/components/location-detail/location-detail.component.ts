import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../../core/models/location.model';
import { Character } from '../../../../core/models/character.model';
import { LocationService } from '../../services/location.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationDetailComponent implements OnInit {
  location!: Location;
  residents: Character[] = [];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.location = this.route.snapshot.data.location;
    this.loadResidents();
  }

  loadResidents(): void {
    if (this.location && this.location.residents && this.location.residents.length > 0) {
      const residentRequests: Observable<Character>[] = [];

      this.location.residents.forEach(residentUrl => {
        residentRequests.push(this.locationService.getCharacterByUrl(residentUrl));
      });

      forkJoin(residentRequests).subscribe(characters => {
        this.residents = characters;
        this.cdr.markForCheck();
      });
    }
  }
}
