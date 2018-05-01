<style lang="scss">
@import "~gmf/components/MdLayout/mixins";
@import "./default";
@import "./dark";
@import "./blue";
@import "./green";
body {
  height: 100%;
  overflow-x:hidden;
  position: relative;
}

@include md-layout-small {
  body {
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

#gmfApp {
  max-height: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
  .logo {
    min-width: auto;
    padding-top: 4px;
    padding-bottom: 4px;
    .md-button-content {
      height: 100%;
    }
  }
}

.md-app-content {
  background-color: transparent !important;
  border: none!important;
  padding: 0px;
}

.md-app-toolbar {
  z-index: 4;
}
</style>