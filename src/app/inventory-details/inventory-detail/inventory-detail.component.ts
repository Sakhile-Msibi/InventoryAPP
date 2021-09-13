import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InventoryDetail } from 'src/app/shared/inventory-detail.model';
import { InventoryDetailService } from 'src/app/shared/inventory-detail.service';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styles: [
  ]
})
export class InventoryDetailComponent implements OnInit {

  constructor(public service: InventoryDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.inventoryDetailId == 0) {
      this.insertReocrd(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertReocrd(form: NgForm) {
    this.service.postInventoryDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted successfully", "Inventory Detail Register");
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putInventoryDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated successfully", "Inventory Detail Register");
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new InventoryDetail();
  }

}
