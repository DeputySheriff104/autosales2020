import {EntityModel} from '../model/entity.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingUtilsService {

  sortById(a: EntityModel, b: EntityModel): number {
    const idA = a.id;
    const idB = b.id;
    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    return 0;
  }
}
