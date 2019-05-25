<template>
  <svg>
    <defs>
      <linearGradient id="header-gradient" x2="0.35" y2="1">
        <stop offset="0%" :stop-color="gradient.start" />
        <stop offset="100%" :stop-color="gradient.stop" />
      </linearGradient>
      <filter id="dropshadow" height="150%">
        <feDropShadow />
      </filter>
    </defs>
    <polygon :points="points" />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 0,
    },
    triangles: {
      type: Number,
      default: 8,
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      gradient: {
        start: '#ffffff00',
        stop: '#91e5cbaa',
      },
      pointData: [],
    };
  },
  computed: {
    viewbox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    triangleSize() {
      return this.width / this.triangles;
    },
    points() {
      return this.pointData.map(point => `${point.x},${point.y}`).join(' ');
    },
  },
  watch: {
    height() {
      this.buildTriangles();
    },
  },
  methods: {
    buildTriangles() {
      this.pointData.push({ x: 0, y: 0 });

      const halfSize = this.triangleSize / 2;
      for (let i = 0; i < this.triangles; i += 1) {
        let x = i * this.triangleSize;

        this.pointData.push({ x, y: this.height });
        x += halfSize;
        this.pointData.push({ x, y: this.height + halfSize });
        x += halfSize;
        this.pointData.push({ x, y: this.height });
      }

      this.pointData.push({ x: this.width, y: 0 });
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  height: 200%;
  left: 0;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

polygon {
  fill: url(#header-gradient);
  filter: url(#dropshadow);
}
</style>
