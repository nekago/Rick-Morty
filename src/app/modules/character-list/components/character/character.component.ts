import { Component, Input } from '@angular/core';
import { Character } from '../../../../global/entities/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent {
  @Input() character!: Character;
}
