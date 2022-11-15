import { IEnv } from '@env/env.types';
import { environment } from '../environments/environment';

export const APP_CONFIG: IEnv = {
  apiBaseUrl: environment.apiBaseUrl,
  production: environment.production
};
