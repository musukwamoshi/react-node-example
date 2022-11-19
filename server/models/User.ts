import { InferType } from "yup";
import crypto from "crypto";
import { toString, pick, isEmpty } from "lodash";

import { ServerModel } from "./ServerModel";
import { userSchema } from "../../shared/schemas/user";

export type UserType = InferType<typeof userSchema>;

export class User extends ServerModel implements UserType {
  static tableName = "users";
  static sharedSchema = userSchema;

  email?: string;
  hash?: string;
  salt?: string;
  isAdmin!: boolean | null;
  passwordResetToken?: string;
  passwordResetExpiration?: Date;

  static findOne(fields: Record<string, any>): Promise<User> {
    return User.query().findOne(fields);
  }

  static find(fields: Record<string, any>): Promise<User[]> {
    return User.query().where(fields);
  }

  static async checkPasswordResetToken(token: string): Promise<boolean> {
    // todo check passwordResetExpiration
    const user = await User.query().findOne({
      password_reset_token: token
    });
    return Boolean(user);
  }

  hasPassword = (): boolean => !isEmpty(this.hash) && !isEmpty(this.salt);

  setPassword(password: string): void {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt.toString(), 1000, 512, "sha512").toString("hex");
  }

  validatePassword(password: string): boolean {
    const hash = crypto.pbkdf2Sync(password, toString(this.salt), 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
  }


  async sendPasswordReset(): Promise<void> {
    if (!this.email) {
      console.error("User somehow doesn't have an email");
      return;
    }
    function generateToken(): string {
      const buf = Buffer.alloc(16);
      for (let i = 0; i < buf.length; i++) {
        buf[i] = Math.floor(Math.random() * 256);
      }
      const id = buf.toString("base64");
      return id;
    }

    const token = generateToken();

    // save token
    this.passwordResetToken = token;
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    this.passwordResetExpiration = expiration;
    await this.save();


    // await sendEmailTemplate({
    //   force: true,
    //   template: "reset",
    //   to: candidate,
    //   model: {
    //     first_name: candidate?.firstName || "there",
    //     root_url: getRootUrl(),
    //     token: encodeURIComponent(token)
    //   }
    // });
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

