import { customize } from "customization-api";
import { englishTranslationData } from "./translations/en";
import { hindiTranslationData } from "./translations/hi";
import { chineseTranslationData } from "./translations/ch";

const userCustomization = customize({
  i18n: [
    {
      label: "English",
      locale: "en-us",
      data: englishTranslationData,
    },
    {
      label: "Hindi",
      locale: "hi",
      data: hindiTranslationData,
    },
    {
      label: "Chinese",
      locale: "ch",
      data: chineseTranslationData,
    },
  ],
});
export default userCustomization;
