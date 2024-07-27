export interface NodeTree {
  name: string;
  x: number;
  y: number;
  color?: string;
}

export interface Link {
  source: string;
  target: string;
}
