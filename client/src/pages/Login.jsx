import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { MapPin, TrafficCone, Waves, Bot, ShieldCheck, Lock, RefreshCw, CloudCog } from "lucide-react";
import heroImage from "../assets/login-hero.png";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/sea-see-logo.png";
import boatIcon from "../assets/boat.png";
import botIcon from "../assets/bot.png";
import locationIcon from "../assets/location.png";
import trafficIcon from "../assets/traffic.png";
import waveIcon from "../assets/wave.png";



const LANGUAGES = ["ta", "en", "ml", "hi"];

const FEATURES = [
  { image: locationIcon, titleKey: "hero.feature1Title", bodyKey: "hero.feature1Body" },
  { image: trafficIcon, titleKey: "hero.feature2Title", bodyKey: "hero.feature2Body" },
  { image: waveIcon, titleKey: "hero.feature3Title", bodyKey: "hero.feature3Body" },
  { image: botIcon, titleKey: "hero.feature4Title", bodyKey: "hero.feature4Body" },
];

export default function Login() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const handleGoogleLogin = () => {
    // TODO: wire real Google OAuth redirect here
    console.log("Google login clicked");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Fade: image visible on the left, resolves into solid background on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/70 to-background" />
      {/* On mobile, image would otherwise dominate the whole card — fade it out more from the top too */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent via-background/80 to-background" />

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Left: brand + feature content, sits directly over the image */}
<div className="hidden md:flex flex-col justify-between w-1/2 p-10 text-white">
  <div className="flex flex-col items-center text-center gap-4 ml-auto max-w-md pt-16">
    <img
      src={isDark ? logoLight : logoLight}
      alt=""
      className="w-24 h-24 drop-shadow-xl"
    />

    <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg leading-none">
      <span className="text-[#041c3b]">SEA-</span>
      <span className="text-[#12a5d8]">SEE</span>
    </h1>

    <div className="space-y-2 mt-2 bg-black/25 backdrop-blur-sm rounded-2xl px-5 py-4">
      <p className="text-lg font-semibold text-white drop-shadow-md">
        {t("hero.tagline")}
      </p>
      <p className="text-sm text-white/90 drop-shadow-md">
        {t("hero.subtitle")}
      </p>
    </div>
  </div>



  <div className="flex items-start gap-3 bg-black/50 rounded-xl p-4 max-w-sm mb-6 backdrop-blur-sm">
    <ShieldCheck className="w-8 h-8 shrink-0 text-safety-safe" />
    <div>
      <p className="font-bold">{t("hero.safetyBadgeTitle")}</p>
      <p className="text-sm opacity-90">{t("hero.safetyBadgeBody")}</p>
    </div>
  </div>

  <div className="grid grid-cols-4 gap-2">
    {FEATURES.map(({ image, titleKey, bodyKey }) => (
      <div key={titleKey} className="bg-background/90 text-foreground rounded-xl p-3 flex flex-col items-center text-center">
        <img src={image} alt="" className="w-20 h-20 object-contain mb-2" />
        <p className="font-semibold text-xs">{t(titleKey)}</p>
        <p className="text-[10px] opacity-60 mt-0.5">{t(bodyKey)}</p>
      </div>
    ))}
  </div>
</div>

        {/* Right: login card, floats over the faded part of the image */}
        <div className="flex-1 flex flex-col justify-between p-6 md:p-12">
<div className="flex justify-end gap-2 mb-8 md:mb-16 flex-wrap" >
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition
                  ${
                    language === lang
                      ? "bg-primary text-white"
                      : "bg-background/90 text-foreground"
                  }`}
              >
                {t(`onboarding.languages.${lang}`)}
              </button>
            ))}
          </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full bg-background rounded-2xl p-6 md:p-8 shadow-xl">
  <div className="flex flex-col items-center text-center mb-6">
<div className="w-20 h-20 flex items-center justify-center mb-4">
  <img src={boatIcon} alt="" className="w-56 h-76 object-contain" />
</div>
    <h1 className="text-2xl font-bold mb-2">{t("login.welcomeTitle")}</h1>
    <p className="opacity-70">{t("login.welcomeSubtitle")}</p>
  </div>

  <button
    onClick={handleGoogleLogin}
    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border-2 border-secondary/30 bg-background font-semibold text-lg hover:bg-secondary/5 transition"
  >
    <GoogleIcon />
    {t("auth.signInWithGoogle")}
  </button>

  <div className="flex items-center gap-3 my-6">
    <div className="flex-1 h-px bg-secondary/20" />
    <span className="text-sm opacity-50">{t("login.orDivider")}</span>
    <div className="flex-1 h-px bg-secondary/20" />
  </div>

  <p className="text-center text-sm opacity-70">
    {t("login.noAccountPrompt")}{" "}
    <Link to="/signup" className="text-primary font-semibold hover:underline">
      {t("login.signUpManually")}
    </Link>
  </p>

  <div className="flex justify-center gap-6 mt-8 text-xs opacity-60 flex-wrap">
    <span className="flex items-center gap-1">
      <Lock className="w-4 h-4" /> {t("login.trustSecure")}
    </span>
    <span className="flex items-center gap-1">
      <RefreshCw className="w-4 h-4" /> {t("login.trustSaved")}
    </span>
    <span className="flex items-center gap-1">
      <CloudCog className="w-4 h-4" /> {t("login.trustAnywhere")}
    </span>
  </div>
</div>

          <div className="flex flex-col sm:flex-row justify-between text-xs opacity-50 mt-8 gap-2 bg-background/80 sm:bg-transparent rounded-lg p-2 sm:p-0">
            <span>{t("footer.copyright")}</span>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:underline">{t("footer.privacy")}</span>
              <span className="cursor-pointer hover:underline">{t("footer.terms")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 5 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 7 29.6 5 24 5c-7.7 0-14.3 4.3-17.7 10.7z"/>
      <path fill="#4CAF50" d="M24 45c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6C29.6 36 26.9 37 24 37c-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.6 40.6 16.2 45 24 45z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.7l6.6 5.6C41.4 36.1 45 30.9 45 24c0-1.2-.1-2.4-.4-3.5z"/>
    </svg>
  );
}