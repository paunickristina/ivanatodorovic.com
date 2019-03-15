<template>
  <main id="main">
    <FilmsBlock />
    <NewsBlock />
    <BioBlock />
    <LecturerBlock />
  </main>
</template>

<script>
import NewsBlock from "~/components/News/Block.vue"
import BioBlock from "~/components/Bio/Block.vue"
import LecturerBlock from "~/components/Lecturer/Block.vue"
import FilmsBlock from "~/components/Films/Block.vue"
export default {
  components: {
    NewsBlock,
    BioBlock,
    LecturerBlock,
    FilmsBlock
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/base/_base.scss';
  .test {
    text-align: center;
    background: red;
    height: 10rem;
    color: green;
    @include font-size(48, 34);
    @include breakpoint(overPhone){
      color: blue;
      height: 20rem;
    }
  }
</style>
