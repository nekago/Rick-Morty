import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterListService } from '../../../character-list/services/character-list.service';

@Component({
  selector: 'app-character-details-control',
  templateUrl: 'character-details-control.component.html',
})
export class CharacterDetailsControlComponent implements OnInit {
  currentId!: number;
  lastId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterListService: CharacterListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentId = +params['id'];
      this.lastId = this.characterListService.getLastCharacterId;
    });
  }

  public nextCharacter(): void {
    this.router.navigate([`characters/${this.currentId + 1}`]);
  }

  public prevCharacter(): void {
    this.router.navigate([`characters/${this.currentId - 1}`]);
  }
}
