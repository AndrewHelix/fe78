export enum TabValue {
  All = 'all',
  Favorites = 'favorites',
  Popular = 'popular',
}

export interface TabItem {
  value: TabValue;
  label: string;
  disabled?: boolean;
}
