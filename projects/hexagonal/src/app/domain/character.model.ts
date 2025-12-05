export interface Character {
  id: string,
  name: string,
  status: string,
  species: string,
  gender: string,
  origin: CharacterOrigin,
  image: string,
  episode: string[],
  url: string,
  created: string
}

export interface CharacterOrigin {
  name: string;
  url: string;
}



export interface CharacterResponse {
  info:    Info;
  results: CharacterDto[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface CharacterDto {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

