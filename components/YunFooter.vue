<script lang="ts" setup>
import { useScriptTag } from "@vueuse/core";
import YunFooter from "valaxy-theme-yun/components/YunFooter.vue";
import { onMounted } from "vue";
import { Rive } from "@rive-app/canvas";

useScriptTag("//vercount.one/js");

onMounted(() => {
  const rive = new Rive({
    src: "/riv/catti.riv",
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      rive.resizeDrawingSurfaceToCanvas();
    },
  });
});
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>
    <canvas id="canvas" class="catti" />
  </YunFooter>
</template>

<style scoped>
.catti {
  width: 150px;
  height: 150px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
</style>
