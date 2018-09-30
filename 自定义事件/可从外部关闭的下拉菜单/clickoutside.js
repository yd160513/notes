Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    // 将这个事件赋给变量，以备销毁时使用
    el._vueClickOutside_ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind(el, binding) {
    document.removeEventListener('click', el._vueClickOutside_);
    delete el._vueClickOutside_;
  }
});