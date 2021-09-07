<template>
  <div class="structure">
    <div class="pc-page">
      <div class="pc-container">
        <div class="pc-carousel">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.pc-page {
  width: 100%;
  height: 100%;
  position: fixed;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  background: #fafafa;
  justify-content: center;
}
.pc-container {
  width: 100vw;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}
.pc-carousel {
  width: 62.5vw;
  height: 60vh;
  position: relative;
  box-shadow: 0 0.208vw 0.781vw 0.521vw rgb(103 47 123 / 2%);
  border-radius: 0.417vw;
  cursor: pointer;
}
</style>