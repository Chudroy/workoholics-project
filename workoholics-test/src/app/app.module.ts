import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactFlagComponent } from './contact-flag/contact-flag.component';
import { ProductComponent } from './product/product.component';

//Custom Modules
@NgModule({
  declarations: [AppComponent, NavigationBarComponent, IntroductionComponent, ProductsListComponent, FooterComponent, HeaderComponent, ContactFlagComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
