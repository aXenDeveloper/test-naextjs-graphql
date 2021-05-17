import { objectType } from 'nexus';

export const Framework = objectType({
  name: 'Framework',
  definition(t) {
    t.id('id');
    t.string('name');
  }
});
