import { Injectable } from '@angular/core';
import * as moment from 'moment'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';
import { HttpService } from '../http/http.service';
import { ConfigService } from '@ngx-config/core';

export class LoggerConfig {
  enabled: boolean = false;
  appId: string = '';
  level: string = 'DEBUG';
  logOnConsole: boolean = true;
  logOnServer: boolean = false;
  serverLogUrl?: string = '';
  serverLogLevel?: string = 'DEBUG';
}

const Levels = [
  'TRACE',
  'DEBUG',
  'INFO',
  'LOG',
  'WARN',
  'ERROR',
  'OFF'
];

@Injectable()
export class LoggerService {

  private _serverLogLevelIdx;
  private _clientLogLevelIdx;
  private _config: LoggerConfig = new LoggerConfig();
  private _timestamp: any = new Date().toISOString().replace('T', ' ').split('.')[0];

  constructor(private httpService: HttpService, private readonly configService: ConfigService) {
    Object.assign(this._config, this.configService.getSettings('system.debug'));
    this._config.appId = this.configService.getSettings('system.app.id', 'undefined app');
    this._serverLogLevelIdx = this._initLogLevel(this._config.serverLogLevel);
    this._clientLogLevelIdx = this._initLogLevel(this._config.level);
  }

  private _initLogLevel(level) {
    level = _.findIndex(Levels, level);
    return -1 ? _.findIndex(Levels, 'INFO') : level;
  }

  private _logOnServer(level: string, message: string) {

    if (!this._config.logOnServer) return;
    if (!this._config.serverLogUrl) return;

    //if the user provides a serverLogLevel and the current level is than that do not log
    if (this._serverLogLevelIdx && _.findIndex(Levels, level) < this._serverLogLevelIdx) return;

    this.httpService
      .builder(this._config.serverLogUrl, true)
      .post({ appId: this._config.appId, level: level, message: message })
      .then(
        res => null,
        error => this._log('ERROR', 'FAILED TO LOG ON SERVER', false)
      );
  }

  private _log(level: string, message: string, logOnServer: boolean) {

    if (!this._config.enabled) return;

    //if no message or the log level is less than the environ
    if (!message || _.findIndex(Levels, level) < this._clientLogLevelIdx) return;

    if (this._config.logOnConsole) {
      let color1;

      switch (level) {
        case 'TRACE':
          color1 = 'blue';
          break;
        case 'DEBUG':
          color1 = 'teal';
          break;
        case 'INFO':
        case 'LOG':
          color1 = 'gray';
          break;
        case 'WARN':
        case 'ERROR':
          color1 = 'red';
          break;
        case 'OFF':
        default:
          return;
      }

      if (typeof message === 'object') {
        console.log(`%c${moment.utc().format('YYYY-MM-DD HH:mm:ss')} [${this._config.appId}] [${level}]`, `color:${color1}`);
        console.log(message);
      }
      else {
        console.log(`%c${moment.utc().format('YYYY-MM-DD HH:mm:ss')} [${this._config.appId}] [${level}] %c${message}`, `color:${color1}`, 'color:black');
      }
    }

    if (logOnServer) {
      this._logOnServer(level, message);
    }
  }

  trace(message: any) {
    this._log('TRACE', message, true);
  }

  debug(message: any) {
    this._log('DEBUG', message, true);
  }

  info(message: any) {
    this._log('INFO', message, true);
  }

  log(message: any) {
    this._log('LOG', message, true);
  }

  warn(message: any) {
    this._log('WARN', message, true);
  }

  error(message: any) {
    this._log('ERROR', message, true);
  }
}
