import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InventoryDetail } from '../shared/inventory-detail.model';
import { InventoryDetailService } from '../shared/inventory-detail.service';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styles: [
  ]
})
export class InventoryDetailsComponent implements OnInit {

  constructor(public service: InventoryDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(id: number) {
    if (confirm("Are you sure you want to detele this inventory?")) {
      this.service.deleteInventoryDetail(id)
      .subscribe( res => {
        this.service.refreshList();
        this.toastr.error("Deleted susseccfully", "Inventory Detail Register");
      },
      err => { console.log(err); }
      )
    }
  }

  populateForm(selectedRecord: InventoryDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
