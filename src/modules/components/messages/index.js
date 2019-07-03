import promptMessages from './promptMessages.vue';

/* istanbul ignore next */
promptMessages.install = function (Vue) {
  Vue.component(promptMessages.name, promptMessages);
};

export default promptMessages;
