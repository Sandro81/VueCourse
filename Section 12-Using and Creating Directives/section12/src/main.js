import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
  //bind(el, binding, vnode) {
  bind(el) {
    //el.style.backgroundColor = 'green';
    el.style.backgroundColor = 'green';
  }
});

Vue.directive('highlightWithBinding', {
  bind(el, binding) {
    el.style.backgroundColor = binding.value;
  }
});

Vue.directive('highlightWithBindingWithArg', {
  bind(el, binding) {
    if(binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

Vue.directive('highlightWithBindingWithArgAndModifier', {
  bind(el, binding) {
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
      setTimeout(() => {
        if(binding.arg == 'background') {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
