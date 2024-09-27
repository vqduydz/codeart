import { environment } from 'src/environments/environment';

export var ApiSetting = {
 //Review API URL
 appDomain: function (api: any) {
  return environment.appDomain + api;
 },
 apiDomain: function (api: any) {
  return environment.appDomain + environment.apiVersion + api;
 },
};
