import type { AccountType } from "./account.types";

export interface AccountForm {
  tags: string;
  type: AccountType;
  login: string;
  password: string | null;
}