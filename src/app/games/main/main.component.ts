import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe((games) => (this.games = games));
  }
}
