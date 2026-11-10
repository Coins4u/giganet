import type { Locale } from "@/lib/site";
import type { Dict } from "./types";
import en from "./en";
import de from "./de";
import fr from "./fr";
import it from "./it";
import nl from "./nl";
import pt from "./pt";

const DICTS: Record<Locale, Dict> = { en, de, fr, it, nl, pt };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}

export type { Dict } from "./types";
