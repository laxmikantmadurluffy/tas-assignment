import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utility/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
  public healthInfo = {
    "Personal info": {
    },
    "Medical Condition": {
      "Blood Pressure":{ 
      }
    },
    "Health Status": {
    }
  };

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getApi('api/v1/patient/healthInfo').subscribe((data) => {     
      if (data['status'] == 'success') {
        this.healthInfo = data['payload'];
      }else{
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: data['message'],
        });
      }
    })
  }

}
