<template>
  <div class="font-quicksand">
    <header>
      <nav class="sticky top-0 z-10 bg-gray-100">
        <div class="px-4">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center space-s-6 text-gray-900 font-medium">
              <a class="hover:text-gray-500 " href="#contact">Contact</a>
              <a class="hover:text-gray-500 " href="#about">About</a>
              <a
                class="border-2 hover:text-gray-500 hover:border-gray-500 border-gray-900 py-2 px-4"
                href="#"
                >Home</a
              >
            </div>
            <span class="text-2xl text-gray-900 font-bold">ND</span>
          </div>
        </div>
      </nav>
      <section class="relative flex">
        <img
          class="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="@/assets/images/nitay.png"
          alt="Nitay Dor"
        />
        <div
          class="absolute md:left-28 lg:left-1/4 left-14 inset-y-1/3 text-right"
        >
          <h1 class="md:text-7xl text-5xl">ניתאי דור</h1>
          <p class="text-2xl">יועץ נדל''ן</p>
        </div>
      </section>
    </header>
    <main id="about" class="max-w-7xl mx-auto px-4">
      <article class="text-right my-8">
        <h2 class="text-4xl">למה לבחור דווקא בי ?</h2>
        <div class="flex lg:flex-row flex-col mt-12 mb-20">
          <div
            class="relative w-full lg:w-3/4 p-14 text-left text-4xl bg-gray-100"
          >
            <q dir="ltr">
              The house of the future won't just be better than the house you
              have today.</q
            >
          </div>
          <p class="text-xl w-full p-5 text-justify rtl">
            <span class="text-2xl">
              היי חברים! שמי <strong>נתאי דור</strong> ואני יועץ הנדל"ן ב-
              <strong>RE/MAX</strong></span
            >
            <br class="mb-3" />
            אני מזמין אותך להשתמש בשירותי הסוכנות שלי. אני מתווך נדל"ן, אני
            מחזיק את האצבע על הדופק של שוק הנדל"ן ויודע הכל על נדל"ן בישראל.
            הצוות שלי כולל מומחים ברמה גבוהה: מומחי נדל"ן, עורכי דין, מתווכי
            משכנתאות. אנו מעריכים כל אחד מלקוחותינו ועושים כמיטב יכולתנו לעמוד
            בציפיותיך. אני באופן אישי שולט בתהליכי העבודה ומבטיח כי תקבל שירות
            מעולה ורגשות חיוביים משיתוף פעולה איתנו. אתה יכול להיות בטוח שכל
            העסקאות עם הנדל"ן שלך יבוצעו בבטחה, בזמן וברמה מקצועית גבוהה.
          </p>
        </div>
      </article>
      <article class="my-8">
        <img
          class="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          alt="building"
        />
        <div class="flex md:flex-row flex-col-reverse items-center p-3 my-5">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/license.jpg"
            alt="license"
          />
          <p class="p-5 text-xl">
            אין משימה כזו בשבילי שאני לא מוכן לקחת על עצמי. נדל"ן יוקרתי, נדל"ן
            מסחרי, מכירת או קניית דירה, השכרה - כל אלה אתגרים מעניינים. הדבר
            החשוב ביותר הוא שעל ידי פתרון בעיות אלה, אני מבטיח שכל הצדדים יהיו
            מרוצים.
            <br class="mb-3" />
            התמחות בבתי מגורים, ניתוח סביבה קהילתית להתאמה אישית ניתוח אפיון
            והתאמה של הנכס בהתאם למיקומו ואומדנו ליווי אישי בתהליכי רכישה/מכירה
            הגדלת פוטנציאל החשיפה למעגל לקוחות רחב בעל ידע רחב בתכניות מתאר
            עתידיות באזור מגוריך.
          </p>
        </div>
        <img
          class="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full mb-8"
          src="https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          alt="building"
        />
      </article>
      <article id="contact" class="py-5">
        <h2 class="text-center text-4xl">נהיה בקשר</h2>
        <form dir="ltr" action="#" class="mx-auto w-full md:w-3/4 lg:w-3/6 p-5">
          <div class="p-3">
            <input
              class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div class="p-3">
            <input
              class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="p-3">
            <input
              class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="tel"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div class="p-3">
            <textarea
              class="resize-none border block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="p-3 pt-4 flex items-center justify-between">
            <button
              class="font-bold hover:bg-gray-800 hover:text-gray-50 border-2 border-gray-700 py-3 px-4 text-2xl"
            >
              Contact me
            </button>
            <div>
              <button
                class=" p-2 border-2 border-gray-700 font-semibold text-white inline-flex items-center space-x-2"
              >
                <svg
                  class="w-5 h-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </button>
              <button
                class="p-2 border-2 border-gray-700 font-semibold text-white inline-flex items-center space-x-2"
              >
                <svg
                  class="w-5 h-5"
                  role="img"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.668 0C18.6914 0 0 18.6914 0 41.668V108.332C0 131.309 18.6914 150 41.668 150H108.332C131.309 150 150 131.309 150 108.332V41.668C150 18.6914 131.309 0 108.332 0H41.668ZM41.668 16.668H108.332C122.117 16.668 133.332 27.8828 133.332 41.668V108.332C133.332 122.117 122.117 133.332 108.332 133.332H41.668C27.8828 133.332 16.668 122.117 16.668 108.332V41.668C16.668 27.8828 27.8828 16.668 41.668 16.668ZM116.668 25C116.121 25 115.578 25.0547 115.039 25.1602C114.504 25.2656 113.984 25.4258 113.477 25.6328C112.973 25.8438 112.492 26.1016 112.035 26.4062C111.582 26.707 111.16 27.0547 110.773 27.4414C110.387 27.8281 110.043 28.25 109.738 28.7031C109.434 29.1602 109.176 29.6406 108.969 30.1445C108.758 30.6484 108.602 31.1719 108.492 31.707C108.387 32.2461 108.332 32.7852 108.332 33.332C108.332 33.8789 108.387 34.4219 108.492 34.9609C108.602 35.4961 108.758 36.0156 108.969 36.5234C109.176 37.0273 109.434 37.5078 109.738 37.9648C110.043 38.418 110.387 38.8398 110.773 39.2266C111.16 39.6133 111.582 39.957 112.035 40.2617C112.492 40.5664 112.973 40.8242 113.477 41.0312C113.984 41.2422 114.504 41.3984 115.039 41.5078C115.578 41.6133 116.121 41.668 116.668 41.668C117.215 41.668 117.754 41.6133 118.293 41.5078C118.828 41.3984 119.352 41.2422 119.855 41.0312C120.359 40.8242 120.84 40.5664 121.297 40.2617C121.75 39.957 122.172 39.6133 122.559 39.2266C122.945 38.8398 123.293 38.418 123.594 37.9648C123.898 37.5078 124.156 37.0273 124.367 36.5234C124.574 36.0156 124.734 35.4961 124.84 34.9609C124.945 34.4219 125 33.8789 125 33.332C125 32.7852 124.945 32.2461 124.84 31.707C124.734 31.1719 124.574 30.6484 124.367 30.1445C124.156 29.6406 123.898 29.1602 123.594 28.7031C123.293 28.25 122.945 27.8281 122.559 27.4414C122.172 27.0547 121.75 26.707 121.297 26.4062C120.84 26.1016 120.359 25.8438 119.855 25.6328C119.352 25.4258 118.828 25.2656 118.293 25.1602C117.754 25.0547 117.215 25 116.668 25ZM75 33.332C52.0234 33.332 33.332 52.0234 33.332 75C33.332 97.9766 52.0234 116.668 75 116.668C97.9766 116.668 116.668 97.9766 116.668 75C116.668 52.0234 97.9766 33.332 75 33.332ZM75 50C88.7852 50 100 61.2148 100 75C100 88.7852 88.7852 100 75 100C61.2148 100 50 88.7852 50 75C50 61.2148 61.2148 50 75 50Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </article>
    </main>
    <footer>
      <nav dir="ltr" class="z-10 py-5 sm sm:py-0 bg-gray-100">
        <div class="px-4">
          <div
            class="flex flex-col sm:flex-row items-center justify-between h-16"
          >
            <div class="flex space-s-6 text-gray-900 font-medium">
              <a class="hover:text-gray-500 " href="#">Home</a>
              <a class="hover:text-gray-500 " href="#about">About</a>
              <a class="hover:text-gray-500 " href="#contact">Contact</a>
            </div>
            <p class="text-center">
              Copyright 2021 by <a href="https://xifolio.com/">Xirade</a>.
              All Rights Reserved
            </p>
          </div>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
q {
  quotes: "“" "”" "‘" "’";
}
q::before {
  position: absolute;
  content: open-quote;
  font-size: 0;
  width: 30px;
  height: 30px;
  background-size: 30px 30px;
  margin-right: 10px;
  background-image: url("@/assets/images/quotes.svg");
}
q::after {
  content: close-quote;
}
</style>
