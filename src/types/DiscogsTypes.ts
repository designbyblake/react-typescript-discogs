export interface DiscogsCollection {
  pagination: Pagination;
  releases?: ReleasesEntity[] | null;
}
export interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: PaginationUrls;
}
export interface PaginationUrls {
  first?: string;
  last?: string;
  next?: string;
  prev?: string;
}
export interface ReleasesEntity {
  id: number;
  instance_id: number;
  date_added: string;
  rating: number;
  basic_information: BasicInformation;
  folder_id?: number;
  notes?: NotesEntity[] | null;
}

export interface BasicInformation {
  id: number;
  master_id: number;
  master_url?: string | null;
  resource_url: string;
  thumb: string;
  cover_image: string;
  title: string;
  year: number;
  formats?: FormatsEntity[] | null;
  labels?: LabelsEntity[] | null;
  artists?: ArtistsEntity[] | null;
  genres?: string[] | null;
  styles?: (string | null)[] | null;
}
export interface FormatsEntity {
  name: string;
  qty: string;
  text?: string | null;
  descriptions?: string[] | null;
}
export interface LabelsEntity {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
}
export interface ArtistsEntity {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}
export interface NotesEntity {
  field_id: number;
  value: string;
}
