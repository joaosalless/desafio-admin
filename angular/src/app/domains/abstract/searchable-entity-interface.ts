export interface SearchableEntityInterface {

  /**
   * Retorna o endpoint da API para esta Entidade
   */
  getApiEndpoint(): string;

  /**
   * Especifica as relações a serem incluidas na coleção pelo Fractals Transformer
   */
  getCollectionTransformers(): any[];

  /**
   * Especifica as relações a serem incluidas no item pelo Fractals Transformer
   */
  getItemTransformers(): any[];

  /**
   * Reinicia as propriedades de um item em data.{endpoint}.item
   */
  resetDataItem();

  /**
   * Reinicia as propriedades de uma collection em data.{endpoint}.collection
   */
  resetDataCollection();

}
