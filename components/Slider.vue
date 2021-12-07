<template>
  <div class="relative h-56 lg:h-108 sm:h-72 md:h-96">
    <transition-group name="fade" tag="div">
      <div v-for="slide in [currentIndex]" :key="slide">
        <img
          class="absolute w-full object-cover h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          v-lazy="currentImg.src"
          :alt="currentImg.alt"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import { generateSlides } from "../utils/generateSlides";
export default {
  data() {
    return {
      slides: generateSlides,
      timer: null,
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
    },
  },
  computed: {
    currentImg() {
      const image = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return image;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 4px;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
