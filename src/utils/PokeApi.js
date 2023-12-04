export const getAllPokemon = () => {
  const pokeApi = fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
  return pokeApi;
};
