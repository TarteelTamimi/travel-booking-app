export type UserInPropsModel = {
  userIn: string | boolean;
  userRole?: string | null;
  setUserRole: (value: string | null) => void;
  setUserIn: (value: string | boolean) => void;
}