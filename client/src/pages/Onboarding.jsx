import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logoLight from "../assets/sea-see-logo.png";
import logoDark from "../assets/sea-see-logo.png";

const LANGUAGES = ["en", "ta", "ml", "hi"];
const STEPS = ["splash", "language", "name", "terms"];

function MiniLogo({ isDark }) {
  return (
    <img
      src={isDark ? logoDark : logoLight}
      alt="SEA-SEE"
      className="w-58 h-58 mx-auto mb-8"
    />
  );
}

export default function Onboarding() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const navigate = useNavigate();

  const [stepIndex, setStepIndex] = useState(0);
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const step = STEPS[stepIndex];

  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  useEffect(() => {
    if (step !== "splash") return;
    const timer = setTimeout(() => setStepIndex(1), 2200);
    return () => clearTimeout(timer);
  }, [step]);

  const goNext = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));

  const handleFinish = () => {
    localStorage.setItem("sea-see-onboarded", "true");
    localStorage.setItem("sea-see-name", name.trim());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-6 bg-background text-foreground overflow-hidden">
      <AnimatePresence mode="wait">
        {step === "splash" && (
          <motion.div
            key="splash"
            className="flex flex-col items-center justify-center flex-1"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={isDark ? logoDark : logoLight}
              alt="SEA-SEE"
              className="w-40 h-40"
              initial={{ scale: 3.2, rotate: -25, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p
              className="mt-6 text-lg opacity-70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {t("appName")}
            </motion.p>
          </motion.div>
        )}

      {step === "language" && (
  <motion.div
    key="language"
    className="flex flex-col flex-1"
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -24 }}
    transition={{ duration: 0.35 }}
  >
    <MiniLogo isDark={isDark} />

    <p className="text-lg font-semibold mb-4">
      {t("onboarding.selectLanguage")}
    </p>

    <div className="flex flex-col items-start gap-3">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`w-56 py-3 px-5 rounded-xl text-base font-semibold border-2 transition text-left
            ${
              language === lang
                ? "bg-primary text-white border-primary"
                : "border-secondary/40 text-foreground"
            }`}
        >
          {t(`onboarding.languages.${lang}`)}
        </button>
      ))}
    </div>

    <div className="flex-1" />

    <AnimatePresence>
      {language && (
        <motion.button
          key="next-btn"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          onClick={goNext}
          className="self-end w-40 py-3 rounded-xl bg-primary text-white text-base font-bold"
        >
          {t("onboarding.next")}
        </motion.button>
      )}
    </AnimatePresence>
  </motion.div>
)}

        {step === "name" && (
          <motion.div
            key="name"
            className="flex flex-col flex-1 justify-center gap-4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <MiniLogo isDark={isDark} />
            <h2 className="text-2xl font-bold text-center mb-2">
              {t("onboarding.namePrompt")}
            </h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("onboarding.namePlaceholder")}
              className="w-full py-4 px-4 rounded-xl text-lg border-2 border-secondary/40 bg-transparent text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
              autoFocus
            />
            <p className="text-sm opacity-60 text-center">
              {t("onboarding.nameHelper")}
            </p>
            <button
              onClick={goNext}
              disabled={!name.trim()}
              className={`w-full py-4 mt-2 rounded-xl text-lg font-bold transition
                ${
                  name.trim()
                    ? "bg-primary text-white"
                    : "bg-secondary/20 text-foreground/40 cursor-not-allowed"
                }`}
            >
              {t("onboarding.continue")}
            </button>
          </motion.div>
        )}

        {step === "terms" && (
          <motion.div
            key="terms"
            className="flex flex-col flex-1 justify-center gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <MiniLogo isDark={isDark} />
            <h2 className="text-2xl font-bold text-center">
              {t("onboarding.termsTitle")}
            </h2>
            <div className="bg-secondary/10 rounded-xl p-4 text-base leading-relaxed max-h-[40vh] overflow-y-auto">
              {t("onboarding.termsBody")}
            </div>
            <label className="flex items-start gap-3 text-base cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 accent-primary shrink-0"
              />
              <span>{t("onboarding.acceptTerms")}</span>
            </label>
            <button
              disabled={!agreed}
              onClick={handleFinish}
              className={`w-full py-4 rounded-xl text-lg font-bold transition
                ${
                  agreed
                    ? "bg-primary text-white"
                    : "bg-secondary/20 text-foreground/40 cursor-not-allowed"
                }`}
            >
              {t("onboarding.continue")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}