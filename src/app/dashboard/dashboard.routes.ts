import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { DisplayComponent } from './admin/display/display.component';

export const dashboardroutes : Routes = 
[
    {
        path : 'dashboard',
        component : LayoutComponent,
        canActivate : [AuthGuard],
        children : 
        [

            {

                path : 'admin',
                component : AdminComponent,
                children :
                [
                    {
                        path : '',
                        component : CreateComponent
                    },

                    {
                        path : 'create',
                        component : CreateComponent
                    },

                    {
                        path : 'update',
                        component : UpdateComponent
                    },

                    {
                        path : 'delete',
                        component : DeleteComponent
                    },

                    {
                        path : 'display',
                        component : DisplayComponent
                    },
                ]
                
            },

            {
                path : 'employee',
                component : EmployeeComponent
            },

            {
                path : 'manager',
                component : ManagerComponent
            },
            

        ]
    }
    

];