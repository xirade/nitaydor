<template>
  <Home dir="rtl" />
</template>

<script>
export default {
  data() {
    return {
      title: "נתאי דור - יועץ נדל''ן",
        img:
          "https://res.cloudinary.com/dxeebmzdv/image/upload/q_auto:good/v1631721290/nitay_upvtvm.webp",
      structuredData: {
          "@context": "http://schema.org",
          "@type" : "LocalBusiness",
          "name" : "נתאי דור - יועץ נדל''ן",
          "image" : `${this.img}`,
          "telephone" : "+9725357888",
          "email" : "dornitay@gmail.com",
          "address" : {
            "@type" : "PostalAddress",
            "streetAddress" : "Yahalom St 3, Be'er Ya'akov",
            "addressLocality" : "באר יעקב",
            "addressCountry" : "ישראל",
            "postalCode" : "70300"
          },
          "openingHoursSpecification" : {
            "@type" : "OpeningHoursSpecification",
            "dayOfWeek" : {
              "@type" : "DayOfWeek",
              "name" : "א-ו"
            },
            "opens" : "2021-09-19T08:00",
            "closes" : "2021-09-19T20:00"
          },
          "url" : "https://nitaydor-nadlan.com/"
      },
    };
  },
  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }],
      title: this.title,
      meta: [
        {
          hid: "author",
          name: "author",
          content: "נתאי דור"
        },
        {
          hid: "description",
          name: "description",
          content:
            "האיש שלך לבית חלומותך! התמחות בבתי מגורים, ניתוח סביבה קהילתית להתאמה אישית, אפיון והתאמה של הנכס בהתאם למיקומו ואומדנו ליווי אישי בתהליכי רכישה/ מכירה."
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
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
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "1920"
        },
        {
          hid: "og:image:height",
          property: "og:image:alt",
          content: "1012"
        },
        {
          hid: "og:image:type",
          property: "og:image:type",
          content: "image/webp"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "he_IL"
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "נתאי דור - יועץ נדל''ן"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "http://nitaydor-nadlan.com/"
        },
        {
          hid: "robots",
          property: "robots",
          content: "index,follow"
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
