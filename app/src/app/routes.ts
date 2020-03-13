import{Routes } from '@angular/router'
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { StudentComponent } from './user/student/student.component';
import { StandardComponent } from './user/standard/standard.component';
import { HomeComponent } from './school/home/home.component';
import { ContactComponent } from './school/contact/contact.component';
import { SchoolComponent } from './school/school.component';
import { AdminComponent } from './school/admin/admin.component';
import { ProgressdataComponent } from './user/progressdata/progressdata.component';
import { ReportcardComponent } from './user/student/reportcard/reportcard.component';
import { DataaddComponent } from './user/dataadd/dataadd.component';
import { UserdatateditComponent } from './user/userdatatedit/userdatatedit.component';
import { AdminGuard } from './auth/admin.guard';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { AllstudnetComponent } from './studentdetail/allstudnet/allstudnet.component';
import { AlltaskComponent } from './studentdetail/alltask/alltask.component';
import { TaskaddComponent } from './user/taskadd/taskadd.component';
import { TaskviewComponent } from './user/taskview/taskview.component';
import { TaskeditComponent } from './user/taskedit/taskedit.component';
import { TaskComponent } from './user/task/task.component';

export const appRoutes: Routes = [
    { path: 'studentdata', component: UserComponent, children:[
        {path:'register', component:RegisterComponent, canActivate:[AdminGuard]},
        {path: 'divison', component:StandardComponent, canActivate:[AdminGuard] }, 
        { path:'standard/:std', component:ProgressdataComponent,  
        canActivate:[AdminGuard]}, // http://localhost:4200/standard/8A 
        
        {path:'student/:userId',  component: UserdatateditComponent, canActivate:[AdminGuard] },
        {path:'studentdetail', component:StudentdetailComponent, canActivate:[AdminGuard]  },
        {path:'allstudent', component: AllstudnetComponent, canActivate:[AdminGuard] },
        {path:'alltasks', component: AlltaskComponent, canActivate:[AdminGuard] },
        {path:'alltasks', component: AlltaskComponent, canActivate:[AdminGuard] },
        {path:'addtasks', component: TaskaddComponent, canActivate:[AdminGuard] },
        {path:'studenttask/:_id', component:TaskComponent, canActivate:[AdminGuard]},
        {path:'taskview/:_id', component:TaskviewComponent, canActivate:[AdminGuard] },
        {path:'taskedit/:_id', component: TaskeditComponent,  canActivate:[AdminGuard] } ,
      {path:'taskadd/:_id', component:TaskaddComponent, canActivate:[AdminGuard]},
    //  {path:'taskadd/:studentId', component: DataaddComponent,  canActivate:[AdminGuard] },
       
        
           ]
    },
    
    //Path for Individual Login
    { path: 'login', component:LoginComponent },
    {path: 'student', component: StudentComponent, canActivate:[AuthGuard]},
    {path: 'progress/:userId', component: ReportcardComponent, canActivate:[AuthGuard]}, 

     {path: 'admin', component:AdminComponent },
     { path: 'contact', component: ContactComponent},
     {path:'home', component:HomeComponent},
    

]
