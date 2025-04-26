import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlService } from '../../../core/services/graphql.service';
import { EpisodeResponse } from 'src/app/core/models/graphql/episode/episode-response.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EpisodeGraphqlService {
  constructor(private graphql: GraphqlService) {}

  getEpisodes(page: number = 1): Observable<any> {
    const query = `
      query ($page: Int!) {
        episodes(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            air_date
            episode
            characters {
              id
              name
            }
            created
          }
        }
      }
    `;
    return this.graphql.query<EpisodeResponse>(query, { page }).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
