import { Routes, RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes =[
{
    path:'',
    component: LoginComponent
},
{
    path:'login',
    component: LoginComponent

},
{
    path:'home',
    component: HomeComponent

},

{
    path: '**',
    redirectTo:'',
    component: HomeComponent

}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }