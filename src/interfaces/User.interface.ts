export interface AsideProps {
  children: React.ReactNode;
}
export interface UserProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserAsideProp {
  link: string;
  title: string;
  icon: React.ReactNode;
}

export interface UserAsideProps extends Array<UserAsideProp> {}
