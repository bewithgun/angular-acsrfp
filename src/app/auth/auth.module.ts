import {NgModule} from '@angular/core'
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AuthComponent
  ],
  imports : [
    FormsModule,
    Share
  ]
})

export class AuthModule  
{

}