export interface Post {
  slug: string;
  title: string;
  shortDescription: string;
  category: "Cashback" | "Milhas & Viagens" | "Sem Anuidade" | "Alta Renda";
  score: number; // 0.0 - 10.0
  anuidade: string;
  cashback: string;
  pontos: string;
  limiteEstimado: string;
  loungeAccess: string;
  pros: string[];
  cons: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  cardColor: string; // CSS gradient class
  cardBrand: "mastercard" | "visa" | "elo";
  cardLevel: "Black" | "Platinum" | "Infinite" | "Gold" | "Nanquim";
  recommendedFor: string;
  detailedContent: string;
}

export const CATEGORIES = [
  { id: "cashback", name: "Cashback", desc: "Cartões que devolvem dinheiro de verdade na sua conta ou fatura." },
  { id: "milhas", name: "Milhas & Viagens", desc: "Acumule pontos valiosos para trocar por passagens aéreas e hotéis de graça." },
  { id: "sem-anuidade", name: "Sem Anuidade", desc: "Cartões sem taxas de manutenção periódica, excelentes para economizar." },
  { id: "alta-renda", name: "Alta Renda", desc: "Benefícios VIP exclusivos, concierge, seguros robustos e salas VIP ilimitadas." }
];

export const posts: Post[] = [
  {
    slug: "nubank-ultravioleta",
    title: "Nubank Ultravioleta Vale a Pena em 2026? Análise Detalhada do Cartão de Metal",
    shortDescription: "Com estrutura pesada em metal e cashback de 1% que rende inéditos 200% do CDI, o Ultravioleta se consolida como o queridinho do cashback no Brasil. Confira se vale a pena solicitar.",
    category: "Cashback",
    score: 9.4,
    anuidade: "Grátis gastando R$ 5.000/mês ou com R$ 50 mil guardados. Caso contrário, R$ 49/mês.",
    cashback: "1% de cashback em todas as compras no crédito. Se não for usado, rende 200% do CDI automaticamente.",
    pontos: "Não pontua em programas de milhagem tradicionais, mas o cashback pode ser convertido em milhas Smiles (100 milhas por R$ 3,00).",
    limiteEstimado: "R$ 10.000 a R$ 60.000+",
    loungeAccess: "Acesso gratuito e ilimitado à Sala VIP Mastercard Black em Guarulhos (Terminal 3). Outras salas LoungeKey por US$ 35.",
    pros: [
      "Estrutura física premium fabricada em metal",
      "Cashback de 1% que cresce a 200% do CDI indefinidamente",
      "NuTag (pedágios e estacionamentos) inclusa sem mensalidade",
      "Benefícios e seguros da bandeira Mastercard Black",
      "Aplicativo integrado de alta usabilidade e atendimento excelente"
    ],
    cons: [
      "Critérios de aprovação e convite do algoritmo são misteriosos",
      "Acesso a salas VIP fora de Guarulhos é pago (US$ 35 por visita)",
      "Não acumula pontos diretamente em programas como Livelo ou Esfera"
    ],
    author: "João Silva",
    authorRole: "Especialista em Cartões Premium",
    date: "10/07/2026",
    readTime: "12 min",
    cardColor: "from-slate-900 via-purple-950 to-purple-900 border border-purple-500/30 text-purple-200",
    cardBrand: "mastercard",
    cardLevel: "Black",
    recommendedFor: "Pessoas que buscam cashback automático de altíssimo rendimento e valorizam o ecossistema Nubank.",
    detailedContent: `
      <p class="lead text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        O <strong>Nubank Ultravioleta</strong> é o cartão premium de metal do Nubank. Focado em simplicidade, segurança e alta rentabilidade para investidores, ele se destaca pelo design diferenciado e pelo cashback de 1% que rende <strong>200% do CDI</strong> se mantido no app.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Como funciona o rendimento de 200% do CDI?</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Ao contrário de outros cartões onde o cashback fica parado ou é creditado direto na fatura diminuindo o saldo, o cashback do Nubank Ultravioleta é depositado em uma área especial. Esse saldo não expira nunca e rende 200% do CDI de forma totalmente líquida todos os dias.
      </p>
      <p class="text-slate-600 leading-relaxed mb-4">
        Isso significa que, se você deixar seu cashback acumulando por alguns anos, ele crescerá exponencialmente, agindo como uma verdadeira poupança de investimentos de curtíssimo prazo. É a melhor taxa de rentabilidade automática de cashback disponível no mercado brasileiro atualmente.
      </p>

      <div class="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
        <h4 class="font-bold text-purple-900 mb-2">Exemplo Prático de Acúmulo:</h4>
        <p class="text-purple-800 text-sm leading-relaxed">
          Se você gasta em média R$ 8.000 por mês no cartão, você acumula R$ 80 de cashback mensalmente. Em 12 meses, você terá R$ 960 em cashback. Porém, com o rendimento de 200% do CDI (considerando uma taxa Selic estimada de 10% a.a.), o saldo real acumulado ao final do primeiro ano passará de R$ 1.050.
        </p>
      </div>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Benefícios Exclusivos do Espaço Ultravioleta</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        O cliente Ultravioleta não ganha apenas o cartão físico de metal. Ele tem acesso a um ecossistema exclusivo dentro do aplicativo Nubank que inclui:
      </p>
      <ul class="list-disc pl-6 text-slate-600 space-y-2 mb-6">
        <li><strong>NuTag Gratuita:</strong> Tag de pedágios e estacionamentos sem mensalidade nem taxas de recarga.</li>
        <li><strong>Espaço Família:</strong> Compartilhamento do limite do cartão e acompanhamento de gastos familiares em uma interface unificada.</li>
        <li><strong>Atendimento 24h Prioritário:</strong> Linha de suporte telefônico e chat ultra rápida, com atendentes dedicados.</li>
        <li><strong>Nu Reserva Imediata:</strong> Opções de investimentos de baixo risco com liquidez diária exclusivos para a carteira Ultravioleta.</li>
        <li><strong>Seguro Viagem Gratuito:</strong> Proteções completas da Mastercard Black contra perda de bagagem, atraso de voo e assistência médica internacional.</li>
      </ul>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Vale a pena pagar a mensalidade de R$ 49?</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        A isenção do cartão é garantida se você atingir R$ 5.000 em gastos na fatura do mês, ou se tiver ao menos R$ 50 mil investidos entre o Nubank e a Nu Invest.
      </p>
      <p class="text-slate-600 leading-relaxed mb-4">
        Se você gasta menos de R$ 5.000 e não possui investimentos, a taxa mensal de R$ 49 consome boa parte do cashback obtido. Para quem gasta R$ 3.000, por exemplo, o cashback mensal é de R$ 30, o que resultaria em um prejuízo líquido de R$ 19 mensais. Logo, o Ultravioleta é altamente recomendado apenas se você conseguir atingir os requisitos de isenção de forma natural.
      </p>
    `
  },
  {
    slug: "c6-carbon-black",
    title: "C6 Carbon Mastercard Black Review: Ainda é um dos Melhores para Milhas?",
    shortDescription: "Com pontuação competitiva que chega a 3,5 pontos por dólar gasto e 4 acessos anuais gratuitos às salas VIP LoungeKey, o C6 Carbon continua forte para viajantes. Analisamos as novas regras de 2026.",
    category: "Milhas & Viagens",
    score: 9.1,
    anuidade: "Isenção de 50% gastando a partir de R$ 4.000/mês ou isenção de 100% gastando R$ 8.000/mês. Alternativamente, isenção total com R$ 150 mil investidos em CDB do C6. Valor cheio: R$ 98/mês.",
    cashback: "Até 1,2% de cashback convertendo os pontos Átomos gerados no aplicativo.",
    pontos: "2,5 pontos Átomos por dólar gasto na modalidade padrão. Clientes com investimentos no banco ou alta fidelidade podem atingir até 3,5 pontos por dólar.",
    limiteEstimado: "R$ 15.000 a R$ 100.000+",
    loungeAccess: "4 acessos gratuitos por ano a mais de 1.000 salas VIP LoungeKey e WPremium Lounge. Acesso ilimitado à sala VIP Mastercard Black em Guarulhos.",
    pros: [
      "Uma das maiores pontuações por dólar gasto do mercado",
      "Pontos Átomos que nunca expiram e podem ser transferidos para Livelo, Smiles, Latam Pass e TudoAzul",
      "Permite adicionar até 6 cartões adicionais totalmente gratuitos compartilhando os benefícios Black",
      "C6 Tag de pedágio inclusa para clientes Carbon",
      "Excelente conta internacional integrada (C6 Global)"
    ],
    cons: [
      "Exigência de gastos elevados para isenção total de anuidade (R$ 8.000)",
      "O banco reduziu alguns benefícios menores de seguros em 2025",
      "Suporte via chat integrado pode ser instável às vezes"
    ],
    author: "Pedro Oliveira",
    authorRole: "Consultor de Viagens e Milhas",
    date: "25/06/2026",
    readTime: "15 min",
    cardColor: "from-slate-950 via-zinc-900 to-zinc-950 border border-amber-600/20 text-slate-100",
    cardBrand: "mastercard",
    cardLevel: "Black",
    recommendedFor: "Viajantes frequentes que desejam concentrar seus gastos para acumular pontos de viagem rapidamente e valorizam adicionais gratuitos.",
    detailedContent: `
      <p class="lead text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        O <strong>C6 Carbon Mastercard Black</strong> é o principal cartão de crédito de alta renda oferecido pelo C6 Bank. Ele compete diretamente com os principais cartões Black de bancos tradicionais, oferecendo uma das melhores taxas de acúmulo de pontos do mercado de cartões digitais.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">O Programa Átomos e a Pontuação Excepcional</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        O C6 Carbon oferece de partida <strong>2,5 pontos Átomos</strong> para cada dólar gasto no crédito. Uma grande vantagem dos pontos Átomos é que <strong>eles nunca expiram</strong>. Você pode acumular por anos sem medo de perdê-los.
      </p>
      <p class="text-slate-600 leading-relaxed mb-4">
        Além disso, o C6 Bank frequentemente faz promoções com transferência bonificada de pontos para parceiros como a Smiles, Latam Pass e TudoAzul, alcançando bonificações de até 100% de bônus. Isso dobra o valor real de suas milhas na prática!
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Política de Salas VIP atualizada para 2026</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        O cartão oferece <strong>4 acessos gratuitos por ano</strong> às salas VIP credenciadas pela rede LoungeKey em todo o mundo. Os acessos podem ser compartilhados com os convidados do titular ou usados individualmente. Adicionalmente, as salas Mastercard Black no Terminal 3 do Aeroporto de Guarulhos têm acesso totalmente gratuito e ilimitado para o portador do cartão.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Até 6 adicionais grátis!</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Este é um dos grandes trunfos do C6 Carbon. Você pode emitir até 6 cartões adicionais sem pagar nenhuma anuidade extra por eles. O melhor de tudo é que cada cartão adicional herda os benefícios de seguro de viagem e também os 4 acessos LoungeKey individuais, multiplicando as vantagens para toda a sua família.
      </p>
    `
  },
  {
    slug: "inter-black",
    title: "Cartão Inter Black Mastercard: Como Conseguir com Anuidade Zero de Verdade",
    shortDescription: "Com acessos ilimitados a salas VIP e cashback de 1% direto na conta corrente, o Inter Black se destaca por não cobrar anuidade se você cumprir regras acessíveis. Veja as estratégias de isenção.",
    category: "Sem Anuidade",
    score: 9.2,
    anuidade: "Totalmente grátis cumprindo uma das metas: R$ 250 mil investidos no Inter; assinando o plano anual Duo Gourmet; ou acumulando R$ 7.000 em gastos mensais nas últimas 4 faturas.",
    cashback: "1% de cashback creditado diretamente na conta corrente após o pagamento integral da fatura em débito automático.",
    pontos: "Não possui pontos, mas o cashback é direto em dinheiro na conta, sem burocracia para resgatar.",
    limiteEstimado: "R$ 10.000 a R$ 50.000+",
    loungeAccess: "Acesso gratuito e ILIMITADO às salas VIP parceiras em todo o Brasil (salas VIP Inter em Curitiba e Guarulhos, e salas parceiras da rede LoungeKey).",
    pros: [
      "Anuidade zero real através de metas fáceis de atingir (como Duo Gourmet)",
      "Salas VIP ilimitadas para o titular (uma das melhores políticas do mercado)",
      "Cashback limpo de 1% direto em conta, sem necessidade de converter pontos",
      "Plataforma de investimentos completa no Banco Inter",
      "Acesso às ofertas exclusivas e descontos do Inter Loop"
    ],
    cons: [
      "Para ter direito à isenção via Duo Gourmet, é preciso pagar a assinatura do plano gastronômico",
      "Não acumula pontos clássicos de milhagem",
      "Alguns usuários relatam redução arbitrária de limites por inatividade"
    ],
    author: "Ana Costa",
    authorRole: "Analista de Finanças Pessoais",
    date: "20/06/2026",
    readTime: "9 min",
    cardColor: "from-purple-900 via-indigo-950 to-slate-950 border border-indigo-500/20 text-indigo-200",
    cardBrand: "mastercard",
    cardLevel: "Black",
    recommendedFor: "Quem quer salas VIP ilimitadas em aeroportos e prefere cashback automático em conta corrente em vez de se preocupar com milhas.",
    detailedContent: `
      <p class="lead text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        O <strong>Inter Black</strong> consolidou-se como uma das formas mais acessíveis do mercado brasileiro para desfrutar de um cartão da categoria Mastercard Black sem pagar anuidade. Seus principais pilares são as salas VIP ilimitadas e o cashback descomplicado.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">O Atalho do Duo Gourmet</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        A estratégia mais popular para obter o Inter Black é assinando o plano anual do <strong>Inter Duo Gourmet</strong>. Trata-se de um guia de restaurantes onde, ao comprar um prato principal, o cliente ganha outro de igual ou menor valor de cortesia.
      </p>
      <p class="text-slate-600 leading-relaxed mb-4">
        Ao assinar a modalidade anual do Duo Gourmet, você tem o direito garantido de solicitar o Cartão Inter Black sem anuidade. O valor da assinatura se paga rapidamente se você costuma comer fora com frequência, tornando-se o melhor atalho para os benefícios Black do mercado.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Acesso Ilimitado a Salas VIP</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Diferente de concorrentes que limitam os acessos a 2 ou 4 por ano, o Inter Black oferece <strong>acesso ilimitado e gratuito</strong> às salas VIP parceiras para o titular do cartão. O Banco Inter possui salas VIP próprias nos aeroportos de Guarulhos (GRU) e Curitiba (CWB), além de parceria direta com a rede LoungeKey nos principais aeroportos nacionais e internacionais.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Cashback Simplificado de 1%</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        O cashback do Inter Black é direto e limpo. Você gasta, paga a fatura em débito automático e recebe exatamente 1% de volta direto na sua conta corrente. Sem pontos para transferir, sem tabelas complexas e sem prazo de validade. Dinheiro líquido que você pode gastar, sacar ou investir como preferir.
      </p>
    `
  },
  {
    slug: "xp-visa-infinite",
    title: "XP Visa Infinite 2026: Anuidade Zero, Investback e Salas VIP Inclusas",
    shortDescription: "Ideal para quem já investe pela corretora, o XP Visa Infinite não possui anuidade e oferece o Investback - o cashback que vira investimento automaticamente. Entenda como funciona.",
    category: "Sem Anuidade",
    score: 8.9,
    anuidade: "Totalmente ZERO para sempre, sem nenhuma regra de gastos mensais exigida.",
    cashback: "1% de Investback (cashback que é aplicado automaticamente em um fundo de renda fixa com rendimento de 100% do CDI).",
    pontos: "Não pontua em milhas, o foco total é o Investback para impulsionar seus investimentos.",
    limiteEstimado: "R$ 5.000 a R$ 50.000+",
    loungeAccess: "De 2 a 4 acessos gratuitos por ano via aplicativo Dragon Pass (rede Visa Airport Companion). Adicionalmente, acessos em salas exclusivas XP.",
    pros: [
      "Anuidade grátis vitalícia, sem letras miúdas",
      "Emitido na bandeira Visa Infinite (seguro de emergência médica, atraso de bagagem, proteção de preços)",
      "Investback prático e automático que ajuda no planejamento financeiro",
      "Permite emitir até 6 cartões adicionais gratuitos",
      "Aprovação ágil para quem já é cliente XP com saldo"
    ],
    cons: [
      "É necessário ter no mínimo R$ 5.000 investidos na XP para estar elegível para o cartão",
      "Límite de acessos a salas VIP é mais restrito que outros cartões Black",
      "Não permite acúmulo de milhas em programas aéreos"
    ],
    author: "Carlos Rodrigues",
    authorRole: "Planejador Financeiro Certificado",
    date: "18/06/2026",
    readTime: "11 min",
    cardColor: "from-slate-950 via-slate-900 to-amber-950/20 border border-amber-500/20 text-slate-300",
    cardBrand: "visa",
    cardLevel: "Infinite",
    recommendedFor: "Investidores iniciantes ou experientes que buscam um excelente cartão Visa Infinite secundário sem custos fixos e com bons benefícios de seguro de viagem.",
    detailedContent: `
      <p class="lead text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        O <strong>XP Visa Infinite</strong> revolucionou o mercado ao democratizar o acesso à variante topo de linha da Visa (Infinite) com custo zero. Ele é oferecido exclusivamente para quem possui investimentos custodiados na corretora XP Investimentos.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Como funciona o Investback?</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        O Investback é o cashback inovador da XP. Todas as compras acumulam <strong>1% de retorno</strong>. Ao atingir o mínimo acumulado de R$ 50, o dinheiro é investido de forma 100% automática em um fundo de renda fixa de liquidez diária que acompanha a taxa Selic.
      </p>
      <p class="text-slate-600 leading-relaxed mb-4">
        Para quem faz compras no Shopping XP dentro do aplicativo, o Investback pode atingir taxas excelentes de 2% a até 10% de retorno em marcas parceiras. É uma forma fantástica de forçar uma poupança mensal que trabalha a seu favor ao longo do tempo.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Salas VIP Dragon Pass (Visa Airport Companion)</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        A política de acessos depende do seu montante total de investimentos na corretora XP:
      </p>
      <ul class="list-disc pl-6 text-slate-600 space-y-2 mb-6">
        <li><strong>Investimentos de R$ 5.000 a R$ 49.999:</strong> Recebe 2 acessos gratuitos por ano via aplicativo Visa Airport Companion.</li>
        <li><strong>Investimentos de R$ 50.000 ou mais:</strong> Recebe 4 acessos gratuitos por ano para utilizar como quiser em salas VIP parceiras.</li>
      </ul>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Vantagens Completas da Variante Visa Infinite</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Como o cartão pertence à categoria Visa Infinite, você tem acesso a coberturas de seguro excelentes, contanto que compre suas passagens aéreas ou taxas de embarque com o cartão XP:
      </p>
      <ul class="list-disc pl-6 text-slate-600 space-y-2 mb-6">
        <li><strong>Seguro Médico Internacional:</strong> Atendimento médico e hospitalar de urgência gratuito no exterior para toda a família.</li>
        <li><strong>Proteção de Preço Visa:</strong> Se você comprar um produto e encontrar o mesmo item mais barato em até 30 dias, a Visa reembolsa a diferença.</li>
        <li><strong>Garantia Estendida Original:</strong> Dobra o período de garantia do fabricante para eletrônicos e eletrodomésticos adquiridos com o cartão.</li>
      </ul>
    `
  },
  {
    slug: "santander-unlimited-infinite",
    title: "Santander Unlimited Visa Infinite: O Rei dos Cartões VIP Alta Renda",
    shortDescription: "Considerado um dos cartões mais cobiçados do país, o Unlimited do Santander oferece salas VIP ilimitadas com acompanhante e acúmulo agressivo de pontos Esfera. Saiba como conseguir.",
    category: "Alta Renda",
    score: 9.6,
    anuidade: "Grátis acumulando R$ 20.000 em compras no crédito por fatura. Caso contrário, R$ 107,50 por mês (R$ 1.290 ao ano).",
    cashback: "Não foca em cashback, mas os pontos podem ser vendidos ou trocados por crédito na fatura equivalendo a cerca de 1.5% de retorno.",
    pontos: "2,2 pontos Esfera por dólar gasto em compras nacionais e 3,0 pontos em compras internacionais. Pontos que NUNCA expiram.",
    limiteEstimado: "R$ 50.000 a ilimitado (Limite flexível)",
    loungeAccess: "Acesso gratuito e ILIMITADO às salas VIP Visa Airport Companion (Dragon Pass) com direito a levar até 8 acompanhantes gratuitos por ano.",
    pros: [
      "Acesso ilimitado e gratuito para titular e acompanhante nas salas Dragon Pass",
      "Programa Esfera com campanhas constantes de pontos extras e descontos",
      "Permite até 7 adicionais totalmente grátis herdando todos os benefícios",
      "Excelente seguro para aluguel de carros e cancelamento de voos",
      "Fácil gestão e controle no app Santander Way"
    ],
    cons: [
      "Exigência de gastos extremamente alta para isentar anuidade (R$ 20.000/mês)",
      "Exige vínculo de alta renda ou conta Santander Select",
      "Anuidade alta caso não cumpra a meta de gastos"
    ],
    author: "Maria Santos",
    authorRole: "Especialista em Programas de Milhagem",
    date: "12/06/2026",
    readTime: "12 min",
    cardColor: "from-purple-950 via-purple-900 to-rose-950/20 border border-purple-500/30 text-purple-200",
    cardBrand: "visa",
    cardLevel: "Infinite",
    recommendedFor: "Pessoas com alto poder aquisitivo que viajam constantemente em classe executiva ou internacional, e desejam o topo absoluto em seguros e salas VIP.",
    detailedContent: `
      <p class="lead text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        O <strong>Santander Unlimited Visa Infinite</strong> é o pináculo da linha de cartões do Santander Brasil. Extremamente exclusivo, ele se posiciona como um dos melhores cartões do país por sua generosa política de convidados para salas VIP e excelente taxa de pontuação Esfera.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">A Fantástica Política de Acesso a Salas VIP</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Diferente de quase todos os outros cartões premium que cobram pela entrada de acompanhantes, o Santander Unlimited oferece acessos gratuitos e <strong>ilimitados</strong> via rede Dragon Pass para o titular do cartão, e concede <strong>8 acessos gratuitos por ano para acompanhantes</strong> dividirem suas viagens.
      </p>

      <h2 class="text-2xl font-bold font-display text-slate-900 mt-8 mb-4">Programa Esfera de Pontuação Agressiva</h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        O acúmulo de pontos no programa Esfera é altamente vantajoso: <strong>2,2 pontos por dólar</strong> em compras nacionais e excelentes <strong>3,0 pontos por dólar</strong> em transações internacionais no exterior. O Santander realiza rotineiramente a campanha "Bateu, Ganhou", onde clientes que batem metas individuais de compras ganham pontuações extraordinárias que chegam a incríveis 4,5 pontos por dólar, turbinando o saldo de milhas de maneira sem igual.
      </p>
    `
  }
];
