import { TransformFnParams } from '@nestjs/class-transformer';
import { GenericOrUndefined } from '../types/common/GenericOrUndefined';

export const lowerCaseTransformer = (
  params: TransformFnParams,
): GenericOrUndefined<string> => params.value?.toLowerCase().trim();
