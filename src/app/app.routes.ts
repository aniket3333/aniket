import { Routes } from '@angular/router';
import { DriveItemListComponent } from './drive-item-list/drive-item-list.component';
import { AllSitesListComponent } from './all-sites-list/all-sites-list.component';
import { DrivesSitesListComponent } from './drives-sites-list/drives-sites-list.component';
import { SharepointDataTableComponent } from './sharepoint-data-table/sharepoint-data-table.component';
import { FinanceExample } from './finance-example/finance-example.component';

export const routes: Routes = [
  {path:"" , component :AllSitesListComponent},
  {path:"drive-list/:siteId" , component :DrivesSitesListComponent},
  {path:"drive-item/:DriveId" , component :DriveItemListComponent},
  {path:"drive-view-file/:fileUrl" , component :FinanceExample}
];
