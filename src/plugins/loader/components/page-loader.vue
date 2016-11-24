<template>
  <div class="codecasts-load-container" v-if="show">
    <div class="load-thecube">
    	<div class="load-cube load-c1"></div>
    	<div class="load-cube load-c2"></div>
    	<div class="load-cube load-c4"></div>
    	<div class="load-cube load-c3"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    show () {
      return this.$store.state.CODECASTS_LOADER.show
    }
  }
}
</script>

<style>
 html, body {
   height: 100%;
 }
  .codecasts-load-container {
    background-color: rgba(51, 51, 51, 0.57);
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100%;
  }
</style>

<style>
.load-thecube {
    width: 84px;
    height: 84px;
    margin: 0 auto;
    margin-top: 56px;
    position: relative;
    transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
}

.load-thecube .load-cube {
    position: relative;
    transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
}

.load-thecube .load-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
}

.load-thecube .load-cube:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    animation: load-fold-thecube 2.76s infinite linear both;
    -o-animation: load-fold-thecube 2.76s infinite linear both;
    -ms-animation: load-fold-thecube 2.76s infinite linear both;
    -webkit-animation: load-fold-thecube 2.76s infinite linear both;
    -moz-animation: load-fold-thecube 2.76s infinite linear both;
    transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
}

.load-thecube .load-c2 {
    transform: scale(1.1) rotateZ(90deg);
    -o-transform: scale(1.1) rotateZ(90deg);
    -ms-transform: scale(1.1) rotateZ(90deg);
    -webkit-transform: scale(1.1) rotateZ(90deg);
    -moz-transform: scale(1.1) rotateZ(90deg);
}

.load-thecube .load-c3 {
    transform: scale(1.1) rotateZ(180deg);
    -o-transform: scale(1.1) rotateZ(180deg);
    -ms-transform: scale(1.1) rotateZ(180deg);
    -webkit-transform: scale(1.1) rotateZ(180deg);
    -moz-transform: scale(1.1) rotateZ(180deg);
}

.load-thecube .load-c4 {
    transform: scale(1.1) rotateZ(270deg);
    -o-transform: scale(1.1) rotateZ(270deg);
    -ms-transform: scale(1.1) rotateZ(270deg);
    -webkit-transform: scale(1.1) rotateZ(270deg);
    -moz-transform: scale(1.1) rotateZ(270deg);
}

.load-thecube .load-c2:before {
    animation-delay: 0.35s;
    -o-animation-delay: 0.35s;
    -ms-animation-delay: 0.35s;
    -webkit-animation-delay: 0.35s;
    -moz-animation-delay: 0.35s;
}

.load-thecube .load-c3:before {
    animation-delay: 0.69s;
    -o-animation-delay: 0.69s;
    -ms-animation-delay: 0.69s;
    -webkit-animation-delay: 0.69s;
    -moz-animation-delay: 0.69s;
}

.load-thecube .load-c4:before {
    animation-delay: 1.04s;
    -o-animation-delay: 1.04s;
    -ms-animation-delay: 1.04s;
    -webkit-animation-delay: 1.04s;
    -moz-animation-delay: 1.04s;
}

@keyframes load-fold-thecube {
    0%, 10% {
        transform: perspective(158px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(158px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(158px) rotateY(180deg);
        opacity: 0;
    }
}

@-o-keyframes load-fold-thecube {
    0%, 10% {
        -o-transform: perspective(158px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        -o-transform: perspective(158px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        -o-transform: perspective(158px) rotateY(180deg);
        opacity: 0;
    }
}

@-ms-keyframes load-fold-thecube {
    0%, 10% {
        -ms-transform: perspective(158px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        -ms-transform: perspective(158px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        -ms-transform: perspective(158px) rotateY(180deg);
        opacity: 0;
    }
}

@-webkit-keyframes load-fold-thecube {
    0%, 10% {
        -webkit-transform: perspective(158px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        -webkit-transform: perspective(158px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        -webkit-transform: perspective(158px) rotateY(180deg);
        opacity: 0;
    }
}

@-moz-keyframes load-fold-thecube {
    0%, 10% {
        -moz-transform: perspective(158px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        -moz-transform: perspective(158px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        -moz-transform: perspective(158px) rotateY(180deg);
        opacity: 0;
    }
}
</style>
