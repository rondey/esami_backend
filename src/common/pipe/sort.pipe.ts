import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

export interface SortParams {
  sortBy: string;
  sortOrder: 'ASC' | 'DESC';
}

interface SortPipeOptions {
  defaultSortBy?: string;
  defaultSortOrder?: 'ASC' | 'DESC';
  allowedSortColumns?: string[];
}

// Tipo per il valore in ingresso dalla query string
interface SortQuery {
  sortBy?: string;
  sortOrder?: string;
}

@Injectable()
export class SortPipe implements PipeTransform {
  constructor(private options: SortPipeOptions = {}) {}

  transform(value: SortQuery): SortParams {
    const {
      defaultSortBy = 'id',
      defaultSortOrder = 'ASC',
      allowedSortColumns,
    } = this.options;

    const sortBy = value?.sortBy || defaultSortBy;
    let sortOrder = (value?.sortOrder || defaultSortOrder).toUpperCase();

    if (!['ASC', 'DESC'].includes(sortOrder)) {
      sortOrder = 'ASC';
    }

    if (allowedSortColumns && !allowedSortColumns.includes(sortBy)) {
      throw new BadRequestException(
        `Invalid sortBy column: ${sortBy}. Allowed: ${allowedSortColumns.join(', ')}`,
      );
    }

    return { sortBy, sortOrder: sortOrder as 'ASC' | 'DESC' };
  }
}
