export interface IAbilityResponse {
  effect_changes: any[];
  effect_entries: ({ effect: string; language: any })[];
  flavor_text_entries: any[];
  generation: any;
  id: number;
  is_main_series: boolean;
  name: string;
  names: any[];
  pokemon: any[];
}

export interface IAllPokemonReponse {
  count: number;
  next: any;
  previous: any;
  results: ({ name: string; url: string })[];
}

export interface IPokemonItem {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  name: string;
  sprite: string;
  weight: number;
  abilities: ({
    visible: boolean;
    name: string;
    url: string;
    details: string;
  })[];
}

export interface IDetailedPokemonResponse {
  abilities: ({
    is_hidden: boolean;
    ability: {
      name: string;
      url: string;
    };
  })[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
  };
  stats: any[];
  types: any[];
  weight: number;
}
