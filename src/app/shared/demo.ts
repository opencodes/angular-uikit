export interface Codes {
  import: string;
  html: string;
  component: string;
  properties: Property[];
  events: Event[];
  styling: Style[];
}

export interface Property {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface Event {
  name: string;
  parameters: string;
  description: string;
}

export interface Style {
  selector: string;
  description: string;
}
