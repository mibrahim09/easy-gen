export abstract class TokenService {
  abstract sign(payload: NonNullable<unknown>): Promise<string>;
}
