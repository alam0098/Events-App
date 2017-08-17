import {Component, OnInit, Inject} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import {TOSTR_TOKEN, Toastr} from '../common/toastr.service'

@Component({
    templateUrl: '/app/user/profile.component.html',
    styleUrls: ['app/user/profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileForm:FormGroup;
    firstName:FormControl;
    lastName:FormControl;
    
    constructor(private authService:AuthService, private router:Router, @Inject(TOSTR_TOKEN) private toastr:Toastr){}
    
    ngOnInit(){
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.profileForm = new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        })
    }
    
    saveProfile(formValues){
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.toastr.success('Profile Saved');
            this.router.navigate(['events']);
        }
    }
    
    cancel(){
        this.router.navigate(['events']);
    }

    validateFirstName(){
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName(){
        return this.lastName.valid || this.lastName.untouched
    }
}
