export type CheckboxItem = {
  text: string;
  icon?: string;
  value: any;
};

export type CheckboxItemEvent = CheckboxItem & {
  checked: boolean;
};
