export interface IAuthenticationModel {
  onLogin: (user: any) => void;
  onLogout: () => void;
}
