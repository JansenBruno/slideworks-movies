import './Home.css'
import { ThemeProvider } from '../../src/themeContext'
import Footer from '../../src/components/Footer/Footer'
import MovieList from '../../src/components/MovieList/MovieList'
import Container from '../../src/components/Container/Container/'


function Home() {

    return (
        <ThemeProvider>
          <>
          <Container />
          <MovieList />
          <Footer />
          </>
        </ThemeProvider>
      )
    }

export default Home
