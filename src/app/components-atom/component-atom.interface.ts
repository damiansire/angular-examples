export interface CodeLineElement {
  id: string;
  text: string;
  selected: boolean;
  reservedWord?: boolean;
}
export interface CodeLine {
  line?: CodeLineElement[] | any;
  elements?: CodeLineElement[];
  selected?: boolean;
  id?: string;
  // @deprecated
  active?: boolean;
  indent?: number;
}
