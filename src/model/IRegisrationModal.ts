export const Role = {
  client: 'Client'
} as const;


export  interface IRegistration  {
  input: {
    email: string,
    password: string,
    role:  typeof Role[keyof typeof Role]
  }
}

