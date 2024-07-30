const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de conseguir seu primeiro emprego como padeiro em uma padaria local. No seu primeiro dia, seu chefe te pede para preparar uma fornada de pães de centeio. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Peço ajuda a um colega mais experiente para garantir que tudo saia perfeito.",
                afirmacao: "Desde o início, mostrou humildade e vontade de aprender com os mais experientes."
            },
            {
                texto: "Vou tentar fazer sozinho, usando um guia de receitas que encontrei online.",
                afirmacao: "Demonstrou iniciativa e confiança em suas habilidades, usando recursos disponíveis."
            }
        ]
    },
    {
        enunciado: "Um cliente regular chega à padaria e pede uma sugestão de algo doce, mas saudável. O que você recomenda?",
        alternativas: [
            {
                texto: "Sugiro o nosso pão de banana integral, que é saboroso e tem menos açúcar.",
                afirmacao: "Demonstrou conhecimento sobre os produtos e preocupação com a saúde dos clientes."
            },
            {
                texto: "Recomendo nosso bolo de chocolate, pois é sempre um sucesso entre os clientes.",
                afirmacao: "Optou por sugerir algo popular, garantindo a satisfação do cliente."
            }
        ]
    },
    {
        enunciado: "Durante uma manhã movimentada, a máquina de café quebra. Como você lida com a situação?",
        alternativas: [
            {
                texto: "Aviso o chefe imediatamente e tento encontrar uma solução temporária, como oferecer chá.",
                afirmacao: "Mostrou proatividade em resolver problemas e manter os clientes satisfeitos."
            },
            {
                texto: "Informo os clientes sobre o problema e ofereço um desconto em produtos de padaria como compensação.",
                afirmacao: "Demonstrou empatia pelos clientes e habilidade para lidar com situações difíceis."
            }
        ]
    },
    {
        enunciado: "Você está encarregado de criar uma nova receita para o cardápio da padaria. Qual é sua abordagem?",
        alternativas: [
            {
                texto: "Pesquiso tendências de panificação online e experimento várias receitas até encontrar a ideal.",
                afirmacao: "Mostrou dedicação à inovação e esforço em criar algo novo e delicioso."
            },
            {
                texto: "Peço sugestões aos clientes sobre o que gostariam de ver na padaria e crio uma receita baseada nas suas preferências.",
                afirmacao: "Demonstrou habilidade em envolver os clientes e atender suas demandas."
            }
        ]
    },
    {
        enunciado: "No final do dia, você nota que há muito desperdício de pães. O que você sugere para evitar isso no futuro?",
        alternativas: [
            {
                texto: "Sugiro doarmos os pães não vendidos para uma instituição de caridade local.",
                afirmacao: "Mostrou sensibilidade social e preocupação com o desperdício de alimentos."
            },
            {
                texto: "Proponho ajustar a quantidade de pães produzidos diariamente com base nas vendas anteriores.",
                afirmacao: "Demonstrou habilidade em pensar estrategicamente para melhorar a eficiência."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo da sua jornada:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();
