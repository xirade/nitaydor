<template>
  <Home dir="rtl" />
</template>

<script>
export default {
  data() {
    return {
      img:
        "https://xirade.imgix.net/https%3A%2F%2Fres.cloudinary.com%2Fdxeebmzdv%2Fimage%2Fupload%2Fv1631721290%2Fnitay_upvtvm.png?s=f116eefed5cf1732abc81bba8b583715"
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: "האישי שלך לבית חלומותיך"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "נתאי דור - יועץ נדל''ן"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "האישי שלך לבית חלומותיך"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.img
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "נתאי דור - יועץ נדל''ן"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "נתאי דור - יועץ נדל''ן"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "האישי שלך לבית חלומותיך"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.img
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.img
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "נתאי דור - יועץ נדל''ן"
        }
      ]
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
