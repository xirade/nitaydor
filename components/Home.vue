<template>
  <transition-group tag="div" appear @before-enter="beforeEnter" @enter="enter">
    <div key="div" class="font-rubik bg-gray-50">
      <header>
        <nav class="sticky top-0 z-10 bg-gray-100">
          <div class="px-4">
            <div class="flex items-center justify-between h-16">
              <div
                class="flex items-center space-s-6 text-gray-900 font-medium"
              >
                <a
                  class="transition duration-500 ease-in-out hover:text-gray-500 "
                  href="#contact"
                  >Contacts</a
                >
                <a
                  class="transition duration-500 ease-in-out hover:text-gray-500 "
                  href="#about"
                  >About</a
                >
                <a
                  class="border-2 transition duration-500 ease-in-out hover:bg-gray-800 hover:text-gray-50 border-gray-700 py-2 px-4"
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
            src="https://xirade.imgix.net/https%3A%2F%2Fres.cloudinary.com%2Fdxeebmzdv%2Fimage%2Fupload%2Fv1631721290%2Fnitay_upvtvm.png?s=f116eefed5cf1732abc81bba8b583715"
            alt="Nitay Dor"
          />
          <div
            class="absolute xl:left-1/4 lg:left-40 sm:left-14 left-10 inset-y-1/3 text-right"
          >
            <h1 class="md:text-8xl sm:text-5xl text-4xl ">ניתאי דור</h1>
            <p class="text-2xl">יועץ נדל''ן</p>
          </div>
        </section>
      </header>
      <main id="about" class="max-w-7xl mx-auto px-4">
        <article class="text-right my-8">
          <h2 class="md:text-5xl text-4xl mr-5">קצת על עצמי</h2>
          <div class="flex lg:flex-row flex-col-reverse mt-4 mb-20">
            <div
              class="relative w-full lg:w-3/4 p-14 text-left text-4xl lg:text-5xl bg-gray-100"
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
              <br />

              <span class="block leading-relaxed mt-3">
                אני מזמין אותכם להשתמש בשירותי הסוכנות שלי. אני מתווך נדל"ן, אני
                מחזיק את האצבע על הדופק של שוק הנדל"ן ויודע הכל על נדל"ן בישראל.
                הצוות שלי כולל מומחים ברמה גבוהה: מומחי נדל"ן, עורכי דין, מתווכי
                משכנתאות. אנו מעריכים כל אחד מלקוחותינו ועושים כמיטב יכולתנו
                לעמוד בציפיותיך. אני באופן אישי שולט בתהליכי העבודה ומבטיח כי
                תקבל שירות מעולה ורגשות חיוביים משיתוף פעולה איתנו. אתה יכול
                להיות בטוח שכל העסקאות עם הנדל"ן שלך יבוצעו בבטחה, בזמן וברמה
                מקצועית גבוהה.</span
              >
            </p>
          </div>
        </article>
        <article class="my-8">
          <img
            class="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            alt="building"
          />
          <div
            class="bg-gray-100 flex lg:flex-row flex-col items-start p-3 my-5"
          >
            <div class="p-5">
              <h3 class="text-2xl font-bold mb-4">למה לבחור דווקא בי ?</h3>
              <ul class="list-disc text-xl text-justify leading-relaxed">
                <li class="mb-3">
                  נדל"ן דורש לא רק את האפשרות למצוא לקוחות או חפץ, אלא גם ללוות
                  את העסקה. בממוצע, לקוחותיי מקבלים הצעות שהן רווחיות ב -10%
                  מהשוק, מכיוון שאני משתלט על תהליך המשא ומתן. אין משימה כזו
                  בשבילי שאני לא מוכן לקחת על עצמי.
                </li>
                <li class="mb-3">
                  נדל"ן יוקרתי, נדל"ן מסחרי, מכירת או קניית דירה, השכרה - כל אלה
                  אתגרים מעניינים. הדבר החשוב ביותר הוא שעל ידי פתרון בעיות אלה,
                  אני מבטיח שכל הצדדים יהיו מרוצים.
                </li>
                <li>
                  התמחות בבתי מגורים, ניתוח סביבה קהילתית להתאמה אישית ניתוח
                  אפיון והתאמה של הנכס בהתאם למיקומו ואומדנו ליווי אישי בתהליכי
                  רכישה/מכירה הגדלת פוטנציאל החשיפה למעגל לקוחות רחב בעל ידע רחב
                  בתכניות מתאר עתידיות באזור מגוריך.
                </li>
              </ul>
            </div>
            <img
              class="w-full lg:h-full h-96 sm:h-84 object-contain"
              src="@/assets/images/license.jpg"
              alt="license"
            />
          </div>
          <img
            class="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full mb-8"
            src="https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="building"
          />
        </article>
        <article id="contact" class="pb-5">
          <h2 class="text-center text-5xl">נהיה בקשר</h2>
          <form
            dir="rtl"
            action="#"
            class="mx-auto w-full md:w-3/4 lg:w-4/6 p-5"
          >
          <transition name="slide-fade" v-if="success" appear>
            <div
              class="p-5 border border-red-400 bg-green-300 text-green-900 flex my-2"
            >
              <span class="mr-6">
                <span class="absolute follows-links successfull"></span>
              </span>
              הטופס נשלח בהצלחה!
            </div>
          </transition>
            <div class="flex flex-col md:flex-row">
              <div class="flex-1">
                <div class="p-3">
                  <input
                    class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-500 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="text"
                    id="name"
                    v-model="name"
                    placeholder="שם"
                    required
                  />
                </div>
                <div class="p-3">
                  <input
                    class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-500 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="email"
                    id="email"
                    v-model="email"
                    placeholder="מייל"
                    required
                  />
                </div>
                <div class="p-3">
                  <input
                    class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-500 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="tel"
                    id="tel"
                    v-model="tel"
                    placeholder="מספר טלפון"
                    required
                  />
                </div>
              </div>
              <div class="p-3 flex-1">
                <textarea
                  class="resize-none border block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-500 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
                  placeholder="הודעה"
                  id="message"
                  v-model="message"
                  required
                ></textarea>
              </div>
            </div>
            <div class="p-3 pt-4 flex flex-col-reverse md:flex-row items-center justify-between">
              <div class="mt-3 md:mt-0">
                <a
                  target="_blank"
                  href="https://facebook.com/nitay.dor"
                  class=" p-2 border-2 border-gray-700 transition duration-500 ease-in-out hover:bg-gray-800 font-semibold text-white inline-flex items-center space-x-2"
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
                </a>
                <a
                  href="https://www.instagram.com/nitay_dor/"
                  target="_blank"
                  class="p-2 border-2 border-gray-700 transition duration-500 ease-in-out hover:bg-gray-800 font-semibold text-white inline-flex items-center space-x-2"
                >
                  <svg
                    class="w-5 h-5"
                    role="img"
                    viewBox="0 0 150 150"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.668 0C18.6914 0 0 18.6914 0 41.668V108.332C0 131.309 18.6914 150 41.668 150H108.332C131.309 150 150 131.309 150 108.332V41.668C150 18.6914 131.309 0 108.332 0H41.668ZM41.668 16.668H108.332C122.117 16.668 133.332 27.8828 133.332 41.668V108.332C133.332 122.117 122.117 133.332 108.332 133.332H41.668C27.8828 133.332 16.668 122.117 16.668 108.332V41.668C16.668 27.8828 27.8828 16.668 41.668 16.668ZM116.668 25C116.121 25 115.578 25.0547 115.039 25.1602C114.504 25.2656 113.984 25.4258 113.477 25.6328C112.973 25.8438 112.492 26.1016 112.035 26.4062C111.582 26.707 111.16 27.0547 110.773 27.4414C110.387 27.8281 110.043 28.25 109.738 28.7031C109.434 29.1602 109.176 29.6406 108.969 30.1445C108.758 30.6484 108.602 31.1719 108.492 31.707C108.387 32.2461 108.332 32.7852 108.332 33.332C108.332 33.8789 108.387 34.4219 108.492 34.9609C108.602 35.4961 108.758 36.0156 108.969 36.5234C109.176 37.0273 109.434 37.5078 109.738 37.9648C110.043 38.418 110.387 38.8398 110.773 39.2266C111.16 39.6133 111.582 39.957 112.035 40.2617C112.492 40.5664 112.973 40.8242 113.477 41.0312C113.984 41.2422 114.504 41.3984 115.039 41.5078C115.578 41.6133 116.121 41.668 116.668 41.668C117.215 41.668 117.754 41.6133 118.293 41.5078C118.828 41.3984 119.352 41.2422 119.855 41.0312C120.359 40.8242 120.84 40.5664 121.297 40.2617C121.75 39.957 122.172 39.6133 122.559 39.2266C122.945 38.8398 123.293 38.418 123.594 37.9648C123.898 37.5078 124.156 37.0273 124.367 36.5234C124.574 36.0156 124.734 35.4961 124.84 34.9609C124.945 34.4219 125 33.8789 125 33.332C125 32.7852 124.945 32.2461 124.84 31.707C124.734 31.1719 124.574 30.6484 124.367 30.1445C124.156 29.6406 123.898 29.1602 123.594 28.7031C123.293 28.25 122.945 27.8281 122.559 27.4414C122.172 27.0547 121.75 26.707 121.297 26.4062C120.84 26.1016 120.359 25.8438 119.855 25.6328C119.352 25.4258 118.828 25.2656 118.293 25.1602C117.754 25.0547 117.215 25 116.668 25ZM75 33.332C52.0234 33.332 33.332 52.0234 33.332 75C33.332 97.9766 52.0234 116.668 75 116.668C97.9766 116.668 116.668 97.9766 116.668 75C116.668 52.0234 97.9766 33.332 75 33.332ZM75 50C88.7852 50 100 61.2148 100 75C100 88.7852 88.7852 100 75 100C61.2148 100 50 88.7852 50 75C50 61.2148 61.2148 50 75 50Z"
                    />
                  </svg>
                </a>
              </div>
              <button
                class="flex items-center font-bold transition duration-500 ease-in-out hover:bg-gray-800 hover:text-gray-50 border-2 border-gray-700 py-3 px-4 text-2xl"
                @click.prevent="send"
              >
                <svg
                  v-if="pending"
                  class="animate-spin ml-2 h-5 w-5 text-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Contact me</span>
              </button>
            </div>
          </form>
        </article>
      </main>
      <footer>
        <nav dir="ltr" class="z-10 pb-8 sm:py-0 bg-gray-100">
          <div class="px-4 py-2">
            <div
              class="flex flex-col sm:flex-row items-center justify-between h-16"
            >
              <p>
                Website Design by
                <a href="https://xifolio.com/" target="_blank">Xirade</a>
              </p>
              <div class="flex space-s-6 py-3 text-gray-900 font-medium">
                <a
                  class="transition duration-500 ease-in-out hover:text-gray-500 "
                  href="#"
                  >Home</a
                >
                <a
                  class="transition duration-500 ease-in-out hover:text-gray-500 "
                  href="#about"
                  >About</a
                >
                <a
                  class="transition duration-500 ease-in-out hover:text-gray-500 "
                  href="#contact"
                  >Contact</a
                >
              </div>
              <p class="font-semibold">
                © 2021 Nitay Dor
              </p>
            </div>
          </div>
        </nav>
      </footer>
      <a
        href="tel:0525357888"
        class="block w-14 h-14 transition duration-500 ease-in-out  border-2 p-2 bg-gray-800 hover:bg-gray-50 border-gray-700 chat-btn rounded-full"
      >
        <img
          class="absolute h-8 w-8 top-2.5 left-2.5"
          src="@/assets/images/phone.svg"
        />
      </a>
    </div>
  </transition-group>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    tel: "",
    message: "",
    messages:[],
    pending: false,
    success: false
  }),
  methods: {
     send() {
      this.messages = [];
      this.triggerSendMessageFunction();
    },
    async triggerSendMessageFunction() {
      try {
        if (this.name && this.email && this.message) {
          this.pending = true;
          const response = await this.$axios.$post(
            "/.netlify/functions/send-contact-email",
            {
              contactName: this.name,
              contactEmail: this.email,
              message: this.message,
              phone: this.tel
            }
          );
          this.success = true;
          setTimeout(() => (this.success = false), 2000);
          // Reset form field
          this.name = "";
          this.email = "";
          this.message = "";
          this.pending = false;
          this.messages.push({ type: "success", text: response });
        }
      } catch (error) {
        this.messages.push({ type: "error", text: error.response.data });
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const gsap = this.$gsap;

      gsap.to(el, {
        opacity: 1,
        duration: 2,
        onComplete: done
      });
    }
  }
};
</script>

<style>
q {
  quotes: "“" "”" "‘" "’";
}
q::before {
  position: absolute;
  content: open-quote;
  font-size: 0;
  left: 10px;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat ;
  background-image: url("@/assets/images/quotes.svg");
}
q::after {
  content: close-quote;
}

a:hover svg {
  fill: white;
}

.chat-btn {
  position: fixed;
  right: 14px;
  bottom: 55px;
}

.chat-btn img {
  filter: brightness(0) invert(1);
}

.chat-btn:hover img {
  filter: brightness(0) invert(0);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.successfull {
  background-image: url("~/assets/images/icon-check-circle.svg");
}
</style>
