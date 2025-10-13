// Base de dados de exercícios COMPLETA
const dadosTreinos = {
    grupos_treino: {
        A: {
            nome: "🦵 PERNA E GLÚTEO",
            exercicios: [
                { nome: "Agachamento Livre", series: "4", repeticoes: "12", dica: "Mantenha as costas retas" },
                { nome: "Agachamento no Smith", series: "4", repeticoes: "12", dica: "Use a máquina para focar na técnica" },
                { nome: "Agachamento no Cross", series: "4", repeticoes: "12", dica: "Foco no movimento controlado" },
                { nome: "Agachamento Sumô", series: "4", repeticoes: "12", dica: "Ênfase na parte interna das coxas" },
                { nome: "Super Hack INVERTIDO", series: "4", repeticoes: "12", dica: "Posição invertida para variação" },
                { nome: "Sumô no Leg", series: "4", repeticoes: "12", dica: "Posição ampla no leg press" },
                { nome: "Flexão de Quadril", series: "4", repeticoes: "12", dica: "Trabalho específico do quadril" },
                { nome: "Hack Machine (Hack Squat)", series: "4", repeticoes: "12", dica: "Máquina específica para hack" },
                { nome: "Levantamento Terra", series: "4", repeticoes: "12", dica: "Exercício completo para posterior" },
                { nome: "Leg Press 45°", series: "4", repeticoes: "12", dica: "Não trave os joelhos" },
                { nome: "Leg 45° Articulado", series: "4", repeticoes: "12", dica: "Variação do leg press" },
                { nome: "Leg 45° Unilateral", series: "4", repeticoes: "12", dica: "Trabalho individualizado" },
                { nome: "Leg Press 80°", series: "4", repeticoes: "12", dica: "Ângulo diferente para variação" },
                { nome: "Leg Press 180°", series: "4", repeticoes: "12", dica: "Posição horizontal" },
                { nome: "Extensora", series: "4", repeticoes: "10", dica: "Foco no quadríceps" },
                { nome: "Extensora Unilateral", series: "4", repeticoes: "10", dica: "Trabalho individual das pernas" },
                { nome: "Flexora Deitada", series: "4", repeticoes: "12", dica: "Controle a descida" },
                { nome: "Flexora em Pé", series: "4", repeticoes: "12", dica: "Variação em pé" },
                { nome: "Flexora Sentada", series: "4", repeticoes: "12", dica: "Posição sentada para isolar" },
                { nome: "Stiff", series: "3", repeticoes: "12", dica: "Mantenha as costas retas" },
                { nome: "Bom Dia", series: "3", repeticoes: "12", dica: "Cuidado com a postura" },
                { nome: "Adução Sentado", series: "3", repeticoes: "15", dica: "Trabalho de adutores" },
                { nome: "Abdução Sentado DROPSET", series: "3", repeticoes: "10 + 10", dica: "Drop set para intensidade" },
                { nome: "Adução em Pé", series: "3", repeticoes: "15", dica: "Variação em pé" },
                { nome: "Abdução em Pé", series: "3", repeticoes: "15", dica: "Trabalho de abdutores" },
                { nome: "Glúteo na Máquina", series: "3", repeticoes: "12", dica: "Máquina específica para glúteo" },
                { nome: "Afundo Búlgaro", series: "3", repeticoes: "12", dica: "Passo amplo e controlado" },
                { nome: "Step Up", series: "3", repeticoes: "12", dica: "Trabalho unilateral" },
                { nome: "Barra Hexagonal", series: "3", repeticoes: "12", dica: "Barra hexagonal para melhor pegada" },
                { nome: "Extensão de Quadril no Cross", series: "3", repeticoes: "12", dica: "Uso do cabo para glúteo" },
                { nome: "Elevação Pélvica", series: "3", repeticoes: "12", dica: "Foco máximo no glúteo" },
                { nome: "Afundo", series: "3", repeticoes: "12", dica: "Avanço com peso livre" },
                { nome: "Afundo no Smith", series: "3", repeticoes: "12", dica: "Avanço com barra guiada" },
                { nome: "Panturrilha Sentada", series: "4", repeticoes: "15", dica: "Trabalho da panturrilha sentado" },
                { nome: "Panturrilha em Pé", series: "4", repeticoes: "15", dica: "Amplitude máxima" },
                { nome: "Panturrilha no Leg Press", series: "4", repeticoes: "15", dica: "Uso do leg press" },
                { nome: "Panturrilha no Hack", series: "4", repeticoes: "15", dica: "Máquina específica" }
            ]
        },
        B: {
            nome: "💪 OMBRO E TRAPÉZIO",
            exercicios: [
                { nome: "Elevação Lateral", series: "4", repeticoes: "12", dica: "Cotovelos levemente flexionados" },
                { nome: "Elevação Lateral Inclinada", series: "4", repeticoes: "12", dica: "Foco no deltóide posterior" },
                { nome: "Elevação Lateral 3 Fases", series: "4", repeticoes: "12", dica: "Trabalho completo do ombro" },
                { nome: "Elevação Frontal", series: "4", repeticoes: "12", dica: "Deltoide anterior" },
                { nome: "Elevação Lateral e Frontal", series: "4", repeticoes: "12", dica: "Combinação de movimentos" },
                { nome: "Desenvolvimento por Frente em Pé", series: "4", repeticoes: "10", dica: "Exercício composto" },
                { nome: "Desenvolvimento por Frente Sentado", series: "4", repeticoes: "10", dica: "Maior estabilidade" },
                { nome: "Desenvolvimento com Halteres", series: "4", repeticoes: "10", dica: "Amplitude natural" },
                { nome: "Arnold Press", series: "4", repeticoes: "10", dica: "Rotação durante o movimento" },
                { nome: "Cross Invertido", series: "4", repeticoes: "12", dica: "Deltoide posterior" },
                { nome: "Encolhimento com Halteres", series: "4", repeticoes: "12", dica: "Trapézio superior" },
                { nome: "Remada Alta", series: "4", repeticoes: "12", dica: "Cuidado com a altura" },
                { nome: "Encolhimento com Barra Frente", series: "4", repeticoes: "12", dica: "Trapézio frontal" },
                { nome: "Encolhimento com Barra Trás", series: "4", repeticoes: "12", dica: "Trapézio posterior" },
                { nome: "Rotação Interna", series: "4", repeticoes: "15", dica: "Manguito rotador" },
                { nome: "Rotação Externa", series: "4", repeticoes: "15", dica: "Saúde dos ombros" }
            ]
        },
        C: {
            nome: "💪 PEITO E TRÍCEPS",
            exercicios: [
                { nome: "Supino Reto", series: "4", repeticoes: "10", dica: "Controle o movimento" },
                { nome: "Supino Inclinado", series: "4", repeticoes: "10", dica: "Foco no peitoral superior" },
                { nome: "Supino Declinado", series: "4", repeticoes: "10", dica: "Foco no peitoral inferior" },
                { nome: "Supino Vertical na Máquina", series: "4", repeticoes: "10", dica: "Máquina guiada" },
                { nome: "Supino Reto Articulado", series: "4", repeticoes: "10", dica: "Variação articulada" },
                { nome: "Supino Declinado Articulado", series: "4", repeticoes: "10", dica: "Declinado articulado" },
                { nome: "Crucifixo Reto", series: "3", repeticoes: "12", dica: "Amplitude máxima" },
                { nome: "Crucifixo Inclinado", series: "3", repeticoes: "12", dica: "Peitoral superior" },
                { nome: "Crucifixo Declinado", series: "3", repeticoes: "12", dica: "Foco no peitoral inferior" },
                { nome: "Pull Over", series: "3", repeticoes: "12", dica: "Alongamento do peitoral" },
                { nome: "Cross Over", series: "3", repeticoes: "12", dica: "Pico de contração" },
                { nome: "Paralela", series: "3", repeticoes: "12", dica: "Excelente para peitoral" },
                { nome: "Pec Fly", series: "3", repeticoes: "12", dica: "Máquina de voador" },
                { nome: "Tríceps na Polia", series: "3", repeticoes: "12-15", dica: "Cotovelos fixos" },
                { nome: "Tríceps Corda", series: "3", repeticoes: "12-15", dica: "Maior amplitude" },
                { nome: "Tríceps Coice", series: "3", repeticoes: "12", dica: "Isolamento do tríceps" },
                { nome: "Tríceps Testa", series: "3", repeticoes: "12", dica: "Alongamento completo" },
                { nome: "Diagonal na Polia", series: "3", repeticoes: "12", dica: "Ângulo diferenciado" },
                { nome: "Tríceps nas Paralelas", series: "3", repeticoes: "12", dica: "Exercício composto" },
                { nome: "Rosca Francesa", series: "3", repeticoes: "12", dica: "Cabeça alongada do tríceps" },
                { nome: "Individual na Corda", series: "3", repeticoes: "12", dica: "Trabalho unilateral" }
            ]
        },
        D: {
            nome: "🏋️‍♂️ COSTAS E BÍCEPS",
            exercicios: [
                { nome: "Facepull", series: "3", repeticoes: "15", dica: "Para saúde dos ombros" },
                { nome: "Puxador por Frente", series: "4", repeticoes: "10", dica: "Costas arqueadas" },
                { nome: "Puxador Pegada Fechada", series: "4", repeticoes: "10", dica: "Pegada fechada para variação" },
                { nome: "Puxador Individual", series: "4", repeticoes: "10", dica: "Trabalho unilateral" },
                { nome: "Puxador Pegada Supinada", series: "3", repeticoes: "12", dica: "Ativação de bíceps" },
                { nome: "Remada Baixa Fechada", series: "4", repeticoes: "10", dica: "Pegada fechada" },
                { nome: "Remada Baixa Aberta", series: "4", repeticoes: "10", dica: "Pegada neutra" },
                { nome: "Remada Curvada", series: "4", repeticoes: "10", dica: "Barra T para costas" },
                { nome: "Remada Unilateral", series: "4", repeticoes: "10", dica: "Trabalho individual" },
                { nome: "Remada Sentada", series: "4", repeticoes: "10", dica: "Máquina específica" },
                { nome: "Remada Strong", series: "4", repeticoes: "10", dica: "Variação de remada" },
                { nome: "Remada Cavalinho", series: "4", repeticoes: "10", dica: "Remada curvada" },
                { nome: "Voador Invertido", series: "3", repeticoes: "12", dica: "Para parte posterior" },
                { nome: "Extensão Dorsal", series: "3", repeticoes: "12", dica: "Fortalecimento lombar" },
                { nome: "Pulldown", series: "3", repeticoes: "12", dica: "Variação do puxador" },
                { nome: "Barra Fixa", series: "3", repeticoes: "8-12", dica: "Exercício soberano" },
                { nome: "Puxador Articulado", series: "3", repeticoes: "12", dica: "Máquina articulada" },
                { nome: "Rosca Direta", series: "4", repeticoes: "10", dica: "Básico para bíceps" },
                { nome: "Rosca Alternada", series: "4", repeticoes: "10", dica: "Trabalho alternado" },
                { nome: "Rosca Simultânea", series: "4", repeticoes: "10", dica: "Ambos os braços juntos" },
                { nome: "Rosca 21", series: "3", repeticoes: "21", dica: "Técnica de 21 repetições" },
                { nome: "Bíceps em Cruz", series: "3", repeticoes: "12", dica: "Polia cruzada" },
                { nome: "Rosca Concentrada", series: "3", repeticoes: "12", dica: "Isolamento máximo" },
                { nome: "Rosca Direta na Polia", series: "3", repeticoes: "12", dica: "Tensão constante" },
                { nome: "Banco Scott Livre", series: "3", repeticoes: "12", dica: "Banco Scott com halteres" },
                { nome: "Banco Scott na Máquina", series: "3", repeticoes: "12", dica: "Máquina Scott" },
                { nome: "Rosca Martelo", series: "3", repeticoes: "12", dica: "Trabalho do braquial" },
                { nome: "Rosca Inversa", series: "3", repeticoes: "12", dica: "Para antebraço" },
                { nome: "Rosca Inversa no Scott", series: "3", repeticoes: "12", dica: "Scott com pegada inversa" },
                { nome: "Flexão de Punho", series: "3", repeticoes: "15", dica: "Para antebraço" },
                { nome: "Extensão de Punho", series: "3", repeticoes: "15", dica: "Para extensores" },
                { nome: "Rosca Punho", series: "3", repeticoes: "15", dica: "Para desenvolvimento do punho" }
            ]
        },
        E: {
            nome: "🧠 ABDÔMEN E CÁRDIO",
            exercicios: [
                { nome: "Abdominal Clássico", series: "4", repeticoes: "20", dica: "Foco na contração" },
                { nome: "Abdominal na Máquina", series: "4", repeticoes: "15", dica: "Máquina específica" },
                { nome: "Abdominal no Rolinho", series: "4", repeticoes: "12", dica: "Para core avançado" },
                { nome: "Abdominal na Bola", series: "4", repeticoes: "15", dica: "Maior amplitude" },
                { nome: "Abdominal no Cross", series: "4", repeticoes: "15", dica: "Uso do cabo" },
                { nome: "Oblíquos no Colchonete", series: "4", repeticoes: "15", dica: "Para oblíquos" },
                { nome: "Abdominal Articulado", series: "4", repeticoes: "15", dica: "Máquina articulada" },
                { nome: "Infra na Prancha", series: "4", repeticoes: "20s", dica: "Isometria do core" },
                { nome: "Esteira", series: "1", repeticoes: "20min", dica: "Cardio moderado" },
                { nome: "Bicicleta", series: "1", repeticoes: "15min", dica: "Baixo impacto" },
                { nome: "Step", series: "1", repeticoes: "15min", dica: "Cardio com step" },
                { nome: "Escada", series: "1", repeticoes: "10min", dica: "Cardio intenso" },
                { nome: "Prancha Abdominal", series: "4", repeticoes: "30s", dica: "Isometria do core" },
                { nome: "Elevação de Pernas", series: "4", repeticoes: "15", dica: "Porção inferior" }
            ]
        }
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Inicializando sistema Personal...');
    inicializarSistemaPersonal();
});

function inicializarSistemaPersonal() {
    console.log('Inicializando página do Personal...');
    carregarBibliotecaExercicios();
    configurarEventListenersPersonal();
    carregarConfiguracaoSalva();
}

function carregarBibliotecaExercicios() {
    const lista = document.getElementById('lista-exercicios');
    if (!lista) return;
    
    let html = '';
    
    Object.keys(dadosTreinos.grupos_treino).forEach(grupo => {
        const grupoData = dadosTreinos.grupos_treino[grupo];
        html += `
            <div class="grupo-biblioteca" data-grupo="${grupo}">
                <h5>${grupoData.nome}</h5>
                <div class="exercicios-grupo">
                    ${grupoData.exercicios.map((exercicio, index) => `
                        <div class="exercicio-biblioteca" data-grupo="${grupo}" data-index="${index}">
                            <div class="exercicio-info">
                                <strong>${exercicio.nome}</strong>
                                <span>${exercicio.series}x${exercicio.repeticoes}</span>
                            </div>
                            ${exercicio.dica ? `<div class="exercicio-dica">💡 ${exercicio.dica}</div>` : ''}
                            <div class="exercicio-acoes">
                                <button class="btn-add" data-treino="A" data-grupo="${grupo}" data-index="${index}">A</button>
                                <button class="btn-add" data-treino="B" data-grupo="${grupo}" data-index="${index}">B</button>
                                <button class="btn-add" data-treino="C" data-grupo="${grupo}" data-index="${index}">C</button>
                                <button class="btn-add" data-treino="D" data-grupo="${grupo}" data-index="${index}">D</button>
                                <button class="btn-add" data-treino="E" data-grupo="${grupo}" data-index="${index}">E</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    lista.innerHTML = html;
}

function configurarEventListenersPersonal() {
    // Filtros
    document.getElementById('filtro-grupo')?.addEventListener('change', filtrarExercicios);
    document.getElementById('busca-exercicio')?.addEventListener('input', filtrarExercicios);
    
    // Botões de adicionar exercício
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add')) {
            const treino = e.target.getAttribute('data-treino');
            const grupo = e.target.getAttribute('data-grupo');
            const index = e.target.getAttribute('data-index');
            adicionarExercicioTreino(treino, grupo, parseInt(index));
        }
    });
    
    // Botões limpar
    document.querySelectorAll('.btn-limpar').forEach(btn => {
        btn.addEventListener('click', function() {
            const treino = this.getAttribute('data-treino');
            limparTreino(treino);
        });
    });
    
    // Ações principais
    document.getElementById('btn-salvar')?.addEventListener('click', salvarConfiguracao);
    document.getElementById('btn-visualizar')?.addEventListener('click', visualizarFichaAluno);
    document.getElementById('btn-resetar')?.addEventListener('click', resetarTudo);
    
    // Event delegation para inputs de séries e repetições
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('series-input') || e.target.classList.contains('repeticoes-input')) {
            atualizarContador(e.target.closest('.grupo').getAttribute('data-grupo'));
        }
    });
    
    // Event delegation para remover exercícios
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-remover-exercicio')) {
            const exercicioElem = e.target.closest('.exercicio-selecionado');
            const grupo = e.target.closest('.exercicios-lista').getAttribute('data-grupo');
            exercicioElem.remove();
            atualizarContador(grupo);
        }
    });
}

function filtrarExercicios() {
    const filtroGrupo = document.getElementById('filtro-grupo').value;
    const busca = document.getElementById('busca-exercicio').value.toLowerCase();
    
    document.querySelectorAll('.grupo-biblioteca').forEach(grupoElem => {
        const grupo = grupoElem.getAttribute('data-grupo');
        
        if (filtroGrupo && grupo !== filtroGrupo) {
            grupoElem.style.display = 'none';
            return;
        }
        
        grupoElem.style.display = 'block';
        let algumVisivel = false;
        
        grupoElem.querySelectorAll('.exercicio-biblioteca').forEach(exercicioElem => {
            const nomeExercicio = exercicioElem.querySelector('strong').textContent.toLowerCase();
            
            if (busca && !nomeExercicio.includes(busca)) {
                exercicioElem.style.display = 'none';
            } else {
                exercicioElem.style.display = 'flex';
                algumVisivel = true;
            }
        });
        
        grupoElem.style.display = algumVisivel ? 'block' : 'none';
    });
}

function adicionarExercicioTreino(treino, grupo, index) {
    const exercicio = dadosTreinos.grupos_treino[grupo].exercicios[index];
    const lista = document.querySelector(`.exercicios-lista[data-grupo="${treino}"]`);
    
    if (!lista) return;
    
    const exercicioElem = document.createElement('div');
    exercicioElem.className = 'exercicio-selecionado';
    exercicioElem.innerHTML = `
        <div>
            <strong>${exercicio.nome}</strong>
            ${exercicio.dica ? `<div class="exercicio-dica">💡 ${exercicio.dica}</div>` : ''}
        </div>
        <div class="exercicio-config">
            <input type="number" class="series-input" value="${exercicio.series}" min="1" max="10">
            <span>x</span>
            <input type="text" class="repeticoes-input" value="${exercicio.repeticoes}">
            <button class="btn-remover-exercicio">🗑️</button>
        </div>
    `;
    
    lista.appendChild(exercicioElem);
    atualizarContador(treino);
}

function atualizarContador(treino) {
    const lista = document.querySelector(`.exercicios-lista[data-grupo="${treino}"]`);
    const contador = document.querySelector(`.grupo[data-grupo="${treino}"] .contador`);
    
    if (lista && contador) {
        const count = lista.children.length;
        contador.textContent = `${count} exercício${count !== 1 ? 's' : ''}`;
    }
}

function limparTreino(treino) {
    const lista = document.querySelector(`.exercicios-lista[data-grupo="${treino}"]`);
    if (lista) {
        lista.innerHTML = '';
        atualizarContador(treino);
    }
}

function salvarConfiguracao() {
    const configuracao = {
        treinos: {},
        semana: {}
    };
    
    // Salvar treinos
    ['A', 'B', 'C', 'D', 'E'].forEach(grupo => {
        const lista = document.querySelector(`.exercicios-lista[data-grupo="${grupo}"]`);
        const nomeInput = document.querySelector(`.grupo[data-grupo="${grupo}"] .nome-treino`);
        
        if (lista) {
            const exercicios = Array.from(lista.children).map(exercicioElem => {
                return {
                    nome: exercicioElem.querySelector('strong').textContent,
                    seriesPersonalizada: exercicioElem.querySelector('.series-input').value,
                    repeticoesPersonalizada: exercicioElem.querySelector('.repeticoes-input').value,
                    dica: exercicioElem.querySelector('.exercicio-dica')?.textContent.replace('💡 ', '') || ''
                };
            });
            
            configuracao.treinos[grupo] = {
                nome: nomeInput ? nomeInput.value : `Treino ${grupo}`,
                exercicios: exercicios
            };
        }
    });
    
    // Salvar semana
    const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    dias.forEach(dia => {
        const select = document.getElementById(dia);
        if (select) {
            configuracao.semana[dia] = select.value;
        }
    });
    
    localStorage.setItem('configuracaoTreinosPersonalizada', JSON.stringify(configuracao));
    
    // Feedback
    mostrarFeedback('✅ Configuração salva com sucesso!');
    atualizarPreview();
}

function visualizarFichaAluno() {
    window.open('aluno.html', '_blank');
}

function resetarTudo() {
    if (confirm('Tem certeza que deseja resetar toda a configuração? Isso irá limpar todos os treinos.')) {
        localStorage.removeItem('configuracaoTreinosPersonalizada');
        
        // Limpar interfaces
        ['A', 'B', 'C', 'D', 'E'].forEach(limparTreino);
        document.querySelectorAll('.dias-semana select').forEach(select => {
            select.value = '';
        });
        
        document.querySelectorAll('.nome-treino').forEach(input => {
            input.value = `Meu Treino ${input.closest('.grupo').getAttribute('data-grupo')}`;
        });
        
        mostrarFeedback('🔄 Configuração resetada com sucesso!');
        atualizarPreview();
    }
}

function carregarConfiguracaoSalva() {
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    if (!configuracaoSalva) return;
    
    try {
        const configuracao = JSON.parse(configuracaoSalva);
        
        // Carregar treinos
        Object.keys(configuracao.treinos).forEach(grupo => {
            const treino = configuracao.treinos[grupo];
            const nomeInput = document.querySelector(`.grupo[data-grupo="${grupo}"] .nome-treino`);
            const lista = document.querySelector(`.exercicios-lista[data-grupo="${grupo}"]`);
            
            if (nomeInput) nomeInput.value = treino.nome;
            if (lista) {
                lista.innerHTML = '';
                treino.exercicios.forEach(exercicio => {
                    const exercicioElem = document.createElement('div');
                    exercicioElem.className = 'exercicio-selecionado';
                    exercicioElem.innerHTML = `
                        <div>
                            <strong>${exercicio.nome}</strong>
                            ${exercicio.dica ? `<div class="exercicio-dica">💡 ${exercicio.dica}</div>` : ''}
                        </div>
                        <div class="exercicio-config">
                            <input type="number" class="series-input" value="${exercicio.seriesPersonalizada}" min="1" max="10">
                            <span>x</span>
                            <input type="text" class="repeticoes-input" value="${exercicio.repeticoesPersonalizada}">
                            <button class="btn-remover-exercicio">🗑️</button>
                        </div>
                    `;
                    lista.appendChild(exercicioElem);
                });
                atualizarContador(grupo);
            }
        });
        
        // Carregar semana
        Object.keys(configuracao.semana).forEach(dia => {
            const select = document.getElementById(dia);
            if (select) {
                select.value = configuracao.semana[dia];
            }
        });
        
        atualizarPreview();
        
    } catch (error) {
        console.error('Erro ao carregar configuração:', error);
    }
}

function atualizarPreview() {
    const container = document.getElementById('preview-container');
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    
    if (!configuracaoSalva) {
        container.innerHTML = '<p>Configure os treinos para ver a pré-visualização.</p>';
        return;
    }
    
    try {
        const configuracao = JSON.parse(configuracaoSalva);
        let html = '<div class="preview-lista">';
        
        const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
        dias.forEach(dia => {
            const treinoId = configuracao.semana[dia];
            let conteudo = '';
            
            if (treinoId === 'descanso') {
                conteudo = '<span class="preview-descanso">Descanso</span>';
            } else if (treinoId && configuracao.treinos[treinoId]) {
                const treino = configuracao.treinos[treinoId];
                conteudo = `
                    <strong>${treino.nome}</strong>
                    <div class="preview-exercicios">
                        ${treino.exercicios.slice(0, 3).map(ex => 
                            `<span>${ex.nome}</span>`
                        ).join('')}
                        ${treino.exercicios.length > 3 ? `<span>+${treino.exercicios.length - 3} mais</span>` : ''}
                    </div>
                `;
            } else {
                conteudo = '<span class="preview-vazio">Não definido</span>';
            }
            
            html += `
                <div class="preview-dia">
                    <h3>${getDiaSemana(dia)}</h3>
                    ${conteudo}
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
        
    } catch (error) {
        container.innerHTML = '<p>Erro ao carregar pré-visualização.</p>';
    }
}

function getDiaSemana(dia) {
    const dias = {
        'segunda': 'Segunda',
        'terca': 'Terça', 
        'quarta': 'Quarta',
        'quinta': 'Quinta',
        'sexta': 'Sexta',
        'sabado': 'Sábado'
    };
    return dias[dia] || dia;
}

function mostrarFeedback(mensagem) {
    // Remove feedback anterior se existir
    const feedbackAnterior = document.querySelector('.feedback-temporario');
    if (feedbackAnterior) {
        feedbackAnterior.remove();
    }
    
    const feedback = document.createElement('div');
    feedback.className = 'feedback-temporario';
    feedback.textContent = mensagem;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => feedback.remove(), 300);
    }, 3000);
}