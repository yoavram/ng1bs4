// Import Angular Resources
import template from './alert-demo.html';
import controller from './alert-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./alert-demo.html';
import ControllerRaw from '!raw-loader!./alert-demo.controller.js';
import MarkdownRaw from '!raw-loader!./alert-demo.md';

// manipulate controller to pass raw files up to demo
controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
  this.demo.js = ControllerRaw;
  this.demo.md = MarkdownRaw;
};

// Component definition
const Component = {
  require: {
    demo: '^demo'
  },
  template,
  controller
};

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.alertDemo', [])
  .component('alertDemo', Component)
  .name;
