<template>
  <svg>
    <defs>
      <linearGradient id="header-gradient" x2="0.35" y2="1">
        <stop offset="0%" :stop-color="gradient.start" />
        <stop offset="100%" :stop-color="gradient.stop" />
      </linearGradient>
      <filter id="dropshadow" height="150%">
        <feDropShadow dy="2" stdDeviation="4" />
      </filter>
    </defs>
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    targetID: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      gradient: {
        start: '#ffffff00',
        stop: '#91e5cbaa',
      },
      path: '',
      target: null,
    };
  },
  mounted() {
    this.target = document.getElementById(this.targetID);

    const rect = this.target.getBoundingClientRect();

    this.height = rect.y + rect.height + window.scrollY;
    this.width = window.innerWidth;
    this.halfWidth = this.width / 2;
    this.quarterWidth = this.width / 4;
    this.displacement = 50;
    this.ticker = 127;
    this.tick();
  },
  methods: {
    tick() {
      this.ticker = this.ticker < 255 ? this.ticker + 0.02 : 0;
      this.currentDisplacement = this.displacement * Math.sin(this.ticker);
      this.buildCurves();
      window.requestAnimationFrame(this.tick);
    },
    buildCurves() {
      const startPoint = { x: 0, y: this.height };
      const controlPoint = { x: this.quarterWidth, y: this.height - this.currentDisplacement };
      const midPoint = { x: this.halfWidth - this.currentDisplacement, y: this.height };
      const endPoint = { x: this.width, y: this.height };

      let pathString = `M 0 0 `;
      pathString += `L ${startPoint.x} ${startPoint.y} `;
      pathString += `Q ${controlPoint.x} ${controlPoint.y}, ${midPoint.x} ${midPoint.y} `;
      pathString += `T ${endPoint.x} ${endPoint.y} `;
      pathString += `L ${endPoint.x} 0 Z`;

      this.path = pathString;
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

polygon,
path {
  fill: url(#header-gradient);
  filter: url(#dropshadow);
}
</style>
