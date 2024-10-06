import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = 'Coloque sua chave aqui';  // Substitua com sua API Key
  private apiUrl = 'https://newsapi.org/v2/everything';  // Endereço para buscas detalhadas

  constructor(private http: HttpClient) {}

  getNewsForCurrency(currency: string): Observable<any> {
    // Melhorando o filtro, incluindo apenas notícias relacionadas à moeda selecionada
    const url = `${this.apiUrl}?q=${currency}&language=pt&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
