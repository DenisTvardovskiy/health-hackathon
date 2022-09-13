import {Suspense, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import CommonLayout from "../views/components/layout";
import {useTranslation} from "react-i18next";


const PublicRoutes = () => {
    const [isUserBlocked, setIsUserBlocked] = useState(false)
    const {t} = useTranslation("translation")


    return(
        <CommonLayout>
            <Routes>
                <Route index element={<div>home</div>} />
                <Route
                    path="/register/"
                    element={
                        <Suspense fallback={<div>loading</div>}>
                            <div>register</div>
                        </Suspense>
                    }
                />
                <Route
                    path="/login/"
                    element={
                        <Suspense fallback={<div>loading</div>}>
                            <div>login</div>
                        </Suspense>
                    }
                />
                <Route
                    path="/account"
                    element={
                        !isUserBlocked ?
                            <Suspense fallback={<div>loading</div>}>
                                <div>account</div>
                            </Suspense> : <Navigate to={"/?reason=deactivated"} />
                    }
                />
                <Route path="/*" element={<div>404</div>} />
            </Routes>
        </CommonLayout>

    )
}

export default PublicRoutes