import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventoryDetail } from './inventory-detail.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:28628/api/InventoryDetail';
  formData: InventoryDetail = new InventoryDetail();
  list: InventoryDetail[]=[];

  postInventoryDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putInventoryDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.inventoryDetailId}`, this.formData);
  }

  deleteInventoryDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => {
      this.list = res as InventoryDetail[]
    });
  }
}
