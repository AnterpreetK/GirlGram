/* Layout is going to wrap our entire application, which is imortant for 
the header and the footer
 */

export default function Layout(props){

    const {children} = props

    // creating a variable, so that jsx can look for the html assigned to that variable
    const header = (
        <header></header>
    )
    const footer = (
        <footer></footer>
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