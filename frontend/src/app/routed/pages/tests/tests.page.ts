import { Component, OnInit } from '@angular/core';
import {ReferencedataModel} from '../../../features/referencedata/model/referencedata.model';
import {ModelModel} from '../../../features/referencedata/model/model.model';
import {ModelsApiService} from '../../../features/referencedata/service/models-api.service';

@Component({
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.css']
})
export class TestsPage implements OnInit {
  scriptXSS: string;
  manufacturerName: string;
  models: ModelModel[];

  constructor(
    private readonly modelsApiService: ModelsApiService,
  ) { }

  ngOnInit(): void {
  }

  handleGetModelsClick(manufacturerName: string): void {
    this.modelsApiService.getAllModelsByManufacturerName(manufacturerName).subscribe((result) => {
      this.models = result;
    });
  }
}
