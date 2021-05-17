import { makeSchema } from 'nexus';
import * as types from './types/index';

const schema = makeSchema({
  types: [types]
});

export default schema;
