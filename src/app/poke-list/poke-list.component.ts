import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPokemonItem, IAllPokemonReponse } from "../api.types";

@Component({
  selector: "app-poke-list",
  templateUrl: "./poke-list.component.html",
  styleUrls: ["./poke-list.component.sass"]
})
export class PokeListComponent implements OnInit {
  list: IPokemonItem[] = [];
  query = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPokemon();
  }

  get filteredList() {
    return this.list.filter(p => p.name.indexOf(this.query) !== -1);
  }

  fetchPokemon() {
    this.http
      .get<IAllPokemonReponse>(
        "https://pokeapi.co/api/v2/pokemon/?limit=9999999"
      )
      .subscribe(response => {
        this.list = response.results;
      });
  }
}
