<template>
  <div
    class="container-fluid bg-primary d-flex flex-column justify-content-center align-items-center position-relative"
  >
    <div class="card">
      <div class="mySlides card" v-for="hotel in Hotels" :key="hotel.id">
        <div class="numbertext position-absolute">{{ hotel.id }} / 6</div>
        <img :src="hotel.img" style="width: 1000px; height: 450px" />
        <div class="bt-cont position-absolute w-100 h-100">
          <a
            class="btn btn-primary position-absolute"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#details"
            aria-expanded="false"
            aria-controls="details"
            @click="displayMenu('details')"
          >
            Details
          </a>
          <div class="collapse w-100 h-100" id="details">
            <div class="card card-body title w-50 position-absolute">
              <h3>{{ hotel.title }}</h3>
            </div>
            <div class="card card-body describe w-70 position-absolute">
              <p>
                {{ hotel.describe }}
              </p>
            </div>
            <div class="card card-body date position-absolute w-50">
              <h5>{{ hotel.date }}</h5>
            </div>
          </div>
        </div>
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <div class="caption-container">
      <p id="caption"></p>
    </div>

    <div class="row w-80 card d-flex flex-row">
      <div class="column" v-for="hotel in Hotels" :key="hotel.id">
        <img
          class="imgLayer cursor mb-3 mt-3"
          :src="hotel.img"
          style="width: 100%"
          @click="currentSlide(hotel.id)"
          :alt="hotel.substring"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { defineComponent } from 'vue'
import hotels from "../data/datas.json";

export default defineComponent({
  name: "imgSlider",
  data() {
    return {
      Hotels: hotels,
      slideIndex: 1,
    };
  },
  methods: {
    plusSlides(n: number) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n: number) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n: number) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let imgBox = document.getElementsByClassName("imgLayer");
      let captionText = document.getElementById("caption");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < imgBox.length; i++) {
        imgBox[i].className = imgBox[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      imgBox[this.slideIndex - 1].className += " active";
      captionText.innerHTML = imgBox[this.slideIndex - 1].alt;
    },
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
});
</script>

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
}

.mySlides {
  display: none;
  max-height: 800px;
}
.mySlides img {
  border-radius: 8px;
}

.cursor {
  cursor: pointer;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 55%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  top: 0;
}

.caption-container {
  text-align: center;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 16.66%;
}
.column img {
  border-radius: 8px;
}

.imgLayer {
  opacity: 0.6;
}

.active,
.imgLayer:hover {
  opacity: 1;
}
.bt-cont {
  top: 0%;
}
.bt-cont a {
  right: 4%;
  bottom: 4%;
}
.collapse {
  background: rgba(0, 0, 0, 0.4);
}
.bt-cont .card {
  background: none;
  color: white;
  border: none;
}
.title {
  text-align: left;
}
.describe {
  text-align: left;
  bottom: 8%;
}
.date {
  text-align: left;
  bottom: 0%;
}
</style>
