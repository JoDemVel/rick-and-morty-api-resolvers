import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from '../../../../core/models/location.model';
import { LocationGraphqlService } from '../../services/location-graphql.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  currentPage = 1;
  totalPages = 0;

  constructor(
    private locationService: LocationGraphqlService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.locationService
      .getLocations(this.currentPage)
      .subscribe((response) => {
        this.locations = response.locations.results;
        this.totalPages = response.locations.info.pages;
        this.cdr.markForCheck();
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadLocations();
  }
}
