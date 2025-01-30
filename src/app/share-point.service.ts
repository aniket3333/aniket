import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from './common/base-response.model';
import { DataTableModel } from './common/datatable.model';
import { SitesModal } from './common/siteModal';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISharePointService } from './Ishare-point.service';

@Injectable({
  providedIn: 'root'
})
export class SharePointService  implements ISharePointService{

  constructor(private http:HttpClient) { }

  getAllSites():Observable<BaseResponseModel<DataTableModel<SitesModal>>>{

    // return this.http.get("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetSites")

    return this.http.get<BaseResponseModel<DataTableModel<SitesModal>>>(
     "https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetSites",

    );
  }
  getDrivesBySiteId(SiteId:string):Observable<BaseResponseModel<DataTableModel<SitesModal>>>{
    // return this.http.get("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetSites")
    let params = new HttpParams().set("SiteId", SiteId)

    return this.http.get<BaseResponseModel<DataTableModel<SitesModal>>>("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetDrivesBySiteId",{params}

    );
  }
  getDrivesItemByDriveId(DriveId:string):Observable<BaseResponseModel<DataTableModel<SitesModal>>>{
    // return this.http.get("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetSites")
    let params = new HttpParams().set("DriveId", DriveId)

    return this.http.get<BaseResponseModel<DataTableModel<SitesModal>>>("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetDrivesItemByDriveId",{params}

    );
  }
  viewDrivesfile(fileUrl:string):Observable<BaseResponseModel<DataTableModel<SitesModal>>>{
    // return this.http.get("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/GetSites")
    let params = new HttpParams().set("fileUrl", fileUrl)
    return this.http.get<BaseResponseModel<DataTableModel<SitesModal>>>("https://rnapi.sdaemon.com/Api/api/v1/SharePoint/NewReadExcelFile",{params}
    );
  }
}
