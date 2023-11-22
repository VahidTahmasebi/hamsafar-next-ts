interface DictionaryEntry {
  exploreWord: string;
  planWord: string;
  descriptionWord: string;
  bookTripWord: string;
  whereWord: string;
  whenWord: string;
  travelTypeWord: string;
  searchWord: string;
  trainWord: string;
  airplaneWord: string;
  busWord: string;
  iranWord: string;
  asiaWord: string;
  europeWord: string;
  africaWord: string;
  americanWord: string;
  addressWord: string;
  copyrightWord: string;
  homeWord: string;
  toursWord: string;
  blogWord: string;
  aboutWord: string;
  contactWord: string;
  loginSignupWord: string;
  suggested: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    exploreWord: "Explore the world",
    planWord: "Plan your trip with us whenever you want",
    descriptionWord:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem eaque aspernatur consectetur at molestias nemo reprehenderit vitae minima. Commodi ab sunt veritatis molestias id distinctio corporis unde fugiat tenetur.",
    bookTripWord: "Book Trip",
    whereWord: "Where",
    whenWord: "When",
    travelTypeWord: "Travel Type",
    searchWord: "Search",
    trainWord: "Train",
    airplaneWord: "Airplane",
    busWord: "Bus",
    iranWord: "Iran",
    asiaWord: "Asia",
    europeWord: "Europe",
    africaWord: "Africa",
    americanWord: "American",
    suggested: "Suggested",
    addressWord: "00 Colin P Kelly Jr St San Francisco California 94118",
    copyrightWord: "Copyright © 2023 Hamsafar All rights reserved",

    homeWord: "Home",
    toursWord: "Tours",
    blogWord: "Blog",
    aboutWord: "About",
    contactWord: "Contact",
    loginSignupWord: "Login | Signup",
  },
  fa: {
    exploreWord: "جهان را کاوش کنید",
    planWord: "هر زمان که خواستید سفر خود را با ما برنامه ریزی کنید",
    descriptionWord:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    bookTripWord: "سفرنامه",
    whereWord: "کجا",
    whenWord: "چه زمانی",
    travelTypeWord: "نوع سفر",
    searchWord: "جستجو",
    trainWord: "قطار",
    airplaneWord: "هواپیما",
    busWord: "اتوبوس",
    iranWord: "ایران",
    asiaWord: "آسیا",
    europeWord: "اروپا",
    africaWord: "آفریقا",
    americanWord: "آمریکا",
    suggested: "پیشنهاد",
    addressWord:
      "94118 کالیفورنیا سن فرنسیسکو خیابان کالین پرودی کلی جونیور 00",
    copyrightWord: "© کلیه حقوق این سایت محفوظ و متعلق به همسفر است.",

    homeWord: "خانه",
    toursWord: "تورها",
    blogWord: "وبلاگ",
    aboutWord: "درباره ما",
    contactWord: "تماس با ما",
    loginSignupWord: "عضویت | ورود",
  },
};
