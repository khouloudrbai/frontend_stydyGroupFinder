import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

dropdownOpen=false;

toggleDropdown(){
  this.dropdownOpen= !this.dropdownOpen;
}

}
