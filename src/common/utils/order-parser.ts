import { FindOptionsOrder } from 'typeorm';
import { SortParams } from '../pipe/sort.pipe';

type OrderNode = SortParams['sortOrder'] | { [key: string]: OrderNode };

export function orderParser<T>(
  path: SortParams['sortBy'],
  leaf: SortParams['sortOrder'],
): FindOptionsOrder<T> {
  if (!path) throw new Error('Il path di ordinamento è vuoto');

  const nested = path
    .split('.')
    .reverse()
    .reduce<OrderNode>((acc, key) => ({ [key]: acc }), leaf);

  // Cast mandatory: TS cannot verify dynamically the match with T
  return nested as FindOptionsOrder<T>;
}
