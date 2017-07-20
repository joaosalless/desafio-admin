import { AbstractEntity } from '../abstract/abstract-entity.model';

export class User extends AbstractEntity {

  id?: any = '';
  username?: any = '';
  email?: any = '';
  deleted_at?: any = '';
  created_at?: any = '';
  updated_at?: any = '';

  constructor(user?: User) {
    super();
    Object.assign(this, user);
  }
}
