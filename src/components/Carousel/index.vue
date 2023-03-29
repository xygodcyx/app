<template>
  <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carouselList in list"
        :key="carouselList.id">
        <img :src="carouselList.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.banner, {
            loop: true,
            // 方向
            direction: "horizontal",
            // 自动播放
            autoplay: {
              delay: 1000,
              disableOnInteraction: true,
            },
            // 分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 前进/后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style></style>
