import { NgModule } from '@angular/core';
import { AppShellModule } from './app-shell/app-shell.module';
import { DbModule } from './db/db.module';



@NgModule({
  imports: [AppShellModule, DbModule],
  exports: [AppShellModule, DbModule]
})
export class CoreModule { }
