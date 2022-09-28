import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Character } from '../../../global/entities/character.interface';
import { CharacterDetailService } from '../services/character-detail.service';

import {
  faGhost,
  faHeart,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-character-details',
  templateUrl: 'character-detail.component.html',
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject<void>();
  public character$: Observable<Character> = new Observable<Character>();
  public isLoading: boolean = false;

  faHeart = faHeart;
  faVenusMars = faVenusMars;
  faGhost = faGhost;

  constructor(
    private characterDetailService: CharacterDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((params) => {
        this.isLoading = true;
        this.character$ = this.characterDetailService
          .getCharacterById(params['id'])
          .pipe(tap(() => (this.isLoading = false)));
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
