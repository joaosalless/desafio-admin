import { User } from '../users/user.model';
import { ActivityInterface } from './activity-interface';
import { ActivityPropertiesInterface } from './activity-properties-interface';

export class Activity implements ActivityInterface {

  /**
   * id attribute
   *
   * @type {any}
   */
  id?: any = '';

  /**
   * description attribute
   *
   * @type {any}
   */
  description?: any = '';

  /**
   * created_at attribute
   *
   * @type {any}
   */
  created_at?: any = '';

  /**
   * properties attribute
   *
   * @type {any}
   */
  properties?: ActivityPropertiesInterface = {
    attributes: {},
    old: {},
  };

  /**
   * causer attribute
   *
   * @type {any}
   */
  causer?: any = {
    data: new User(),
  };

}
