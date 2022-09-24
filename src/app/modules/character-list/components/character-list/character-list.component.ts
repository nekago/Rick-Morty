import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CharactersListData } from '../../../../global/entities/character-list-data.interface';
import { CharacterListService } from '../../services/character-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject<void>();
  currentPage!: number;

  characters$: Observable<CharactersListData> =
    new Observable<CharactersListData>();
  countCards!: number;

  constructor(
    private characterListService: CharacterListService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((params) => {
        this.currentPage = +params['page'] || 1;
        this.characters$ = this.characterListService.getCharacterList(params);
      });
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
