import { useState, useEffect } from "react";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("loaderShown");
    if (shown) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("loaderShown", "true");
      }, 500);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-3 animate-fade-in-up">
        <img
          src="/favicon.jpg"
          alt="Career Gram"
          className="w-16 h-16 rounded-full ring-4 ring-accent/30 animate-pulse-soft"
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-foreground">
            Career<span className="text-accent">Gram</span>
          </span>
          <span className="text-xs text-muted-foreground">by Josna Maria Babu</span>
        </div>
      </div>
      <div className="mt-8 w-48 h-1 rounded-full bg-secondary overflow-hidden">
        <div className="h-full bg-accent rounded-full animate-loader-bar" />
      </div>
    </div>
  );
};
