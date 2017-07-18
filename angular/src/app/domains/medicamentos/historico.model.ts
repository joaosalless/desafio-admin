import { Activity } from '../activities/activity.model';
import { HistoricoAttributes } from './historico-attributes';

export class Historico extends Activity{

  properties?: any = {
    attributes: new HistoricoAttributes(),
    old: new HistoricoAttributes(),
  };

}
