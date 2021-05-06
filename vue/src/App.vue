<template>
  <div id="app">
    <router-view />
    <div class="wip-label">work in progress</div>
  </div>
</template>

<style>
#app {
  position: relative;
}

#app .wip-label {
  position: absolute;
  top: 0;
  right: 0;
  background: #ffdd57;
  color: #7957d5;
  transform: translate(10rem, 3rem) rotate(45deg);
  padding: 0.25rem 10rem;
  text-align: center;
  border: 2px dashed;
  white-space: nowrap;
}
</style>
