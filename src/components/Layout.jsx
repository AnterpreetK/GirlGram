/* Layout is going to wrap our entire application, which is imortant for 
the header and the footer
 */

export default function Layout(props){

    const {children} = props

    // creating a variable, so that jsx can look for the html assigned to that variable
    const header = (
        <header>
            <h1 className="text-gradient">The GirlGram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Build by <a href="/" target="_blank">Anterpreet</a>
            <br/>Styled with
            <a href="https://www.fantacss.com" target="_blank"> FantaCSS</a>
            </p>
        </footer>
    )

    return(
        <>
        {/*<header></header> :  another method to rneder any html tag*/}

        {header} {/* here we are creating a variable forst in js (above) then calling it directly over here */}
            {children}
        {footer}

        </>
    )
}