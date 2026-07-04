import { useMemo, useState } from "react";

export function useLanguageQuery() {
  const [languages, setLanguages] = useState<string[]>([]);

  const handleLanguageChange = (value: string) => {
    if (languages.includes(value)) {
      const filteredLanguages = languages.filter(
        (language) => language !== value,
      );
      setLanguages([...filteredLanguages]);
    } else {
      setLanguages([...languages, value]);
    }
  };

  const languageQuery = useMemo(
    () => languages.map((language) => `language:${language}`).join(" "),
    [languages],
  );
  
  return { languageQuery, handleLanguageChange };
}
