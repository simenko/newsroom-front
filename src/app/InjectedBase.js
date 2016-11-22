export default function BaseAndInjects(dependencies) {
  class InjectedBase {
    constructor(...args) {
      InjectedBase.$inject.forEach((item, index) => { this[item] = args[index]; });
    }
  }
  InjectedBase.$inject = dependencies.split(' ');
  return InjectedBase;
}
