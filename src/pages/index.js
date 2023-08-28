import React from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';
import { Link } from '@docusaurus/router';

function OnePiecePage() {
  return (
    <Layout>
      <header>
        <h1>One Piece - A Grande Aventura dos Piratas</h1>
      </header>
      <main>
        <p>
          "One Piece" é um famoso anime e mangá criado por Eiichiro Oda. Ele segue as
          aventuras de Monkey D. Luffy, um jovem com o sonho de se tornar o Rei dos Piratas,
          encontrando amigos, inimigos e tesouros pelo caminho.
        </p>
        <p>
          A série é conhecida por sua narrativa épica, personagens memoráveis e
          a busca contínua pelo "One Piece", o maior tesouro do mundo, escondido em
          algum lugar da Grande Rota. Ao longo de sua jornada, Luffy e sua tripulação,
          os Chapéus de Palha, enfrentam desafios incríveis, inimigos poderosos e
          descobrem os mistérios do mundo.
        </p>
        <p>
          Aventure-se no mundo de "One Piece" e junte-se a Luffy e seus amigos em uma
          jornada cheia de ação, risadas e emoções!
        </p>

        <div className="button-container">
          <Link className="fruta-button" to="/zoan">Akuma no Mi Zoan</Link>
          <Link className="fruta-button" to="/logia">Akuma no Mi Logia</Link>
          <Link className="fruta-button" to="/paramecia">Akuma no Mi Paramecia</Link>
        </div>

      </main>
    </Layout>
  );
}

export default OnePiecePage;
