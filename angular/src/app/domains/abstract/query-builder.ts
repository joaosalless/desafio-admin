export class QueryBuilder {

  endpoint: string = '';
  include?: any[] = [];
  search?: string;
  page?: number;
  perPage?: number;
  orderBy?: string;

  constructor(queryBuilder?: QueryBuilder) {
    this.endpoint = queryBuilder.endpoint;
    this.search   = queryBuilder.search ? queryBuilder.search : null;
    this.page     = queryBuilder.page ? queryBuilder.page : null;
    this.perPage  = queryBuilder.perPage ? queryBuilder.perPage : null;
    this.orderBy  = queryBuilder.orderBy ? queryBuilder.orderBy : null;
    this.include  = queryBuilder.include ? queryBuilder.include : [];
  }
}
