import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {
  selectedCurrency: string = 'Bitcoin';  // Valor padrão
  newsData: any;
  loading: boolean = false;

  constructor(private newsService: NewsService,
    private navCtrl: NavController
  ) {}

  gohome() {
    this.navCtrl.navigateBack('home')
  }
  
  gopage3() {
    this.navCtrl.navigateForward('page3')
  }

  fetchNews() {
    if (this.selectedCurrency) {
      this.loading = true;
      this.newsService.getNewsForCurrency(this.selectedCurrency).subscribe(
        (data) => {
          this.newsData = data;
          this.loading = false;
        },
        (err) => {
          console.error('Erro ao buscar as notícias', err);
          this.loading = false;
        }
      );
    }
  }
}
