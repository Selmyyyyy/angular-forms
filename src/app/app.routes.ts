import { Routes } from '@angular/router';
import { FormTwo } from './components/form-two/form-two';
import { FormOne } from './components/form-one/form-one';

export const routes: Routes = [
    {path:"", redirectTo:"/form1", pathMatch:"full"},
    {path:"form1", component: FormOne},
    {path:"form2", component: FormTwo},
    {path:"**", redirectTo:"/form1", pathMatch:"full"}

];
