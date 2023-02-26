import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  imports: [BrowserModule, WeatherModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
