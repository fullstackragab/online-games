import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http.get<Game[]>('assets/data/games.json').pipe(map((games: Game[]) => games.filter(game => game.thumb != null)));
  }
}
