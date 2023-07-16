export interface StepsProp {
  icon?: React.ReactNode;
  name?: string;
  children?: React.ReactNode;
  step?: number;
}

export interface StepsProps extends Array<StepsProp> {}
