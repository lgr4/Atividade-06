
import Postagem from './postagem'

export default function Home() {
  const pessoa = {
    username: 'lucasgrod',
    location: 'Escola Politécnica da UPE',
    like: true,
    save: false,
  }

  const pessoa2 = {
    username: 'fulano',
    location: 'Casa de Fulano',
    like: false,
    save: false
  }

  const pessoa3 = {
    username: 'alguem',
    location: 'Algum lugar',
    like: true,
    save: false
  }

  return (
    <main>
      {Postagem(pessoa)}
      {Postagem(pessoa2)}
      {Postagem(pessoa3)}
    </main>
  )
}
