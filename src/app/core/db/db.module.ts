import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { DbService } from './db.service';



@NgModule({
  declarations: [],
  imports: [
    NgxWebstorageModule.forRoot({
      prefix: 'at-car'
    })
  ],
  providers: [DbService]
})
export class DbModule {
}
