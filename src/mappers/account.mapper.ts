import type { AccountForm } from "../types/account-form.types";
import type { Account } from "../types/account.types";

export function storeToForm(account: Account): AccountForm {
  return {
    tags: account.tags.map((tag) => tag.text).join(';'),
    type: account.type,
    login: account.login,
    password: account.password,
  }
}

export function formToStore(form: AccountForm): Account {
  return {
    id: Date.now(),
    tags: form.tags.split(';').map((tag) => ({ text: tag })),
    type: form.type,
    login: form.login,
    password: form.password || null,
  }
}