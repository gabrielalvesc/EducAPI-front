import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService extends BaseService {

  constructor() {
    super();
  }

  insert(url: string, item: any) {
    return this.post(url, item);
  }

  update(url: string, id: string, item: any) {
    return this.put(url + '/' + id, item);
  }

  updatePartial(url: string, id: string, item: any) {
    return this.patch(url + '/' + id, item);
  }

  remove(url: string, id: string) {
    return this.delete(url + '/' + id);
  }

  getAll(url: string) {
    return this.search(url);
  }

  search(url: string, pagination = {}, filters = []): any {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify(Object.assign(pagination, { filters: filters }))
    );

    return this.get(url, params);
  }

  getOne(url: string, id: string) {
    return this.get(url + '/' + id);
  }

}
