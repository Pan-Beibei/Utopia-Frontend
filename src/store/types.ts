// types.ts

export type _Array<
  T,
  N extends number,
  R extends unknown[]
> = R["length"] extends N ? R : _Array<T, N, [T, ...R]>;

export type FixedLengthArray<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _Array<T, N, []>
  : never;
