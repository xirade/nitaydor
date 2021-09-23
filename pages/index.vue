<template>
  <Home dir="rtl" />
</template>

<script>
const img =
  "https://res.cloudinary.com/dxeebmzdv/image/upload/v1632401034/nitay_upvtvm_1_t9p3vc.png";
export default {
  data() {
    return {
      title: "נתאי דור - יועץ נדל''ן האיש שלך לבית חלומותיך",
      description:"אני מציע שירותי נדל''ן בבאר יעקב וסביבה במחירים תחרותיים. יועץ נדל''ן פרטי נתאי דור. שיתוף פעולה מוצלח - מובטח ביושר ובמקצועיות",
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        name: "נתאי דור",
        image: img,
        telephone: "+9725357888",
        email: "dornitay@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Yahalom St 3, Be'er Ya'akov",
          addressLocality: "באר יעקב",
          addressCountry: "ישראל",
          postalCode: "70300"
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: {
            "@type": "DayOfWeek",
            name:
              "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, PublicHolidays"
          },
          opens: "2021-09-19T08:00",
          closes: "2021-09-19T20:00"
        },
        url: "https://nitaydor-nadlan.com/"
      }
    };
  },
  head() {
    return {
      script: [{ type: "application/ld+json", json: this.structuredData }],
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
            this.description
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: img
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: img
        },
        {
          hid: "og:image",
          property: "og:image",
          content: img
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.title
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "1670"
        },
        {
          hid: "og:image:height",
          property: "og:image:alt",
          content: "835"
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
          content: this.title
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
