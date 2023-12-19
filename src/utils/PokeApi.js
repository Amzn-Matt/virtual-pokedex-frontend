// import { useEffect } from "react";

// export async function getAllPokemon(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// export async function getPokemon(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// export async function getPokemonSpecies(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// export async function getPokemonStats(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// export async function getGlobalPokemon(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// export async function getGlobalPokemonStats(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// export const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Error: ${res.status}`);
// };

// export const request = (url, options) => {
//   return fetch(url, options).then(checkResponse);
// };

// const limit = 20;
// const offset = 0;

// const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

// export const fetchAllPokemon = async () => {
//   await fetch(baseUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(console.error);
// };

// export const fetchPokemonData = async (name) => {
//   await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     .then((res) => {
//       return res.json();
//     })
//     .catch(console.error);
// };
