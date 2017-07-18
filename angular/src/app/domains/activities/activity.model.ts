import { User } from '../users/user.model';

export abstract class Activity {
  id?: any = '';
  description?: any = '';
  created_at?: any = '';
  properties?: any = {
    attributes: {},
    old: {},
  };
  causer?: any = {
    data: new User(),
  }
}
