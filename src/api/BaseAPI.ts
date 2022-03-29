import HTTPTransport from '../utils/HTTPTransport';

export default abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  public abstract create?(data: unknown): Promise<string>;
  public abstract read?(identifier?: string): Promise<string>;
  public abstract update?(identifier: string, data: unknown): Promise<string>;
  public abstract delete?(identifier: string): Promise<string>;
}
