export interface LoggableEntityInterface {

  /**
   * history attribute
   *
   * @type {any}
   */
  history?: any;

  /**
   * Retorna o Histórico de alterações
   *
   * Só consta no resultado de uma consulta quando é solicitado via fractals transformer.
   *
   * @type {LoggableEntityInterface}
   */
  getHistory(): any;

}
