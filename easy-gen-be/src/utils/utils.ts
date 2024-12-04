import bcrypt from 'bcryptjs';

export class Utils {
  static async isHashedStringMatch(
    regularStr: string,
    hashedStr: string,
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(regularStr, hashedStr);
    } catch {
      return false;
    }
  }

  static async hashString(regularStr: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(regularStr, salt);
  }
}
