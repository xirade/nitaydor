<template>
  <Home dir="rtl" />
</template>

<script>
export default {
  data() {
    return {
      img:
        "https://res.cloudinary.com/dxeebmzdv/image/upload/q_auto:good/v1631721290/nitay_upvtvm.webp"
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "האיש שלך לבית חלומותך! התמחות בבתי מגורים, ניתוח סביבה קהילתית להתאמה אישית, אפיון והתאמה של הנכס בהתאם למיקומו ואומדנו ליווי אישי בתהליכי רכישה/ מכירה."
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "נתאי דור - יועץ נדל''ן"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "האיש שלך לבית חלומותך! התמחות בבתי מגורים, ניתוח סביבה קהילתית להתאמה אישית, אפיון והתאמה של הנכס בהתאם למיקומו ואומדנו ליווי אישי בתהליכי רכישה/ מכירה."
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
          content:
            "האיש שלך לבית חלומותך! התמחות בבתי מגורים, ניתוח סביבה קהילתית להתאמה אישית, אפיון והתאמה של הנכס בהתאם למיקומו ואומדנו ליווי אישי בתהליכי רכישה/ מכירה."
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
