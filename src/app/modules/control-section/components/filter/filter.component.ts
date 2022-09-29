import { Component } from '@angular/core';
import {
  CharacterFilter,
  CharacterGender,
  CharacterStatus,
} from '../../../../global/entities/character.interface';
import { CharacterListService } from '../../../character-list/services/character-list.service';
import { Router } from '@angular/router';
import { debounce } from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
})
export class FilterComponent {
  public statuses: CharacterStatus[] = ['Alive', 'Dead', 'unknown'];
  public genders: CharacterGender[] = [
    'Male',
    'Female',
    'Genderless',
    'unknown',
  ];

  public filterParams: CharacterFilter = FilterComponent.emptyFilterParams;

  private static get emptyFilterParams(): CharacterFilter {
    return {
      status: undefined,
      gender: undefined,
      name: undefined,
    };
  }

  constructor(
    private characterListService: CharacterListService,
    private readonly route: Router
  ) {}

  public selectQueryParams() {
    this.filterParams.name = this.filterParams.name || undefined;
    this.route.navigate(['/characters'], {
      queryParams: this.filterParams,
    });
  }

  public selectQueryParamsByName: CallableFunction = debounce(
    this.selectQueryParams,
    300
  );

  public resetQueryParams() {
    this.route.navigate(['/characters']);
    this.filterParams = FilterComponent.emptyFilterParams;
  }
}
