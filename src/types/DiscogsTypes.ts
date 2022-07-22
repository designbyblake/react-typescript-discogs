export interface IDiscogsCollection {
  pagination: IPagination;
  releases?: IReleasesEntity[] | null;
}
export interface IPagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: IPaginationUrls;
}
export interface IPaginationUrls {
  first?: string;
  last?: string;
  next?: string;
  prev?: string;
}
export interface IReleasesEntity {
  id: number;
  instance_id: number;
  date_added: string;
  rating: number;
  basic_information: IBasicInformation;
  folder_id?: number;
  notes?: INotesEntity[] | null;
}

export interface IBasicInformation {
  id: number;
  master_id: number;
  master_url?: string | null;
  resource_url: string;
  thumb: string;
  cover_image: string;
  title: string;
  year: number;
  formats?: IFormatsEntity[] | null;
  labels?: ILabelsEntity[] | null;
  artists?: IArtistsEntity[] | null;
  genres?: string[] | null;
  styles?: (string | null)[] | null;
}
export interface IFormatsEntity {
  name: string;
  qty: string;
  text?: string | null;
  descriptions?: string[] | null;
}
export interface ILabelsEntity {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
}
export interface IArtistsEntity {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}
export interface INotesEntity {
  field_id: number;
  value: string;
}
