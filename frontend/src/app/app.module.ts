import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './routed/components/main/main.component';
import { MainPage } from './routed/pages/main/main.page';
import {AppRoutingModule} from './app-routing.module';
import { ReferencedataPage } from './routed/pages/referencedata/referencedata.page';
import { ReferencedataComponent } from './routed/components/referencedata/referencedata.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CreateDataDialog } from './routed/components/referencedata/dialogs/create-data/create-data.dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DeleteDataDialog } from './routed/components/referencedata/dialogs/delete-data/delete-data.dialog';
import { UpdateDataDialog } from './routed/components/referencedata/dialogs/update-data/update-data.dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPage,
    ReferencedataPage,
    ReferencedataComponent,
    CreateDataDialog,
    DeleteDataDialog,
    UpdateDataDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
