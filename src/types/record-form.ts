export interface RecordForm {
  tags: {
    text: string
  }[] | null;
  type: RecordType;
  login: string;
  password: string;
}

type RecordType = 'ldap' | 'local';