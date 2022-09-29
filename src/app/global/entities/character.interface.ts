export interface Character {
  readonly id: number;
  readonly name: string;
  readonly status: CharacterStatus;
  readonly species: string;
  readonly gender: CharacterGender;
  readonly image: string;
}

export interface CharacterParams {
  readonly page?: number;
  readonly name?: string;
  readonly status?: CharacterStatus;
  readonly species?: string;
  readonly gender?: CharacterGender;
}

export interface CharacterFilter {
  name: string | undefined;
  gender: CharacterGender | undefined;
  status: CharacterStatus | undefined;
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Male' | 'Female' | 'Genderless' | 'unknown';
