
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Servios from "./components/Servios";
import PoliticaDePrivacidade from "./components/PoliticaDePrivacidade";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/sobre">
          <Sobre
            bACKGROUNDProps={sobreData.bACKGROUNDProps}
            sOMOSTRABALHAMOSProps={sobreData.sOMOSTRABALHAMOSProps}
            eQUIPEProps={sobreData.eQUIPEProps}
            cabealhoAgrupamentoProps={sobreData.cabealhoAgrupamentoProps}
            rodapAgrupamentoProps={sobreData.rodapAgrupamentoProps}
          />
        </Route>
        <Route path="/servicos">
          <Servios
            untitled1="/img/untitled-1@1x.png"
            text29="NOVIDADES CHEGANDO EM BREVE"
            cabealhoAgrupamentoProps={serviosData.cabealhoAgrupamentoProps}
            componente11Props={serviosData.componente11Props}
            componente21Props={serviosData.componente21Props}
            rodapAgrupamentoProps={serviosData.rodapAgrupamentoProps}
          />
        </Route>
        <Route path="/politica-de-privacidade">
          <PoliticaDePrivacidade
            cabealhoAgrupamentoProps={politicaDePrivacidadeData.cabealhoAgrupamentoProps}
            componente31Props={politicaDePrivacidadeData.componente31Props}
            rodapAgrupamentoProps={politicaDePrivacidadeData.rodapAgrupamentoProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const backgrundData = {
    tintaAzul: "/img/tinta-azul-@1x.png",
    tintaVermelha1: "/img/tinta-vermelha-1@1x.png",
    tintaVermelha2: "/img/tinta-vermelha-2@1x.png",
    elipse3: "/img/elipse-3@1x.png",
    elipse2: "/img/elipse-1@1x.png",
    elipse1: "/img/elipse-1@1x.png",
};

const fraseAgrupamentoData = {
    text5: "“A Inovação sempre significa um risco. Qualquer atividade econômica é de alto risco e não inovar é muito mais arriscado do que construir um futuro. ”",
    name: "Peter Ducker",
    linha4: "/img/linha-4@1x.png",
};

const quemSomosAgrupamentoData = {
    quemSomos: "QUEM SOMOS NÓS",
    spanText: "Conheça as ",
    spanText2: "pessoas",
    spanText3: " que estão fazendo ",
    spanText4: "acontecer",
    spanText5: ".",
    braianMendes: "BRAIAN MENDES",
    ceoBraian: "CEO",
    ju: "/img/ju@1x.png",
    juliana: "JULIANA UMBELINO",
    ceoJu: "CEO PA'LANTE",
    overlapGroup4: "/img/fill@1x.png",
    label: "Saiba Mais",
};

const serviosAgrupamentoData = {
    text6: "Desenvolvimento de sites",
    text7: <>Desenvolvimento de site exclusivo, focado <br />em UX/UI, responsivo, otimizado (SEO) e <br />gerenciável.</>,
    linha2: "/img/linha-2@1x.png",
    landingPage: "Landing Page",
    text8: "Desenvolvimento de Landing Page, para que tenha uma  melhor captação de leads.",
    linha22: "/img/linha-2-1@1x.png",
    identidadeVisual: "Identidade Visual",
    text9: "Criação de identidade visual, manual, conceito da marca, logo e demais materiais auxiliares de branding.",
    linha23: "/img/linha-2-2@1x.png",
};

const peaOSeuServioAgrupamentoData = {
    peaOSeuServio: "PEÇA O SEU SERVIÇO",
    trabalhamosNoDesen: "Trabalhamos no desenvolvimento de websites, trafego pago, marketing digital, e-commerce, mídias sociais e muito mais. Faremos o melhor para que sua marca tenha um excelente posicionamento e identidade, sempre buscando melhorar os resultados que você deseja para a sua marca.",
    peaUmTrabalho: "Peça um trabalho",
    listaDeServios: "Lista de serviços",
};

const designData = {
    designIcon: "/img/design-icon@1x.png",
    designEIlustrao: "Design e ilustração",
};

const design2Data = {
    designIcon: "/img/marketing-icon@1x.png",
    designEIlustrao: "Marketing digital",
    className: "internet-marketing",
};

const design3Data = {
    designIcon: "/img/mobile-icon@1x.png",
    designEIlustrao: "Desenvolvimento de softwares e aplicativos",
    className: "app",
};

const faixaRoxaAgrupamentoData = {
    bg: "/img/bg@1x.png",
    shadow: "/img/shadow@1x.png",
    siteIcon: "/img/site-icon@1x.png",
    text10: "Desenvolvimento de websites",
    notbook: "/img/notbook@1x.png",
    designProps: designData,
    design2Props: design2Data,
    design3Props: design3Data,
};

const citaoAgrupamentoData = {
    linha18: "/img/linha-18@1x.png",
    text12: `"A Criatividade é pensar em coisas novas. A Inovação é fazer coisas novas."`,
    theodereLevitt: "Theodere Levitt",
};

const introAgrupamentoData = {
    spanText: "A  ",
    spanText2: <>AGÊNCIA ESPACIAL<br /></>,
    spanText3: <>FEITA PARA TE AJUDAR A EXPLORAR<br />O </>,
    spanText4: "UNIVERSO DIGITAL",
    text14: <>O seu cliente está nesse vasto universo e você deve criar <br />o seu mundo para que possam conhece-lo.</>,
    text15: "QUERO LANÇAR MEU NÉGOCIO",
    caminho440: "/img/caminho-440@1x.png",
};

const nomeCaixaData = {
    inputType: "text",
    inputPlaceholder: "Nome                                                                                                                           ",
};

const nomeCaixa2Data = {
    inputType: "email",
    inputPlaceholder: "Email                                                                                                                            ",
    className: "email-caixa",
};

const nomeCaixa3Data = {
    inputType: "number",
    inputPlaceholder: "Celular                                                                                                                         ",
    className: "celular-caixa",
};

const emailCaixaData = {
    inputType: "email",
    inputPlaceholder: "Email                                                                                                                            ",
};

const emailCaixa2Data = {
    inputType: "number",
    inputPlaceholder: "Celular                                                                                                                         ",
    className: "celular-caixa-1",
};

const componente181Data = {
    spanText: "",
    spanText2: "",
    spanText3: "",
    spanText4: "",
    spanText5: "Quer ",
    spanText6: "ganhar",
    spanText7: " uma ",
    spanText8: "vantagem",
    spanText9: "?",
    inputType: "text",
    inputPlaceholder: "Nome                                                                                                                           ",
    simEuQuero: "SIM, EU QUERO",
    emailCaixaProps: emailCaixaData,
    emailCaixa2Props: emailCaixa2Data,
};

const rodapAgrupamentoData = {
    instagramBrands1: "/img/instagram-brands--1--1@1x.png",
};

const homeData = {
    entreEmContato: "ENTRE EM CONTATO",
    spanText: "Como",
    spanText2: " podemos",
    spanText3: " te ",
    spanText4: "ajudar",
    spanText5: "?",
    inputType: "text",
    inputPlaceholder: <>Mensagem                                                                                                               <br />                                                                                                                                    <br />                                                                                                                                    <br />                                                                                                                                    <br />                                                                                                                                     </>,
    enviar: "ENVIAR",
    backgrundProps: backgrundData,
    fraseAgrupamentoProps: fraseAgrupamentoData,
    quemSomosAgrupamentoProps: quemSomosAgrupamentoData,
    serviosAgrupamentoProps: serviosAgrupamentoData,
    peaOSeuServioAgrupamentoProps: peaOSeuServioAgrupamentoData,
    faixaRoxaAgrupamentoProps: faixaRoxaAgrupamentoData,
    citaoAgrupamentoProps: citaoAgrupamentoData,
    introAgrupamentoProps: introAgrupamentoData,
    nomeCaixaProps: nomeCaixaData,
    nomeCaixa2Props: nomeCaixa2Data,
    nomeCaixa3Props: nomeCaixa3Data,
    componente181Props: componente181Data,
    rodapAgrupamentoProps: rodapAgrupamentoData,
};

const bACKGROUNDData = {
    unor1221222Ativo92X: "/img/unor1221222ativo-9-2x@1x.png",
    unor12122Ativo72X: "/img/unor12122ativo-7-2x@1x.png",
    unor1221222Ativo92X2: "/img/unor1221222ativo-9-2x-1@1x.png",
};

const sOMOSTRABALHAMOSData = {
    spanText: "QUEM ",
    spanText2: "SOMOS",
    spanText3: "?",
    somosUmaAgnciaDe: <>Somos uma agência de tecnologia, trabalhamos com inúmeros clientes de diferentes segmentos. Fundada em 2021, somos uma empresa nova no mercado, mas com grande experiencia no ramo, por conta da nossa equipe de excelência. Somos hoje ao todo mais de 10 pessoas trabalhando juntos para aumentar os resultados dos seus negócios.<br />A Unor conta na linha de frente com Braian Mendes, fundador, CEO e programador chefe da equipe e Juliana Umbelino como CEO, redatora e social mídia.</>,
};

const eQUIPEData = {
    spanText: "CONHEÇA NOSSA ",
    spanText2: "EQUIPE",
    spanText3: "BRAIAN ",
    spanText4: "MENDES",
    braianMendesOFu: `Braian Mendes é o fundador, CEO e desenvolvedor da Unor. Com a confiança de seus parceiros, colaboradores e clientes. Ele traz consigo uma bagagem em tecnologia da informação e até mesmo inovação e tecnologias disruptivas, com premiação em Internet das Coisas, Inteligência Artificial e Desenvolvimento de Software, como nas competições passadas "MIT Beat The Covid Challenge 2019 II" e "Maker Hacklab Itajubá" em 2019. Com a missão, que vive recitando, de criar as melhores experiências, ele continua empreendendo, adaptando, aprendendo e seguindo junto com a equipe e todos parceiros.`,
    spanText5: "JULIANA ",
    spanText6: "UMBELINO",
    julianaUmbelinoF: <>Juliana Umbelino é fundadora, CEO e diretora de criação da Pa&#x27;lante  e uma integrante chave na linha de frente da Unor. Escritora e social media, atua com a produção e revisão de conteúdo para a web. É autora do livro Aglomerados, publicado pela editora Qualis.    <br />Ministra palestras sobre web, mídias sociais e marketing de influência.</>,
    base: "/img/base@1x.png",
};

const cabealhoAgrupamento2Data = {
    className: "cabealho-agrupamento-2",
};

const rodapAgrupamento2Data = {
    instagramBrands1: "/img/instagram-brands--1--1@1x.png",
    className: "rodap-agrupamento-1",
};

const sobreData = {
    bACKGROUNDProps: bACKGROUNDData,
    sOMOSTRABALHAMOSProps: sOMOSTRABALHAMOSData,
    eQUIPEProps: eQUIPEData,
    cabealhoAgrupamentoProps: cabealhoAgrupamento2Data,
    rodapAgrupamentoProps: rodapAgrupamento2Data,
};

const cabealhoAgrupamento3Data = {
    className: "cabealho-agrupamento-3",
};

const componente11Data = {
    spanText: "",
    spanText2: "",
    spanText3: "COMO ",
    spanText4: "TRABALHAMOS",
    spanText5: "?",
    fazemosONossoMelh: <>Fazemos o nosso melhor para entregar um produto de qualidade, todos os nossos programadores e designers trabalham em total sincronia, com o apoio dos melhores programas do mercado. Temos grande conhecimento em CSS, HTML JavaScript, Piton e demais linguagens de programação, na área visual temos profissionais que usam todos os programas da Adobe Creative Clound, Da Vinci Resolve, Corel Draw e inúmeros outros. <br />Com uma equipe excelente de vendas, mantemos um contato saudável com todos os nossos clientes e gostamos que todos eles estejam satisfeitos com o nosso trabalho. Sempre buscamos um feedback depois do encerramento do contrato de todos os clientes, com o intuído de sempre continuar trilhando o caminho certo.</>,
};

const componente21Data = {
    spanText: "NOSSOS ",
    spanText2: "SERVIÇOS",
    icon: "/img/browser-code@1x.png",
    text23: <>Desenvolvimento <br />de Sites</>,
    text24: "Desenvolvimento de site exclusivo, focado em UX/UI, responsivo, otimizado (SEO) e gerenciável.",
    landingPage: "Landing Page",
    text21: "Desenvolvimento de Landing Page, para que tenha uma  melhor captação de leads.",
    caminho445: "/img/caminho-445@1x.png",
    caminho446: "/img/caminho-446@1x.png",
    caminho447: "/img/caminho-447@1x.png",
    caminho448: "/img/caminho-448@1x.png",
    caminho449: "/img/caminho-448@1x.png",
    identidadeVisual: "Identidade Visual",
    text22: "Criação de identidade visual, manual, conceito da marca, logo e demais materiais auxiliares de branding.",
    caminho442: "/img/caminho-442@1x.png",
    caminho443: "/img/caminho-443@1x.png",
    linha10: "/img/caminho-443@1x.png",
    linha11: "/img/caminho-443@1x.png",
    linha12: "/img/linha-12@1x.png",
    linha13: "/img/linha-12@1x.png",
    linha14: "/img/linha-12@1x.png",
    linha15: "/img/linha-15@1x.png",
    linha16: "/img/linha-16@1x.png",
    linha17: "/img/linha-17@1x.png",
    caminho444: "/img/caminho-444@1x.png",
};

const rodapAgrupamento3Data = {
    instagramBrands1: "/img/instagram-brands--1--2@1x.png",
    className: "rodap-agrupamento-2",
};

const serviosData = {
    cabealhoAgrupamentoProps: cabealhoAgrupamento3Data,
    componente11Props: componente11Data,
    componente21Props: componente21Data,
    rodapAgrupamentoProps: rodapAgrupamento3Data,
};

const cabealhoAgrupamento4Data = {
    className: "cabealho-agrupamento-4",
};

const componente31Data = {
    spanText: "POLITICA DE ",
    spanText2: "PRIVACIDADE",
    spanText4: <> <br /></>,
    spanText5: <>Política de Cookies Unor<br /></>,
    spanText6: <><br />O que são cookies?<br /><br /></>,
    spanText7: <>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou &#x27;quebrar&#x27; certos elementos da funcionalidade do site.<br /><br /></>,
    spanText8: <>Como usamos os cookies?<br /></>,
    spanText9: <><br />Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.<br /><br /></>,
    spanText10: <>Desativar cookies<br /></>,
    spanText11: <><br />Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a central de ajuda do seu navegador para saber como). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.<br /><br /></>,
    spanText12: <>Cookies que definimos<br />Cookies relacionados à conta<br /></>,
    spanText13: <><br />Se você criar uma conta conosco, os cookies serão utilizados para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente são excluídos ao sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.<br /></>,
    spanText14: <><br /><br />Cookies relacionados ao login<br /><br /></>,
    spanText15: <>Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.<br /><br /></>,
    spanText16: <><br />Cookies relacionados a boletins por e-mail<br /><br /></>,
    spanText17: <>Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos ou não inscritos.<br /></>,
    spanText18: <><br /><br />Pedidos processando cookies relacionados<br /><br /></>,
    spanText19: <>Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.<br /></>,
    spanText20: <><br /><br />Cookies relacionados a pesquisas<br /><br /></>,
    spanText21: <>Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.<br /></>,
    spanText22: <><br /><br />Cookies relacionados a formulários<br /><br /></>,
    spanText23: <>Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.<br /></>,
    spanText24: <><br /><br />Cookies de preferências do site<br /></>,
    spanText26: <><br /></>,
    spanText27: <>Compromisso do Usuário<br /></>,
    spanText28: <><br />O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Unor Tecnologias oferece no site e com caráter enunciativo, mas não limitativo:<br /><br /></>,
    spanText29: "A)",
    spanText30: <> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;<br /><br /></>,
    spanText31: "B",
    spanText32: <>) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;<br /><br /></>,
    spanText33: "C)",
    spanText34: <> Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Unor Tecnologias, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.<br /><br /></>,
    spanText35: <>Mais informações:<br /></>,
    spanText36: <><br />Esperamos ter esclarecido nossa Política de Privacidade e, como mencionado anteriormente, é mais seguro deixar os cookies ativados para não haver interações indesejadas com um dos recursos que você usa em nosso site.<br />Esta política será efetiva a partir de Novembro de 2021.</>,
};

const rodapAgrupamento4Data = {
    instagramBrands1: "/img/instagram-brands--1--3@1x.png",
    className: "rodap-agrupamento-3",
};

const politicaDePrivacidadeData = {
    cabealhoAgrupamentoProps: cabealhoAgrupamento4Data,
    componente31Props: componente31Data,
    rodapAgrupamentoProps: rodapAgrupamento4Data,
};

