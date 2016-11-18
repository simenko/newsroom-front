export default function BaseDoInject(deps) {
  const dependencies = deps.split(' ');

  return class BaseController {
    static get $inject() {
      return dependencies;
    }

    constructor(...args) {
      BaseController.$inject.forEach((item, index) => { this[item] = args[index]; });
    }
  };
}
