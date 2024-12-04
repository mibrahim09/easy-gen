import { compare, genSalt, hash } from 'bcrypt';

export class Utils {
  static async isHashedStringMatch(
    regularStr: string,
    hashedStr: string,
  ): Promise<boolean> {
    try {
      return await compare(regularStr, hashedStr);
    } catch {
      return false;
    }
  }

  static async hashString(regularStr: string): Promise<string> {
    const salt = await genSalt();
    return await hash(regularStr, salt);
  }
}
