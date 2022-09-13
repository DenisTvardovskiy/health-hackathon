import { useMemo } from "react";

export const useLanguage = () => {
    const lang = localStorage.getItem("lng");
    if(!lang){
        localStorage.setItem("lng", "en")
    }
    return useMemo(() => lang, [lang]);
};