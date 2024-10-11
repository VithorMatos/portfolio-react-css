import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quas
      tenetur similique quos officia consectetur ullam sunt rerum et esse
      repellat atque exercitationem aut molestias, aliquid placeat tempore
      mollitia sapiente?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=vithormatos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vithormatos&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
