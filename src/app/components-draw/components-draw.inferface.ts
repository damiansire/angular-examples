export interface NodeTree {
  name: string;
  x: number;
  y: number;
  id: string;
  color?: string;
}

export interface Link {
  source: string;
  target: string;
}
