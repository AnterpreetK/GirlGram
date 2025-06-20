export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The GirlGram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://github.com/AnterpreetK/GirlGram" target="_blank">Anterpreet Kaur</a><br />Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}