import BaseDoInject from '../../BaseController';

export const bindings = {
  story: '<',
  preview: '<',

};
export class controller extends BaseDoInject('moment session') {
  constructor(...args) {
    super(...args);
  }
}
