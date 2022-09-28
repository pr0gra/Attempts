export interface IRepo {
  id: number;
  name: string;
  has_issues: boolean;
  url: string;
  open_issues: number;
  updated_at: string;
}
