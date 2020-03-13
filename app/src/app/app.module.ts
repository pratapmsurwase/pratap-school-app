import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { SchoolComponent } from './school/school.component';
import { HomeComponent } from './school/home/home.component';
import { ContactComponent } from './school/contact/contact.component';
import { AdminComponent } from './school/admin/admin.component';
import { StudentComponent } from './user/student/student.component';
import { StandardComponent } from './user/standard/standard.component';
import { appRoutes } from './routes';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { HeaderComponent } from './header/header.component';
import { ProgressdataComponent } from './user/progressdata/progressdata.component';
import { ReportcardComponent } from './user/student/reportcard/reportcard.component';
import { DataaddComponent } from './user/dataadd/dataadd.component';
import { UserdatateditComponent } from './user/userdatatedit/userdatatedit.component';
import { StandardService } from './user/standard.service';
import { AdminGuard } from './auth/admin.guard';
import { AdminInterceptor } from './auth/admin.interceptor';
import { AdminserviceService } from './shared/adminservice.service';
import { TaskeditComponent } from './user/taskedit/taskedit.component';
import { AllstudnetComponent } from './studentdetail/allstudnet/allstudnet.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { AlltaskComponent } from './studentdetail/alltask/alltask.component';
import { TaskaddComponent } from './user/taskadd/taskadd.component';
import { TaskviewComponent } from './user/taskview/taskview.component';
import { TaskComponent } from './user/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    SchoolComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    StudentComponent,
    StandardComponent,
    HeaderComponent,
    ProgressdataComponent,
    ReportcardComponent,
    DataaddComponent,
    UserdatateditComponent,
    TaskeditComponent,
    AllstudnetComponent,
    StudentdetailComponent,
    AlltaskComponent,
    TaskaddComponent,
    TaskviewComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers:  [{provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
      multi: true },
      {provide: HTTP_INTERCEPTORS,
        useClass: AdminInterceptor,
          multi: true },
       AuthGuard, AdminGuard, UserService, AdminserviceService, StandardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
