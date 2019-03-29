import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IDetailedPokemonResponse } from "../api.types";

@Component({
  selector: "app-poke-details",
  templateUrl: "./poke-details.component.html",
  styleUrls: ["./poke-details.component.sass"]
})
export class PokeDetailsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  details?: IDetailedPokemonResponse;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.pokemonId;
      this.fetchDetails(id);
    });
  }

  fetchDetails(id: number) {
    this.http
      .get<IDetailedPokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .subscribe(response => {
        this.details = response;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
