export type WithoutTypename<T> = {
  [K in keyof T as K extends '__typename' ? never : K]: T[K];
};