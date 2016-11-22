import BaseAndInjects from '../../InjectedBase';

export const bindings = {
  story: '<',
  preview: '<',

};
export class controller extends BaseAndInjects('moment session') {
  constructor(...args) {
    super(...args);
  }
}
