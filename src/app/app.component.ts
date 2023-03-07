import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root', // componmentin htmlden çağrılamasını sağlayan bir tanım
  templateUrl: './app.component.html', // html dosyası
  styleUrls: ['./app.component.css'], // css dosya yolu
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('env', environment.baseApi);
  }

  onClick() {
    window.alert('tıklandı');
  }
}
