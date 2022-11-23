export const templates = ['component'] as const;

export type Args = string[];
export type SupportedTemplate = typeof templates[number];
export type CustomTemplate = `file:${string}`;
export type Template = SupportedTemplate | CustomTemplate;
export type RawOptions = {
  component: string;
  template?: Template;
};
export type Options = Omit<RawOptions, 'skipPrompts'> & {
  template: Template;
};
