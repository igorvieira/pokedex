export type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  color: string;
};
