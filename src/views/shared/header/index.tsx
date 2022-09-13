import {Link, Navigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { createUseStyles } from "react-jss";
import i18n from "i18next";
import {useLanguage} from "src/application/hooks/userHooks";


const useStyles = createUseStyles({
    navigation: {
        display: 'flex',
        padding: "20px 40px",
        justifyContent: "space-between",
    },
    links: {
        "& > a ": {
            marginRight: "15px"
        }
    }

})

const Header = () => {
    const classes = useStyles()
    // const language = useLanguage();
    const {t} = useTranslation("translation");
    const links = [
        {
            text: t("header.home"),
            link: "/"
        },
        {
            text: t("header.account"),
            link: "/account"
        },
        {
            text: t("header.login"),
            link: "/login"
        },
        {
            text: t("header.register"),
            link: "/register"
        }
    ];

    return (
        <header>
            <nav className={classes.navigation}>
                <div className={classes.links}>
                {links.map((item)=> (
                    <Link key={item.link} to={item.link}>{item.text}</Link>
                ))}
                </div>
                <div>
                    <select onChange={(e)=> {
                        localStorage.setItem("lng", e.target.value)
                        i18n.language = e.target.value
                        window.location.reload()
                    }} defaultValue={localStorage.getItem("lng")!}>
                        <option value={"ua"}>UA</option>
                        <option value={"en"}>EN</option>
                    </select>
                </div>
            </nav>
            <div>

            </div>
        </header>
    )
}

export default Header