import Header from "../../shared/header";


interface Props {
    children: React.ReactNode
}

const CommonLayout = ({children}:Props) => {
    return(
        <div>

            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default CommonLayout