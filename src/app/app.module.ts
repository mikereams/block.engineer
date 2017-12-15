// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// Services
import { DataService } from './services/data-service.service';

// Material  inputs
import { MatToolbarModule,MatIconModule,MatListModule,MatCardModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,MatChipsModule,MatMenuModule,MatRadioModule} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,MatIconModule,MatListModule,MatCardModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,MatChipsModule,MatMenuModule,MatRadioModule,   
    MatSelectModule,    
    MatStepperModule,
    HttpModule,    
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: AppComponent}]),
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
