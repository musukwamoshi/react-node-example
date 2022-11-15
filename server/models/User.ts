import { InferType } from "yup";
import crypto from "crypto";
import { toString, pick } from "lodash";

import { ServerModel } from "./ServerModel";
import { userSchema } from "../../shared/schemas/user";

export type UserType = InferType<typeof userSchema>;

export class User extends ServerModel implements UserType {
  static tableName = "users";
  static sharedSchema = userSchema;

  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  hash: string | undefined;
  salt: string | undefined;
  isAdmin?: boolean;

  static findOne(fields: Record<string, any>): Promise<User> {
    return User.query().findOne(fields);
  }

  setPassword(password: string): void {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt.toString(), 1000, 512, "sha512").toString("hex");
  }

  validatePassword(password: string): boolean {
    const hash = crypto.pbkdf2Sync(password, toString(this.salt), 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
  }

  async save(): Promise<void> {
    if (this.id) {
      await User.query().where({ id: this.id }).update(this).returning("*");
    } else {
      await User.query().insert(this).returning("*")
    }
  }

  serialize = async (): Promise<object> => {
    const userData = {};
    Object.assign(
      userData,
      pick(this, "email")
    );
    return userData;
  }
}

