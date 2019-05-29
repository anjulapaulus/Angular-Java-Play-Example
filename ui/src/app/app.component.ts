import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    responseType: 'text'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  public addNewUser;
  url='http://localhost:9000/user';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.registerForm= new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }
  onSubmit(): void{
    this.addNewUser= this.registerForm.getRawValue();
    console.log(this.addNewUser);
    this.addItemUser(this.addNewUser).subscribe(user =>{
      console.log(user);
    });
  }
  addItemUser(user){
    const newUser = user;
    console.log('okay', newUser);
    return this.http.post(this.url,newUser,{ responseType: 'text' })
  }
  }
