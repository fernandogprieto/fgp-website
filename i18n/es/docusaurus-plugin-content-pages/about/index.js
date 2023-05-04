import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import ThemedImage from '@theme/ThemedImage';

function AboutpageHeader() {
  return (
    <header className={clsx('about', styles.about)}>
      <div className="container">
        <div className='row'>
          <div className='col col--6 justified'>
          <h1 className="about-title" title="Sobre mí"></h1>
          <h3 className="about-title"> Especialista en Soporte Técnico | Consultor y Asesor de TI | Ingeniería | Atención al Cliente | Capacitación en Computación en la Nube</h3>
            <p> Soy un entusiasta del código abierto y las tecnologías nativas de la nube. Disfruto descubriendo nuevas tecnologías, contribuyendo a proyectos comunitarios,
             y compartiendo mi experiencia con otros para fomentar la innovación y la cooperación en el sector de TI.</p>

            <p> Mi experiencia incluye trabajar en entornos nativos de la nube, utilizando tecnologías como Kubernetes, Terraform y Python. También soy hábil en la aplicación de
                microservicios, tecnologías de infraestructura y monitoreo de servicios. Además, tengo habilidades en Linux, Windows y procesos ITIL.</p>

              <div className="svg_row" >
              <a href="mailto:prieto.fernandog@gmail.com" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Email icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/email.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/email-light.svg',
                  }}
                />
              </a>
              <a href="https://open.spotify.com/user/3132r43u32abukk6v3gwbbm64vx4?si=a0b6dbdbab8b4688&nd=1" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Spotify icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/spotify.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/spotify-light.svg',
                  }}
                />
              </a>
              <a href="https://discord.gg/zAZC37Mfxp" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Discord icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord-light.svg',
                  }}
                />
              </a>
              <a href="https://twitter.com/fernandogprieto" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Twitter icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/twitter.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/twitter-light.svg',
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/fernando-prieto-carabobo/" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="LinkedIn icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/linkedin.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/linkedin-light.svg',
                  }}
                />
              </a>
              <a href="https://www.credly.com/users/fernandoprieto/badges" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Creedly icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/credly.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/credly-light.svg',
                  }}
                />
              </a>
              <a href="https://dev.to/fernandogprieto" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Dev Community icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/dev-to.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/dev-to-light.svg',
                  }}
                />
              </a>
              <a href="https://g.dev/fernandogprieto" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Google developer icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/google-developers.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/google-developers-light.svg',
                  }}
                />
              </a>
              </div>
          </div>
          <div className='col col--4 avatar-container' >
              <img className='avatar-1' src= 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/avatar.jpg' />
            </div>
          </div>
        </div>
    </header>
  );
}

export default function About() {
  return (
    <Layout>
      <AboutpageHeader />
    </Layout>
  );
}
