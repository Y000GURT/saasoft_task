export interface Account {
  id: number
  tags: {
    text: string
  }[];
  type: AccountType
  login: string
  password: string | null
}

export type AccountType = 'ldap' | 'local';