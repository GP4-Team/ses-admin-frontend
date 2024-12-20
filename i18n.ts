import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"];

export default getRequestConfig(async ({ requestLocale }) => {
  if (!locales.includes(requestLocale as any)) notFound();

  return {
    messages: (await import(`./messages/${requestLocale}.json`)).default,
  };
});
