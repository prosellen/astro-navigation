export interface NavigationItem {
  text: string;
  url: string;
  children?: NavigationItems;
  level?: number;
  mainMenu?: boolean;
  redirect?: string;
}

export type NavigationItems = Array<NavigationItem>;
