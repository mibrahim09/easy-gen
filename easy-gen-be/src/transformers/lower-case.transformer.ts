import { MaybeType } from '../types/common/maybe-type';
import { TransformFnParams } from '@nestjs/class-transformer';

export const lowerCaseTransformer = (
  params: TransformFnParams,
): MaybeType<string> => params.value?.toLowerCase().trim();
