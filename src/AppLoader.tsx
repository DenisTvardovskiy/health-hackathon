import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {
    useLanguage
} from "./application/hooks/userHooks";
import i18n from "i18next";
import PublicRoutes from "./routes/public-routes";

const AppLoader = () => {
    const language = useLanguage();

    useEffect(() => {
        i18n.changeLanguage(language ?? "en").then();
    }, [language]);

    return (
        <Routes>
            <Route path="/*" element={<PublicRoutes />} />
        </Routes>
    );
};

export default AppLoader;
