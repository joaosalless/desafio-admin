import { Activity } from '../activities/activity.model';
import { HistoricoAttributes } from './historico-attributes';

export class Historico extends Activity{

  /**
   * properties attribute
   *
   * @type {any}
   */
  properties?: any = {
    attributes: new HistoricoAttributes(),
    old: new HistoricoAttributes(),
  };

}
