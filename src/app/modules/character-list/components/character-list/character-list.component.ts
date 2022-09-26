import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
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
  countCards!: number;
  isLoading: boolean = false;

  characters$: Observable<CharactersListData> =
    new Observable<CharactersListData>();

  constructor(
    private characterListService: CharacterListService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((params) => {
        this.currentPage = +params['page'] || 1;
        this.isLoading = true;
        this.characters$ = this.characterListService
          .getCharacterList(params)
          .pipe(tap(() => (this.isLoading = false)));
      });
    this.characters$.pipe(takeUntil(this.ngDestroy$)).subscribe((data) => {
      this.countCards = data.info.count;
    });
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
