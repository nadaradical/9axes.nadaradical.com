// Formato: cada pergunta pode ser string ou objeto { question: "...", weight: 1.5 }
questions = 
    [[//Descentralização-Centralização
        [//4
            { question: "Portugal deveria ser um Estado federal com regiões altamente autónomas.", weight: 1 },
            { question: "As regiões devem ter autonomia quase total para definir as suas políticas.", weight: 1 },
            { question: "O Governo central deveria ter muito menos poder do que as regiões.", weight: 1 }
        ],
        [//3
            { question: "Portugal deveria criar regiões administrativas com poderes fortes.", weight: 1 },
            { question: "As regiões devem controlar grande parte das suas políticas públicas.", weight: 1 },
            { question: "O poder político deveria ser transferido de Lisboa para as regiões.", weight: 1 }
        ],
        [//2
            { question: "As autarquias deveriam ter mais autonomia para tomar decisões locais.", weight: 1 },
            { question: "As regiões deveriam poder adaptar políticas nacionais à sua realidade.", weight: 1 },
            { question: "Mais competências deveriam ser transferidas para os governos locais.", weight: 1 }
            
        ],
        [//1
            { question: "Os governos locais normalmente compreendem melhor os problemas da sua região.", weight: 1 },
            { question: "A descentralização pode melhorar a eficácia das políticas públicas.", weight: 1 },
            { question: "As autarquias devem ter algum grau de autonomia para decidir prioridades locais.", weight: 1 }
        ],
        [//-1
            { question: "O Governo central deve manter controlo sobre decisões importantes.", weight: 1 },
            { question: "Algumas políticas devem ser iguais em todo o país.", weight: 1 },
            { question: "O Estado central garante igualdade entre regiões.", weight: 1 }
        ],
        [//-2
            { question: "O Governo central deveria ter mais poder sobre as autarquias.", weight: 1 },
            { question: "As regiões não devem poder contrariar leis nacionais.", weight: 1 },
            { question: "Demasiada autonomia regional pode criar desigualdades.", weight: 1 }
        ],
        [//-3
            { question: "Portugal precisa de um Governo central forte para funcionar bem.", weight: 1 },
            { question: "As políticas públicas devem ser definidas principalmente a nível nacional.", weight: 1 },
            { question: "Autonomias regionais fortes enfraquecem a unidade nacional.", weight: 1 }
        ],
        [//-4
            { question: "Portugal deve ser governado de forma altamente centralizada.", weight: 1 },
            { question: "As regiões não devem ter autonomia política significativa.", weight: 1 },
            { question: "Um Governo central forte deve controlar quase todas as decisões importantes.", weight: 1 }
        ]],[//Democratico-Autoritário
        [//4
            { question: "A democracia direta deveria ser usada com muito mais frequência em Portugal.", weight: 1 },
            { question: "Os cidadãos deveriam poder revogar mandatos de políticos através de votação.", weight: 1 },
            { question: "As decisões políticas importantes deveriam ser tomadas diretamente pelos cidadãos.", weight: 1 }
        ],
        [//3
            { question: "Referendos nacionais deveriam ser usados com mais frequência.", weight: 1 },
            { question: "O Governo deve seguir a vontade da maioria sempre que possível.", weight: 1 },
            { question: "A participação direta dos cidadãos deve ter mais peso nas decisões políticas.", weight: 1 }
        ],
        [//2
            { question: "As eleições livres são essenciais para a legitimidade de um governo.", weight: 1 },
            { question: "Todos os cidadãos devem ter o mesmo peso no processo democrático.", weight: 1 },
            { question: "O poder político deve vir do voto popular.", weight: 1 }
        ],
        [//1
            { question: "A democracia é a melhor forma de governo disponível.", weight: 1 },
            { question: "Os cidadãos devem poder escolher livremente os seus líderes.", weight: 1 },
            { question: "Governos devem prestar contas aos eleitores.", weight: 1 }
        ],
        [//-1
            { question: "Em certas situações, um líder forte pode ser mais eficaz do que processos democráticos.", weight: 1 },
            { question: "A opinião popular nem sempre leva às melhores decisões.", weight: 1 },
            { question: "O Governo deve tomar decisões difíceis mesmo contra a opinião pública.", weight: 1 }
        ],
        [//-2
             { question: "Um governo forte é mais importante do que um processo democrático lento.", weight: 1 },
             { question: "A estabilidade política pode justificar limitar certos processos democráticos.", weight: 1 },
             { question: "Líderes experientes devem ter mais poder de decisão do que a população em geral.", weight: 1 }
        ],
        [//-3
            { question: "As massas são frequentemente mal informadas para tomar boas decisões políticas.", weight: 1 },
            { question: "Demasiada democracia pode levar à instabilidade.", weight: 1 },
            { question: "Algumas decisões políticas deveriam ser tomadas por especialistas em vez do povo.", weight: 1 }
        ],
        [//-4
            { question: "As eleições não são necessárias para governar um país.", weight: 1 },
            { question: "Os cidadãos devem obedecer às decisões da liderança sem questionar.", weight: 1 },
            { question: "Um governo forte não deve depender da opinião pública.", weight: 1 }
        ]],[//Globalista-Isolacionista
        [//4
            { question: "A integração internacional é essencial para o futuro da humanidade.", weight: 1 },
            { question: "As instituições internacionais deveriam ter mais poder para resolver problemas globais.", weight: 1 },
            { question: "Os países devem cooperar cada vez mais para enfrentar desafios globais.", weight: 1 }
        ],
        [//3
            { question: "A União Europeia deveria ter mais competências políticas.", weight: 1 },
            { question: "A cooperação internacional é essencial para resolver problemas globais.", weight: 1 },
            { question: "Portugal deve participar ativamente em organizações internacionais.", weight: 1 }
        ],
        [//2
            { question: "Portugal beneficia por fazer parte da União Europeia.", weight: 1 },
            { question: "O comércio internacional traz benefícios para todos os países.", weight: 1 },
            { question: "A cooperação entre nações promove estabilidade e prosperidade.", weight: 1 }
        ],
        [//1
            { question: "Alianças internacionais ajudam a proteger os interesses nacionais.", weight: 1 },
            { question: "A diplomacia internacional é importante para manter a paz.", weight: 1 },
            { question: "Os países devem trabalhar juntos quando têm interesses comuns.", weight: 1 }
        ],
        [//-1
            { question: "A soberania nacional deve ter prioridade sobre decisões internacionais.", weight: 1 },
            { question: "Portugal deve proteger os seus interesses nacionais antes de compromissos internacionais.", weight: 1 },
            { question: "Algumas decisões importantes devem ser tomadas apenas a nível nacional.", weight: 1 }
        ],
        [//-2
            { question: "A União Europeia tem demasiado poder sobre os países membros.", weight: 1 },
            { question: "Portugal deveria ter mais independência em relação a organizações internacionais.", weight: 1 },
            { question: "A globalização tem prejudicado a soberania dos países.", weight: 1 }
        ],
        [//-3
            { question: "Portugal deve evitar envolver-se demasiado em assuntos internacionais.", weight: 1 },
            { question: "As organizações internacionais interferem demasiado na política nacional.", weight: 1 },
            { question: "Cada país deve resolver os seus próprios problemas sem interferência externa.", weight: 1 }
        ],
        [//-4
            { question: "As alianças internacionais limitam a independência dos países.", weight: 1 },
            { question: "Portugal deveria afastar-se de organizações internacionais.", weight: 1 },
            { question: "Os países devem evitar compromissos internacionais que limitem a sua soberania.", weight: 1 }
        ]],[//Militarista-Pacifista
        [//4
            { question: "Portugal deve aumentar significativamente o orçamento das Forças Armadas.", weight: 1 },
            { question: "Uma nação deve estar sempre preparada para usar força militar para defender os seus interesses.", weight: 1 },
            { question: "As Forças Armadas devem ter um papel central na segurança nacional.", weight: 1 }
        ],
        [//3
            { question: "Portugal deve investir mais em capacidades militares modernas.", weight: 1 },
            { question: "A presença militar forte ajuda a garantir estabilidade internacional.", weight: 1 },
            { question: "As Forças Armadas devem participar ativamente em missões internacionais.", weight: 1 }
        ],
        [//2
            { question: "Portugal deve manter forças armadas fortes e bem equipadas.", weight: 1 },
            { question: "Uma opção militar deve estar sempre disponível para defender o país.", weight: 1 },
            { question: "As alianças militares são importantes para a segurança nacional.", weight: 1 }
        ],
        [//1
            { question: "Um país precisa de forças armadas para se proteger.", weight: 1 },
            { question: "Devemos respeitar aqueles que servem nas forças armadas.", weight: 1 },
            { question: "A defesa nacional é uma responsabilidade importante do Estado.", weight: 1 }
        ],
        [//-1
            { question: "A diplomacia deve ser preferida à ação militar sempre que possível.", weight: 1 },
            { question: "Evitar conflitos armados deve ser uma prioridade.", weight: 1 },
            { question: "A cooperação internacional pode prevenir guerras.", weight: 1 }
        ],
        [//-2
            { question: "O investimento militar deveria ser reduzido para financiar serviços públicos.", weight: 1 },
            { question: "A guerra normalmente traz mais problemas do que soluções.", weight: 1 },
            { question: "Os países devem evitar usar força militar no estrangeiro.", weight: 1 }
        ],
        [//-3
            { question: "As despesas militares são frequentemente um desperdício de recursos.", weight: 1 },
            { question: "As nações não devem intervir militarmente noutros países.", weight: 1 },
            { question: "A resolução pacífica de conflitos deve ser sempre priorizada.", weight: 1 }
        ],
        [//-4
            { question: "A guerra nunca é justificável.", weight: 1 },
            { question: "As forças armadas não deveriam ter um papel importante na política internacional.", weight: 1 },
            { question: "Os países deveriam abolir os seus exércitos permanentes.", weight: 1 }
        ]],[//Segurança-Liberdade
        [//4
            { question: "O Governo deve poder monitorizar comunicações para prevenir terrorismo.", weight: 1 },
            { question: "Câmaras de vigilância devem ser amplamente usadas nas cidades.", weight: 1 },
            { question: "A segurança pública deve ter prioridade sobre a privacidade.", weight: 1 }
        ],
        [//3
            { question: "A polícia precisa de mais poderes para combater o crime.", weight: 1 },
            { question: "O Estado deve poder recolher dados digitais para investigações.", weight: 1 },
            { question: "A vigilância estatal pode ser necessária para garantir segurança.", weight: 1 }
        ],
        [//2
            { question: "Algumas liberdades devem ser limitadas para manter a ordem pública.", weight: 1 },
            { question: "A polícia deve ter mais autoridade para combater criminalidade.", weight: 1 },
            { question: "A segurança da sociedade é mais importante do que certas liberdades individuais.", weight: 1 }
        ],
        [//1
            { question: "Alguma vigilância governamental é aceitável para manter segurança.", weight: 1 },
            { question: "A polícia deve ter ferramentas modernas para combater o crime.", weight: 1 },
            { question: "A liberdade absoluta pode tornar uma sociedade perigosa.", weight: 1 }
        ],
        [//-1
            { question: "O Estado não deve interferir na vida privada sem forte justificação.", weight: 1 },
            { question: "A liberdade individual deve ser uma prioridade política.", weight: 1 },
            { question: "A privacidade dos cidadãos deve ser protegida.", weight: 1 }
        ],
        [//-2
            { question: "O reconhecimento facial pelo Estado deve ser proibido.", weight: 1 },
            { question: "A polícia deve ser mais controlada por mecanismos independentes.", weight: 1 },
            { question: "A vigilância estatal ameaça as liberdades individuais.", weight: 1 }
        ],
        [//-3
            { question: "O Governo não deve recolher dados pessoais em massa.", weight: 1 },
            { question: "A privacidade digital deve ser fortemente protegida.", weight: 1 },
            { question: "A polícia tem demasiado poder na sociedade moderna.", weight: 1 }
        ],
        [//-4
            { question: "A vigilância estatal nunca deve ser permitida.", weight: 1 },
            { question: "A existência do Estado representa um risco para a liberdade individual.", weight: 1 },
            { question: "A liberdade individual deve ser praticamente ilimitada.", weight: 1 }
        ]],[//Intervencionismo-Livre_Mercado
        [//4
            { question: "O Estado deve controlar os preços da habitação para garantir casas acessíveis.", weight: 1 },
            { question: "O Governo deve nacionalizar setores estratégicos como energia ou transportes.", weight: 1 },
            { question: "A riqueza deve ser redistribuída agressivamente para reduzir desigualdades.", weight: 1 }
        ],
        [//3
            { question: "Os impostos sobre os mais ricos devem aumentar significativamente.", weight: 1 },
            { question: "Serviços essenciais como saúde, energia e transportes devem ser públicos.", weight: 1 },
            { question: "O Estado deve intervir diretamente para reduzir desigualdades económicas.", weight: 1 }
        ],
        [//2
            { question: "O Governo deve regular o mercado da habitação.", weight: 1 },
            { question: "O Serviço Nacional de Saúde deve ser prioritariamente público.", weight: 1 },
            { question: "Grandes empresas devem pagar mais impostos do que atualmente.", weight: 1 }
        ],
        [//1
            { question: "O Estado deve regular empresas para proteger consumidores e trabalhadores.", weight: 1 },
            { question: "Alguma intervenção estatal na economia é necessária.", weight: 1 },
            { question: "A economia deve ter menos intervenção estatal.", weight: 1 }
        ],
        [//-1
            { question: "As empresas privadas normalmente gerem recursos melhor do que o Estado.", weight: 1 },
            { question: "Impostos elevados prejudicam o crescimento económico.", weight: 1 },
            { question: "A economia deve ter menos intervenção estatal.", weight: 1 }
        ],
        [//-2
            { question: "Empresas públicas devem ser privatizadas sempre que possível.", weight: 1 },
            { question: "Reduzir impostos ajuda a economia a crescer.", weight: 1 },
            { question: "O Estado interfere demasiado na economia.", weight: 1 }
        ],
        [//-3
            { question: "O mercado livre resolve problemas económicos melhor do que o Governo.", weight: 1 },
            { question: "O Estado não deve interferir no funcionamento das empresas.", weight: 1 },
            { question: "A competição de mercado deve ser quase totalmente livre.", weight: 1 }
        ],
        [//-4
            { question: "O Estado não deve intervir na economia.", weight: 1 },
            { question: "Impostos são essencialmente uma forma de coerção estatal.", weight: 1 },
            { question: "O mercado deve funcionar completamente sem regulação.", weight: 1 }
        ]],[//Secular-Religioso
        [//4
            { question: "O Estado deve ser completamente laico e não reconhecer qualquer religião.", weight: 1 },
            { question: "A religião não deve ter qualquer influência na política.", weight: 1 },
            { question: "As instituições públicas devem ser totalmente separadas de qualquer religião.", weight: 1 }
        ],
        [//3
            { question: "O Governo não deve financiar organizações religiosas.", weight: 1 },
            { question: "A religião deve ser mantida fora das decisões políticas.", weight: 1 },
            { question: "O Estado deve tratar todas as religiões de forma estritamente neutra.", weight: 1 }
        ],
        [//2
            { question: "As leis devem basear-se apenas em princípios seculares.", weight: 1 },
            { question: "A religião deve permanecer uma questão privada.", weight: 1 },
            { question: "O Estado deve manter uma separação clara entre Igreja e política.", weight: 1 }
        ],
        [//1
            { question: "A religião não deve influenciar diretamente as leis.", weight: 1 },
            { question: "O Estado deve ser neutro em relação às crenças religiosas.", weight: 1 },
            { question: "A separação entre Igreja e Estado é importante.", weight: 1 }
        ],
        [//-1
            { question: "A religião pode contribuir positivamente para a sociedade.", weight: 1 },
            { question: "As pessoas devem poder expressar publicamente a sua fé.", weight: 1 },
            { question: "Os valores religiosos podem inspirar decisões pessoais e sociais.", weight: 1 }
        ],
        [//-2
            { question: "A religião desempenha um papel importante na cultura de um país.", weight: 1 },
            { question: "As organizações religiosas ajudam frequentemente os mais necessitados.", weight: 1 },
            { question: "Os valores religiosos podem ser uma base moral importante para a sociedade.", weight: 1 }
        ],
        [//-3
            { question: "A religião deve ter maior influência na vida pública.", weight: 1 },
            { question: "As instituições religiosas devem ter um papel relevante na educação.", weight: 1 },
            { question: "Os valores religiosos devem orientar mais a sociedade.", weight: 1 }
        ],
        [//-4
            { question: "O Governo deve promover ativamente valores religiosos.", weight: 1 },
            { question: "A sociedade deve seguir princípios religiosos tradicionais.", weight: 1 },
            { question: "O Estado deve apoiar oficialmente uma religião dominante.", weight: 1 }
        ]],[//Progressista-Conservador
        [//4
            { question: "A sociedade deve abraçar mudanças sociais mesmo que desafiem tradições antigas.", weight: 1 },
            { question: "A ciência e a tecnologia devem guiar as decisões políticas.", weight: 1 },
            { question: "O progresso social exige questionar normas culturais antigas.", weight: 1 }
        ],
        [//3
            { question: "A igualdade de direitos para minorias deve ser uma prioridade política.", weight: 1 },
            { question: "A sociedade deve adaptar-se rapidamente às mudanças culturais.", weight: 1 },
            { question: "O progresso social normalmente melhora a qualidade de vida.", weight: 1 }
        ],
        [//2
            { question: "A sociedade deve evoluir com base em novos conhecimentos científicos.", weight: 1 },
            { question: "As mudanças sociais são uma parte natural do progresso.", weight: 1 },
            { question: "As instituições devem adaptar-se a novos valores sociais.", weight: 1 }
            
        ],
        [//1
            { question: "A sociedade deve equilibrar tradição e mudança.", weight: 1 },
            { question: "Algumas tradições devem ser repensadas ao longo do tempo.", weight: 1 },
            { question: "O progresso social pode trazer benefícios importantes.", weight: 1 }
        ],
        [//-1
            { question: "Tradições culturais devem ser preservadas.", weight: 1 },
            { question: "Mudanças sociais demasiado rápidas podem ser prejudiciais.", weight: 1 },
            { question: "Os valores familiares tradicionais são importantes para a sociedade.", weight: 1 }
        ],
        [//-2
            { question: "A sociedade moderna está a abandonar valores importantes.", weight: 1 },
            { question: "Devemos proteger tradições culturais mesmo quando são criticadas.", weight: 1 },
            { question: "As instituições tradicionais são fundamentais para estabilidade social.", weight: 1 }
        ],
        [//-3
            { question: "A sociedade era mais estável no passado.", weight: 1 },
            { question: "A tradição deve ser priorizada em relação a mudanças sociais.", weight: 1 },
            { question: "Os valores culturais tradicionais devem ser preservados.", weight: 1 }
        ],
        [//-4
            { question: "A sociedade moderna afastou-se demasiado das tradições.", weight: 1 },
            { question: "O progresso social frequentemente destrói valores importantes.", weight: 1 },
            { question: "Devemos regressar a valores sociais mais tradicionais.", weight: 1 }
        ]],[//Assimilacionista-Multiculturalista
        [//4
            { question: "Imigrantes devem adaptar-se completamente à cultura do país de acolhimento.", weight: 1 },
            { question: "A cultura nacional deve ser preservada acima de influências externas.", weight: 1 },
            { question: "A integração cultural deve ser uma prioridade para imigrantes.", weight: 1 }
        ],
        [//3
            { question: "Imigrantes devem aprender a língua e costumes locais rapidamente.", weight: 1 },
            { question: "É importante proteger a identidade cultural nacional.", weight: 1 },
            { question: "A imigração deve exigir adaptação cultural.", weight: 1 }
        ],
        [//2
            { question: "A integração cultural é importante para a coesão social.", weight: 1 },
            { question: "Imigrantes devem respeitar os valores do país de acolhimento.", weight: 1 },
            { question: "A cultura nacional deve ter prioridade no espaço público.", weight: 1 }
        ],
        [//1
            { question: "É razoável esperar que imigrantes aprendam a língua local.", weight: 1 },
            { question: "A proteção da cultura nacional é importante.", weight: 1 },
            { question: "A imigração deve ser acompanhada de políticas de integração.", weight: 1 }
        ],
        [//-1
            { question: "A diversidade cultural pode enriquecer a sociedade.", weight: 1 },
            { question: "A imigração pode trazer novas ideias e perspetivas.", weight: 1 },
            { question: "A convivência entre culturas diferentes é positiva.", weight: 1 }
        ],
        [//-2
            { question: "Uma sociedade multicultural pode ser mais dinâmica.", weight: 1 },
            { question: "A diversidade cultural deve ser valorizada.", weight: 1 },
            { question: "As culturas devem coexistir livremente dentro de um país.", weight: 1 }
        ],
        [//-3
            { question: "A mistura cultural melhora a sociedade.", weight: 1 },
            { question: "A diversidade cultural deve ser encorajada.", weight: 1 },
            { question: "As sociedades modernas são naturalmente multiculturais.", weight: 1 }
        ],	
        [//-4
            { question: "As fronteiras culturais não deveriam limitar a convivência humana.", weight: 1 },
            { question: "As culturas devem misturar-se livremente.", weight: 1 },
            { question: "A diversidade cultural global beneficia toda a humanidade.", weight: 1 }
        ]
    ]];
