import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class DialogDataA
{
    title: string;
    bodycontent: string;
    choice1: string;
    choice2: string;
    msgclass: string;
}

@Component({
  selector: 'ngx-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss']
})
export class TransactionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

    closeDialog(){
      this.dialogRef.close();
    }
     
}
