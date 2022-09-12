export interface Character {
  readonly id: number,
  readonly name: string,
  readonly status: CharacterStatus,
  readonly species: string,
  readonly gender: CharacterGender
  readonly image: string
}

export interface CharacterParams {
  readonly id?: number,
  readonly name?: string,
  readonly status?: CharacterStatus,
  readonly species?: string,
  readonly gender?: CharacterGender
}


export type CharacterStatus = 'Alive' | 'Dead' | 'unknown'
export type CharacterGender = 'Male' | 'Female' | 'Genderless' | 'unknown'
