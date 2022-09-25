import { Component } from '@angular/core';
import {
  CharacterGender,
  CharacterStatus,
} from '../../../../global/entities/character.interface';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
})
export class FilterComponent {
  selectedStatus!: string;
  selectedGender!: string;

  status: CharacterStatus[] = ['Alive', 'Dead', 'unknown'];
  gender: CharacterGender[] = ['Male', 'Female', 'Genderless', 'unknown'];
}
