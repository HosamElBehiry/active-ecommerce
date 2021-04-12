import type { Translate } from "next-translate";

export interface AuthProps {
  t: Translate;
  lang?: string;
}
