import BaseAndInjects from '../../InjectedBase';

export const bindings = {
  story: '<',
  preview: '<',
};

export default class controller extends BaseAndInjects('moment session') {
}
