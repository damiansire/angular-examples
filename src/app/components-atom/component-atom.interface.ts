export interface CodeLineElement {
  text: string;
  color: boolean;
}
export interface CodeLine {
  line: CodeLineElement[] | any;
  active: boolean;
  id?: string;
}
