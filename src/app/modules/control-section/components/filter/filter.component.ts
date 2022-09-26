import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CharacterFilter,
  CharacterGender,
  CharacterStatus,
  FilterField,
} from '../../../../global/entities/character.interface';
import { Observable, Subject } from 'rxjs';
import { CharacterListService } from '../../../character-list/services/character-list.service';
import { Router } from '@angular/router';
import { CharactersListData } from '../../../../global/entities/character-list-data.interface';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject<void>();
  characters$: Observable<CharactersListData> =
    new Observable<CharactersListData>();

  selectedStatus!: string;
  selectedGender!: string;
  findName!: string;
  findStatus!: string;
  findGender!: string;
  searchName!: string;
  filterParams: CharacterFilter = {
    status: undefined,
    gender: undefined,
    name: undefined,
  };

  statuses: CharacterStatus[] = ['Alive', 'Dead', 'unknown'];
  genders: CharacterGender[] = ['Male', 'Female', 'Genderless', 'unknown'];

  constructor(
    private characterListService: CharacterListService,
    private readonly route: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  selectQueryParams(key: FilterField) {
    this.filterParams.name = this.filterParams.name || undefined;
    this.route.navigate(['/characters'], {
      queryParams: this.filterParams,
    });
  }
}
