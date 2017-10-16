import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { NavigationBarComponent} from './shared/navigation-bar.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        NavigationBarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
