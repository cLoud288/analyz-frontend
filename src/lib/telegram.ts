export function initTelegram() {
  if (typeof window === "undefined") return null;

  const tg = (window as any).Telegram?.WebApp;

  if (!tg) {
    throw new Error("Откройте приложение из Telegram");
  }

  tg.ready();
  tg.expand();

  return {
    initData: tg.initData,
    user: tg.initDataUnsafe?.user,
  };
}