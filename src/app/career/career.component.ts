import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';



import * as $ from 'jquery';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  Firstname: String;
Lastname: String;
Address: String;
City: String;
State: String;
Zipcode: String;
Phone: String;
  Email: String;
  mess: boolean=false;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach((form:any) => {
    form.addEventListener('submit', (events:any) => {
      if (!form.checkValidity()) {
        events.preventDefault()
        events.stopPropagation()


      }
      else if(JSON.stringify(event.value)!=null){
          events.preventDefault()
        events.stopPropagation()
         this.http.post('https://script.google.com/macros/s/AKfycbwfHzDMigW3e1iDDKtvOzIi6EMi0nFkQNGtBj9VGAswV7WeA8sbSSCj-ogpFfO9Ao3T/exec', JSON.stringify(event.value)).subscribe((res) => {

       var dd = res['result'];
       if (dd == "completed") {
        form.classList.remove('was-validated')
         this.mess = true;
         form.reset();

       }

     });
      }

      form.classList.add('was-validated')

    }, false)

  })
})()



  }
  ngAfterViewInit() {

    $(function () {



      var params: any = {};

      $('#file').on("change", function () {
        var file: any = (this as any).files[0];


        var fr = new FileReader();
        fr.onload = function (e: any) {
          params.file = e.target.result.replace(/^.*,/, '');
          params.extension = file.type.split("/")[1];
          params.filename = file.name,
            postJump();
        }
        fr.readAsDataURL(file);
      });

      function postJump() {

        $('#form').submit(function (e) {
          e.preventDefault();
          $.ajax({

            url: 'https://script.google.com/macros/s/AKfycbwfHzDMigW3e1iDDKtvOzIi6EMi0nFkQNGtBj9VGAswV7WeA8sbSSCj-ogpFfO9Ao3T/exec?' + $('#form').serialize(),
            type: 'POST',
            data: params,
            success: function (res) {
              var dd = res['result'];
              if (dd == "completed") {

                ($('#form')[0] as any).reset();

                alert("Sucessfully Submitted")

              }
            }
          });
          return false;
        });
        $('#postjump').remove();
      }
    });
  }

}
