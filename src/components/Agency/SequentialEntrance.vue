<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script>
/* eslint no-param-reassign: "error" */

export default {
  props: {
    delay: { type: Number, default: 250 },
    className: { type: String, default: '' },
    animation: { type: String, default: 'entranceFromTop' },
  },
  mounted() {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (this.$el.children) {
                Array.from(this.$el.children).forEach((child, index) => {
                  return this.animateEntrance(child, index);
                });
              }
            } else if (this.$el.children) {
              Array.from(this.$el.children).forEach(child => {
                child.classList.remove(this.animation);
                child.style.opacity = 0;
              });
            }
          });
        },
        {
          threshold: 0,
        },
      );

      this.observer.observe(this.$el);
    });
  },
  methods: {
    animateEntrance(element, offset) {
      element.style.animationDelay = `${offset * this.delay}ms`;
      element.style.animationDuration = '1s';
      element.style.animationFillMode = 'forwards';
      element.style.animationTimingFunction = 'ease-in-out';
      element.style.opacity = 0;
      element.classList.add(this.animation);
    },
  },
};
</script>

<style lang="scss">
.entranceFromTop {
  animation-name: entranceFromTop;
}

@keyframes entranceFromTop {
  from {
    opacity: 0;
    transform: translateY(-64px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.entranceFromBottom {
  animation-name: entranceFromBottom;
}

@keyframes entranceFromBottom {
  from {
    opacity: 0;
    transform: translateY(64px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.entranceFromLeft {
  animation-name: entranceFromLeft;
}

@keyframes entranceFromLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.entranceFromRight {
  animation-name: entranceFromRight;
}

@keyframes entranceFromRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
