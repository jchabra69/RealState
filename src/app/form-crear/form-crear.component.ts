import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-form-crear',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form-crear.component.html',
  styleUrl: './form-crear.component.css',
})
export class FormCrearComponent implements OnInit {
  crearForm: FormGroup;

  casas: HousingLocation[] | undefined;

  /*
     "id": 1,
      "name": "A113 Transitional Housing",
      "city": "Santa Monica",
      "state": "CA",
      "photo": "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": false,
      "laundry": true,
      "coordinates": {
        "latitude": 34.0226,
        "longitude": -118.4957
      }
    */

      name: FormControl;
      city: FormControl;
      state: FormControl;
      photo: FormControl;
      availableUnits: FormControl;
      wifi: FormControl;
      laundry: FormControl;
      securitySystem: FormControl;
  
    ngOnInit(): void {
         

    }
  
   

  constructor(public housingService: HousingService) {

    //CARGA LAS CASAS QUE LAS NECESITO PARA EL OPTION
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
        
      this.casas = housingLocationList;
  
    }).catch(error => console.error('Error loading housing locations:', error));

    this.name = new FormControl("", Validators.required);
    this.city = new FormControl("", Validators.required);
    this.state = new FormControl("", Validators.required);
    this.photo = new FormControl("",);
    this.availableUnits = new FormControl("", Validators.required);
    this.wifi = new FormControl("", Validators.required);
    this.laundry = new FormControl("", Validators.required);
    this.securitySystem = new FormControl("");


    this.crearForm = new FormGroup({

          name: this.name,
          city: this.city,
          state: this.state,
          photo: this.photo,
          availableUnits: this.availableUnits,
          wifi: this.wifi,
          laundry: this.laundry,
          securitySystem: this.securitySystem

    })

  }

  onSubmit() {

    if (this.crearForm.valid) {
      //const formData = this.crearForm.value;

      //Llamo al servicio que tiene el método para crear la casa
      this.housingService.postHousing(this.crearForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.crearForm.reset();
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
