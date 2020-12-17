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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DeleteDataDialog } from './routed/components/referencedata/dialogs/delete-data/delete-data.dialog';
import { UpdateDataDialog } from './routed/components/referencedata/dialogs/update-data/update-data.dialog';
import { AdsPage } from './routed/pages/ads/ads.page';
import { EnginesPage } from './routed/pages/engines/engines.page';
import { ModelsPage } from './routed/pages/models/models.page';
import { VehiclesPage } from './routed/pages/vehicles/vehicles.page';
import { UsersPage } from './routed/pages/users/users.page';
import { AdsComponent } from './routed/components/ads/ads.component';
import { EnginesComponent } from './routed/components/engines/engines.component';
import { ModelsComponent } from './routed/components/models/models.component';
import { UsersComponent } from './routed/components/users/users.component';
import { VehiclesComponent } from './routed/components/vehicles/vehicles.component';
import { CreateModelDialog } from './routed/components/models/dialogs/create-model/create-model.dialog';
import { DeleteModelDialog } from './routed/components/models/dialogs/delete-model/delete-model.dialog';
import { UpdateModelDialog } from './routed/components/models/dialogs/update-model/update-model.dialog';
import {MatSelectModule} from '@angular/material/select';
import {DeleteVehicleDialog} from './routed/components/vehicles/dialogs/delete-vehicle/delete-vehicle.dialog';
import {CreateVehicleDialog} from './routed/components/vehicles/dialogs/create-vehicle/create-vehicle.dialog';
import {UpdateVehicleDialog} from './routed/components/vehicles/dialogs/update-vehicle/update-vehicle.dialog';
import {CreateEngineDialog} from './routed/components/engines/dialogs/create-engine/create-engine.dialog';
import {DeleteEngineDialog} from './routed/components/engines/dialogs/delete-engine/delete-engine.dialog';
import {UpdateEngineDialog} from './routed/components/engines/dialogs/update-engine/update-engine.dialog';
import {CreateUserDialog} from './routed/components/users/dialogs/create-user/create-user.dialog';
import {DeleteUserDialog} from './routed/components/users/dialogs/delete-user/delete-user.dialog';
import {UpdateUserDialog} from './routed/components/users/dialogs/update-user/update-user.dialog';
import {CreateAdDialog} from './routed/components/ads/dialogs/create-ad/create-ad.dialog';
import {DeleteAdDialog} from './routed/components/ads/dialogs/delete-ad/delete-ad.dialog';
import {UpdateAdDialog} from './routed/components/ads/dialogs/update-ad/update-ad.dialog';
import { TestsPage } from './routed/pages/tests/tests.page';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPage,
    ReferencedataPage,
    ReferencedataComponent,
    CreateDataDialog,
    DeleteDataDialog,
    UpdateDataDialog,
    AdsPage,
    EnginesPage,
    ModelsPage,
    VehiclesPage,
    UsersPage,
    AdsComponent,
    EnginesComponent,
    ModelsComponent,
    UsersComponent,
    VehiclesComponent,
    CreateModelDialog,
    DeleteModelDialog,
    UpdateModelDialog,
    CreateAdDialog,
    DeleteAdDialog,
    UpdateAdDialog,
    CreateEngineDialog,
    DeleteEngineDialog,
    UpdateEngineDialog,
    CreateUserDialog,
    DeleteUserDialog,
    UpdateUserDialog,
    CreateVehicleDialog,
    DeleteVehicleDialog,
    UpdateVehicleDialog,
    TestsPage
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
        MatToolbarModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
