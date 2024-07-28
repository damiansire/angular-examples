export interface CodeLineElement {
  text: string;
  color: boolean;
}
export interface CodeLine {
  line?: CodeLineElement[] | any;
  elements?: CodeLineElement[];
  active: boolean;
  id?: string;
}
