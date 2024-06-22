import CardHome from "../components/home/CardHome"
import LogoHome from "../components/home/LogoHome"
import Layout from "../layouts/Layout"
import '../../assets/css/home/index.css'

function HomePage() {
  return (
    <Layout id="container-home">
      <CardHome/>
      <LogoHome/>
    </Layout>
  )
}

export default HomePage