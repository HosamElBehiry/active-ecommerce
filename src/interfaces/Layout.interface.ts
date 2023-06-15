export interface Layout {
  children?: React.ReactNode;
  media?: string;
  size?: string;
  padding?: string;
}

export interface Actions {
  children?: React.ReactNode;
  toggle?: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Option {
  title: string;
  link: string;
}

export interface Options extends Array<Option> {}
