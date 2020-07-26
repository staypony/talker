import Vue from 'vue';
import vuescroll from 'vuescroll';

Vue.use(vuescroll, {
  ops: {
    scrollPanel: {
      easing: 'easeInQuad',
      scrollingX: false,
    },
    rail: {
      background: '#00000044',
      opacity: 1,
      size: '8px',
      specifyBorderRadius: false,
      gutterOfEnds: '16px',
      gutterOfSide: '4px',
    },
    bar: {
      keepShow: true,
      background: '#00000044',
      minSize: 0.2,
      size: '8px',
    },
  },
});
