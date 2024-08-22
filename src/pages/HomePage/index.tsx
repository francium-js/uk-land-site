import Advantages from 'src/pages/HomePage/screens/Advantages'
import Main from 'src/pages/HomePage/screens/Main'
import Store from 'src/pages/HomePage/screens/Store'
import { Container } from 'src/pages/HomePage/styles'

const HomePage = (): JSX.Element => {
  return (
    <Container>
      <Main />
      <Advantages />
      <Store />
    </Container>
  )
}

export default HomePage
