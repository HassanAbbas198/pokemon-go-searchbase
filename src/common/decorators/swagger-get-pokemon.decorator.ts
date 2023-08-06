import { applyDecorators } from '@nestjs/common';
import { ApiQuery, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { Pokemon } from '../../pokemon/entities';

export function SwaggerGetPokemon() {
  return applyDecorators(
    ApiQuery({
      name: 'page',
      type: Number,
      description: 'Page number for pagination',
      required: false,
    }),
    ApiQuery({
      name: 'limit',
      type: Number,
      description: 'Number of items per page',
      required: false,
    }),
    ApiQuery({
      name: 'search',
      type: String,
      description: 'Pokemon name to search for',
      required: false,
    }),
    ApiQuery({
      name: 'generation',
      type: Number,
      description: 'Pokemon generation to filter by',
      required: false,
    }),
    ApiOkResponse({
      description: 'List of Pokemon based on the provided query parameters',
      schema: {
        type: 'object',
        properties: {
          data: { type: 'array', items: { $ref: getSchemaPath(Pokemon) } },
          currentPage: { type: 'number' },
          limit: { type: 'number' },
          totalRecords: { type: 'number' },
          totalPages: { type: 'number' },
        },
      },
    }),
  );
}
