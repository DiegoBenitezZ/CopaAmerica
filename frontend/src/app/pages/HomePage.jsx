import CardHome from "../components/home/CardHome"
import LogoHome from "../components/home/LogoHome"
import BaseLayout from "../layouts/BaseLayout"
import '../../assets/css/home/index.css'

function HomePage() {
  return (
    <BaseLayout id="container-home">
      <CardHome/>
      <LogoHome/>
    </BaseLayout>
  )
}

export default HomePage