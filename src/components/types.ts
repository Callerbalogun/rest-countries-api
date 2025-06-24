export interface Country {
  name: {
    common?: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  subregion?: string;
  capital?: string[];
  cca3: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
}
