import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlService } from '../../../core/services/graphql.service';

@Injectable({
  providedIn: 'root',
})
export class LocationGraphqlService {
  constructor(private graphql: GraphqlService) {}

  getLocations(page: number = 1): Observable<any> {
    const query = `
      query ($page: Int!) {
        locations(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            type
            dimension
            residents {
              id
            }
            created
          }
        }
      }
    `;
    return this.graphql.query<any>(query, { page });
  }
}
