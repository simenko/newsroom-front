import InjectToBase from '../../InjectedBase';

export const bindings = {
  story: '<',
  preview: '<',

};
export class controller extends InjectToBase('moment session') {
  constructor(...args) {
    super(...args);
  }
}
