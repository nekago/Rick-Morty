import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subject, takeUntil } from 'rxjs';
import { CharactersListData } from '../../../../global/entities/character-list-data.interface';
import { CharacterListService } from '../../services/character-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject<void>();
  public currentPage!: number;
  public isLoading: boolean = false;
  public characterListData: CharactersListData | null = null;
  public characterListError: any | null = null;

  public characters$: Observable<CharactersListData> =
    new Observable<CharactersListData>();

  constructor(
    private characterListService: CharacterListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(async (params) => {
        this.currentPage = +params['page'] || 1;
        this.isLoading = true;
        await this.getCharacterList(params);
      });
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  public async getCharacterList(params: Params) {
    try {
      this.characterListData = await lastValueFrom(
        this.characterListService.getCharacterList(params)
      );
      this.characterListError = null;
      this.characterListService.setLastCharacterId =
        this.characterListData.info.count;
    } catch (e) {
      this.characterListData = null;
      this.characterListError = e;
    } finally {
      this.isLoading = false;
    }
  }
}
