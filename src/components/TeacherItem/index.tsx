import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1273437880631857156/qplYlv2s_400x400.jpg" alt="Adriano Reis" />
        <div>
          <strong>Adriano Reis</strong>
          <span>Informática e Feijão Tropeiro</span>
        </div>
      </header>

      <p>
        Entusiasta do TI + música boa + comida mineira.
        <br /><br />
        Mais de 300 pessoas alimentadas e sem problemas de PC enchendo de poeira e pegando fogo.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;