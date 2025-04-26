import { Info } from "../info.model";
import { Episode } from "./episode.model";

export interface EpisodeResponse {
  info: Info;
  results: Episode[];
}
