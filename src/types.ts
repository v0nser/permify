export type Role = {
    id: string;
    permissions: string[];
  };
  
  export type User = {
    id: string;
    roles: string[];
  };
  
  export type Permission = string;
  