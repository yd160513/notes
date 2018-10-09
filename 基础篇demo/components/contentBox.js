Vue.component('content-box', {
  template: `
    <div class="btn_box">
      <h3 class="title">
          {{ title }}
      </h3>
      <div class="btn_content">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    title: String
  }
});