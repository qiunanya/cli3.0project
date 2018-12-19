<template>
  <div class="lay-container">
    <lay-header></lay-header>
    <div class="lay-body">
      <lay-nav></lay-nav>
      <div class="lay-inner">
        <lay-breadcrumb></lay-breadcrumb>
        <div class="lay-content">
          <transition name="fade-transverse">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </div>
        <lay-footer></lay-footer>
      </div>
    </div>
  </div>
</template>
<script>
import LayHeader from "./header";
import LayFooter from "./footer";
import LayBreadcrumb from "./breadcrumb";
import LayNav from "./nav";
export default {
  components: {
    LayHeader,
    LayFooter,
    LayBreadcrumb,
    LayNav
  }
};
</script>

<style>
.lay-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: stretch;
}
.lay-body {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  z-index: 1;
  width: 100%;
  overflow: hidden;
}
.lay-inner {
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f0f0f0;
  padding: 0 10px;
  overflow: hidden;
}
.lay-content {
  height: calc(100% - 60px);
  width: 100%;
  position: relative;
}
.lay-content > div {
  position: absolute;
}
.fade-transverse-leave-active,
.fade-transverse-enter-active {
  transition: all 0.5s;
}
.fade-transverse-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transverse-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>