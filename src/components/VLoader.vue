<script setup lang="ts"></script>

<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 17px;
  height: 17px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #1264a8;
  width: 10px;
  height: 10px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
