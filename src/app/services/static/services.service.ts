import { Injectable } from '@angular/core';
import { APIList } from './global-variable';
import { CommonService, exService } from '../core/common.service';
import { SearchConfig } from './search-config';

@Injectable({ providedIn: 'root' })
export class SYS_SchemaProvider extends exService {
 constructor(public override commonService: CommonService) {
  super(APIList.SYS_Schema, SearchConfig.getSearchFields('SYS_Schema'), commonService);
 }
}
