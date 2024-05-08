import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/Main/MainPage.vue";
import ZodiacPage from "@/pages/Zodiacs/ZodiacMainPage.vue";
import NotFound from "@/pages/404/NotFound.vue";
import ZodiacSign from "@/pages/Zodiacs/ZodiacSignPage.vue";
import ZodiacSignDate from "@/pages/Zodiacs/ZodiacSignDatePage.vue";
import JapaneseMainPage from "@/pages/Japanese/JapaneseMainPage.vue";
import ChineseSignPage from "@/pages/Chinese/ChineseSignPage.vue";
import ChineseElementPage from "@/pages/Chinese/ChineseElementPage.vue";
import ChineseHoroscopeDatePage from "@/pages/Chinese/ChineseHoroscopeDatePage.vue";
import JapaneseSignPage from "@/pages/Japanese/JapaneseSignPage.vue";
import JapaneseHoroscopeDatePage from "@/pages/Japanese/JapaneseHoroscopeDatePage.vue";
import ChineseMainPage from "@/pages/Chinese/ChineseMainPage.vue";
import ZaroastrianMainPage from "@/pages/Zoroastrian/ZoroastrianMainPage.vue";
import ZoroastrianMainPage from "@/pages/Zoroastrian/ZoroastrianMainPage.vue";
import ZoroastrianHoroscopeDatePage from "@/pages/Zoroastrian/ZoroastrianHoroscopeDatePage.vue";
import ZoroastrianSignPage from "@/pages/Zoroastrian/ZoroastrianSignPage.vue";
import MayaMainPage from "@/pages/Maya/MayaMainPage.vue";
import MayaHoroscopeDatePage from "@/pages/Maya/MayaHoroscopeDatePage.vue";
import DruidsMainPage from "@/pages/Druids/DruidsMainPage.vue";
import DruidsHoroscopeDatePage from "@/pages/Druids/DruidsHoroscopeDatePage.vue";
import DruidsSignPage from "@/pages/Druids/DruidsSignPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound,
        },
        {
            path: "/",
            name: "MainPage",
            component: MainPage,
        },
        {
            path: "/horoscope/zodiac",
            name: "ZodiacPage",
            component: ZodiacPage,
        },
        {
            path: "/horoscope/zodiac/:sign",
            name: "ZodiacSign",
            component: ZodiacSign,
        },
        {
            path: "/horoscope/zodiac/:sign/today",
            name: "ZodiacSignToday",
            component: ZodiacSignDate,
            props: {timePeriod: "today"},
        },
        {
            path: "/horoscope/zodiac/:sign/tomorrow",
            name: "ZodiacSignTomorrow",
            component: ZodiacSignDate,
            props: {timePeriod: "tomorrow"},
        },
        {
            path: "/horoscope/zodiac/:sign/weekly",
            name: "ZodiacSignWeekly",
            component: ZodiacSignDate,
            props: {timePeriod: "weekly"},
        },
        {
            path: "/horoscope/zodiac/:sign/monthly",
            name: "ZodiacSignMonthly",
            component: ZodiacSignDate,
            props: {timePeriod: "monthly"},
        },
        {
            path: "/horoscope/zodiac/:sign/yearly",
            name: "ZodiacSignYearly",
            component: ZodiacSignDate,
            props: {timePeriod: "yearly"},
        },
        {
            path: "/horoscope/chinese",
            name: "ChineseMainPage",
            component: ChineseMainPage,
        },
        {
            path: "/horoscope/chinese/sign/:sign",
            name: "ChineseSignPage",
            component: ChineseSignPage,
        },
        {
            path: "/horoscope/chinese/element/:element",
            name: "ChineseElementPage",
            component: ChineseElementPage,
        },
        {
            path: "/horoscope/chinese/date/:date",
            name: "ChineseHoroscopeDatePage",
            component: ChineseHoroscopeDatePage,
        },
        {
            path: "/horoscope/japanese",
            name: "JapaneseMainPage",
            component: JapaneseMainPage,
        },
        {
            path: "/horoscope/japanese/sign/:sign",
            name: "JapaneseSignPage",
            component: JapaneseSignPage,
        },
        {
            path: "/horoscope/japanese/date/:date",
            name: "JapaneseHoroscopeDatePage",
            component: JapaneseHoroscopeDatePage,
        },
        {
            path: "/horoscope/zoroastrian",
            name: "ZoroastrianMainPage",
            component: ZoroastrianMainPage,
        },
        {
            path: "/horoscope/zoroastrian/date/:date",
            name: "ZoroastrianHoroscopeDatePage",
            component: ZoroastrianHoroscopeDatePage,
        },
        {
            path: "/horoscope/zoroastrian/sign/:sign",
            name: "ZoroastrianSignPage",
            component: ZoroastrianSignPage,
        },
        // {
        //     path: "/horoscope/maya",
        //     name: "MayaMainPage",
        //     component: MayaMainPage,
        // },
        // {
        //     path: "/horoscope/maya/date/:date",
        //     name: "MayaHoroscopeDatePage",
        //     component: MayaHoroscopeDatePage,
        // },
        {
            path: "/horoscope/druids",
            name: "DruidsMainPage",
            component: DruidsMainPage,
        },
        {
            path: "/horoscope/druids/date/:date",
            name: "DruidsHoroscopeDatePage",
            component: DruidsHoroscopeDatePage,
        },
        {
            path: "/horoscope/druids/sign/:sign",
            name: "DruidsSignPage",
            component: DruidsSignPage,
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({left: 0, top: 0, behavior: 'smooth'});
            }, 0);
        });
    },
});

export default router;
