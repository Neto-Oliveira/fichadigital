// Base de dados de exercícios COMPLETA e REORGANIZADA
const dadosTreinos = {
    grupos_musculares: {
        perna: {
            nome: "🦵 PERNA",
            exercicios: [
                { nome: "Agachamento Livre", series: "4", repeticoes: "12", dica: "Mantenha as costas retas" },
                { nome: "Agachamento no Smith", series: "4", repeticoes: "12", dica: "Use a máquina para focar na técnica" },
                { nome: "Agachamento Sumô", series: "4", repeticoes: "12", dica: "Ênfase na parte interna das coxas" },
                { nome: "Leg Press 45°", series: "4", repeticoes: "12", dica: "Não trave os joelhos" },
                { nome: "Leg Press 80°", series: "4", repeticoes: "12", dica: "Ângulo diferente para variação" },
                { nome: "Extensora", series: "4", repeticoes: "10", dica: "Foco no quadríceps" },
                { nome: "Extensora Unilateral", series: "4", repeticoes: "10", dica: "Trabalho individual das pernas" },
                { nome: "Flexora Deitada", series: "4", repeticoes: "12", dica: "Controle a descida" },
                { nome: "Flexora em Pé", series: "4", repeticoes: "12", dica: "Variação em pé" },
                { nome: "Flexora Sentada", series: "4", repeticoes: "12", dica: "Posição sentada para isolar" },
                { nome: "Stiff", series: "3", repeticoes: "12", dica: "Mantenha as costas retas" },
                { nome: "Bom Dia", series: "3", repeticoes: "12", dica: "Cuidado com a postura" },
                { nome: "Afundo", series: "3", repeticoes: "12", dica: "Avanço com peso livre" },
                { nome: "Afundo no Smith", series: "3", repeticoes: "12", dica: "Avanço com barra guiada" },
                { nome: "Panturrilha Sentada", series: "4", repeticoes: "15", dica: "Trabalho da panturrilha sentado" },
                { nome: "Panturrilha em Pé", series: "4", repeticoes: "15", dica: "Amplitude máxima" },
                { nome: "Panturrilha no Leg Press", series: "4", repeticoes: "15", dica: "Uso do leg press" }
            ]
        },
        gluteo: {
            nome: "🍑 GLÚTEO",
            exercicios: [
                { nome: "Agachamento Sumô", series: "4", repeticoes: "12", dica: "Ênfase máxima no glúteo" },
                { nome: "Super Hack INVERTIDO", series: "4", repeticoes: "12", dica: "Posição invertida para glúteo" },
                { nome: "Sumô no Leg", series: "4", repeticoes: "12", dica: "Posição ampla no leg press" },
                { nome: "Flexão de Quadril", series: "4", repeticoes: "12", dica: "Trabalho específico do quadril" },
                { nome: "Adução Sentado", series: "3", repeticoes: "15", dica: "Trabalho de adutores" },
                { nome: "Abdução Sentado DROPSET", series: "3", repeticoes: "10 + 10", dica: "Drop set para intensidade" },
                { nome: "Adução em Pé", series: "3", repeticoes: "15", dica: "Variação em pé" },
                { nome: "Abdução em Pé", series: "3", repeticoes: "15", dica: "Trabalho de abdutores" },
                { nome: "Glúteo na Máquina", series: "3", repeticoes: "12", dica: "Máquina específica para glúteo" },
                { nome: "Afundo Búlgaro", series: "3", repeticoes: "12", dica: "Passo amplo e controlado" },
                { nome: "Step Up", series: "3", repeticoes: "12", dica: "Trabalho unilateral" },
                { nome: "Extensão de Quadril no Cross", series: "3", repeticoes: "12", dica: "Uso do cabo para glúteo" },
                { nome: "Elevação Pélvica", series: "3", repeticoes: "12", dica: "Foco máximo no glúteo" }
            ]
        },
        peito: {
            nome: "💪 PEITO",
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
                { nome: "Pec Fly", series: "3", repeticoes: "12", dica: "Máquina de voador" }
            ]
        },
        triceps: {
            nome: "💪 TRÍCEPS",
            exercicios: [
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
        costas: {
            nome: "🏋️‍♂️ COSTAS",
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
                { nome: "Puxador Articulado", series: "3", repeticoes: "12", dica: "Máquina articulada" }
            ]
        },
        biceps: {
            nome: "💪 BÍCEPS",
            exercicios: [
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
                { nome: "Extensão de Punho", series: "3", repeticoes: "15", dica: "Para extensores" }
            ]
        },
        ombro: {
            nome: "💪 OMBRO",
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
                { nome: "Rotação Interna", series: "4", repeticoes: "15", dica: "Manguito rotador" },
                { nome: "Rotação Externa", series: "4", repeticoes: "15", dica: "Saúde dos ombros" }
            ]
        },
        trapezio: {
            nome: "🔺 TRAPÉZIO",
            exercicios: [
                { nome: "Encolhimento com Halteres", series: "4", repeticoes: "12", dica: "Trapézio superior" },
                { nome: "Remada Alta", series: "4", repeticoes: "12", dica: "Cuidado com a altura" },
                { nome: "Encolhimento com Barra Frente", series: "4", repeticoes: "12", dica: "Trapézio frontal" },
                { nome: "Encolhimento com Barra Trás", series: "4", repeticoes: "12", dica: "Trapézio posterior" }
            ]
        },
        abdomen: {
            nome: "🧠 ABDÔMEN",
            exercicios: [
                { nome: "Abdominal Clássico", series: "4", repeticoes: "20", dica: "Foco na contração" },
                { nome: "Abdominal na Máquina", series: "4", repeticoes: "15", dica: "Máquina específica" },
                { nome: "Abdominal no Rolinho", series: "4", repeticoes: "12", dica: "Para core avançado" },
                { nome: "Abdominal na Bola", series: "4", repeticoes: "15", dica: "Maior amplitude" },
                { nome: "Abdominal no Cross", series: "4", repeticoes: "15", dica: "Uso do cabo" },
                { nome: "Oblíquos no Colchonete", series: "4", repeticoes: "15", dica: "Para oblíquos" },
                { nome: "Abdominal Articulado", series: "4", repeticoes: "15", dica: "Máquina articulada" },
                { nome: "Infra na Prancha", series: "4", repeticoes: "20s", dica: "Isometria do core" },
                { nome: "Prancha Abdominal", series: "4", repeticoes: "30s", dica: "Isometria do core" },
                { nome: "Elevação de Pernas", series: "4", repeticoes: "15", dica: "Porção inferior" }
            ]
        },
        cardio: {
            nome: "🏃‍♂️ CARDIO",
            exercicios: [
                { nome: "Esteira", series: "1", repeticoes: "20min", dica: "Cardio moderado" },
                { nome: "Bicicleta", series: "1", repeticoes: "15min", dica: "Baixo impacto" },
                { nome: "Step", series: "1", repeticoes: "15min", dica: "Cardio com step" },
                { nome: "Escada", series: "1", repeticoes: "10min", dica: "Cardio intenso" }
            ]
        },
        descanso: {
            nome: "🧘‍♂️ DESCANSO",
            exercicios: [
                { nome: "Descanso Ativo", series: "1", repeticoes: "Dia inteiro", dica: "Recuperação muscular" }
            ]
        }
    }
};

// Inicialização Personal Trainer
document.addEventListener('DOMContentLoaded', function() {
    inicializarSistemaPersonal();
});

function inicializarSistemaPersonal() {
    carregarBibliotecaExercicios();
    carregarBibliotecaPessoal();
    configurarEventListenersPersonal();
    carregarConfiguracaoSalva();
    configurarAbas();
}

function configurarAbas() {
    const abas = document.querySelectorAll('.aba');
    const conteudos = document.querySelectorAll('.conteudo-aba');
    
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            const abaAlvo = this.getAttribute('data-aba');
            
            abas.forEach(a => a.classList.remove('ativa'));
            conteudos.forEach(c => c.classList.remove('ativa'));
            
            this.classList.add('ativa');
            document.getElementById(abaAlvo).classList.add('ativa');
        });
    });
}

function carregarBibliotecaExercicios() {
    const lista = document.getElementById('lista-exercicios');
    if (!lista) return;
    
    let html = '';
    
    Object.keys(dadosTreinos.grupos_musculares).forEach(grupo => {
        const grupoData = dadosTreinos.grupos_musculares[grupo];
        html += `
            <div class="grupo-biblioteca" data-grupo="${grupo}">
                <h5>${grupoData.nome}</h5>
                <div class="exercicios-grupo">
                    ${grupoData.exercicios.map((exercicio, index) => `
                        <div class="exercicio-biblioteca" data-grupo="${grupo}" data-index="${index}" data-tipo="principal">
                            <div class="exercicio-info">
                                <strong>${exercicio.nome}</strong>
                                <span>${exercicio.series}x${exercicio.repeticoes}</span>
                            </div>
                            ${exercicio.dica ? `<div class="exercicio-dica">💡 ${exercicio.dica}</div>` : ''}
                            <div class="exercicio-acoes">
                                <button class="btn-add" data-treino="A" data-grupo="${grupo}" data-index="${index}" data-tipo="principal">A</button>
                                <button class="btn-add" data-treino="B" data-grupo="${grupo}" data-index="${index}" data-tipo="principal">B</button>
                                <button class="btn-add" data-treino="C" data-grupo="${grupo}" data-index="${index}" data-tipo="principal">C</button>
                                <button class="btn-add" data-treino="D" data-grupo="${grupo}" data-index="${index}" data-tipo="principal">D</button>
                                <button class="btn-add" data-treino="E" data-grupo="${grupo}" data-index="${index}" data-tipo="principal">E</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    lista.innerHTML = html;
}

function carregarBibliotecaPessoal() {
    const lista = document.getElementById('lista-exercicios-pessoal');
    if (!lista) return;
    
    const exerciciosPessoais = JSON.parse(localStorage.getItem('exerciciosPessoais') || '[]');
    
    if (exerciciosPessoais.length === 0) {
        lista.innerHTML = '<p class="sem-exercicios">Nenhum exercício pessoal adicionado ainda.</p>';
        return;
    }
    
    let html = '';
    
    // Agrupar exercícios por grupo muscular
    const exerciciosPorGrupo = {};
    exerciciosPessoais.forEach((exercicio, index) => {
        if (!exerciciosPorGrupo[exercicio.grupo]) {
            exerciciosPorGrupo[exercicio.grupo] = [];
        }
        exerciciosPorGrupo[exercicio.grupo].push({...exercicio, index});
    });
    
    Object.keys(exerciciosPorGrupo).forEach(grupo => {
        const grupoData = dadosTreinos.grupos_musculares[grupo] || { nome: grupo };
        html += `
            <div class="grupo-biblioteca" data-grupo="${grupo}">
                <h5>${grupoData.nome}</h5>
                <div class="exercicios-grupo">
                    ${exerciciosPorGrupo[grupo].map(exercicio => `
                        <div class="exercicio-biblioteca" data-grupo="${exercicio.grupo}" data-index="${exercicio.index}" data-tipo="pessoal">
                            <div class="exercicio-info">
                                <strong>${exercicio.nome}</strong>
                                <span>${exercicio.series}x${exercicio.repeticoes}</span>
                            </div>
                            ${exercicio.dica ? `<div class="exercicio-dica">💡 ${exercicio.dica}</div>` : ''}
                            <div class="exercicio-acoes">
                                <button class="btn-add" data-treino="A" data-grupo="${exercicio.grupo}" data-index="${exercicio.index}" data-tipo="pessoal">A</button>
                                <button class="btn-add" data-treino="B" data-grupo="${exercicio.grupo}" data-index="${exercicio.index}" data-tipo="pessoal">B</button>
                                <button class="btn-add" data-treino="C" data-grupo="${exercicio.grupo}" data-index="${exercicio.index}" data-tipo="pessoal">C</button>
                                <button class="btn-add" data-treino="D" data-grupo="${exercicio.grupo}" data-index="${exercicio.index}" data-tipo="pessoal">D</button>
                                <button class="btn-add" data-treino="E" data-grupo="${exercicio.grupo}" data-index="${exercicio.index}" data-tipo="pessoal">E</button>
                                <button class="btn-remover-pessoal" data-index="${exercicio.index}">🗑️</button>
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
    // Botões de adicionar exercício
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add')) {
            const treino = e.target.getAttribute('data-treino');
            const grupo = e.target.getAttribute('data-grupo');
            const index = e.target.getAttribute('data-index');
            const tipo = e.target.getAttribute('data-tipo');
            adicionarExercicioTreino(treino, grupo, parseInt(index), tipo);
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
    
    // Filtros - CORREÇÃO: Adicionar event listeners corretamente
    document.getElementById('filtro-grupo')?.addEventListener('change', filtrarExercicios);
    document.getElementById('busca-exercicio')?.addEventListener('input', filtrarExercicios);
    document.getElementById('btn-limpar-filtros')?.addEventListener('click', function() {
        document.getElementById('filtro-grupo').value = '';
        document.getElementById('busca-exercicio').value = '';
        filtrarExercicios();
    });
    
    // Biblioteca pessoal
    document.getElementById('btn-adicionar-pessoal')?.addEventListener('click', adicionarExercicioPessoal);
    
    // Event delegation para inputs e remoção
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('series-input') || e.target.classList.contains('repeticoes-input')) {
            atualizarContador(e.target.closest('.grupo').getAttribute('data-grupo'));
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-remover-exercicio')) {
            const exercicioElem = e.target.closest('.exercicio-selecionado');
            const grupo = e.target.closest('.exercicios-lista').getAttribute('data-grupo');
            exercicioElem.remove();
            atualizarContador(grupo);
        }
        
        if (e.target.classList.contains('btn-remover-pessoal')) {
            const index = e.target.getAttribute('data-index');
            removerExercicioPessoal(parseInt(index));
        }
    });
}

// FUNÇÃO DE FILTRO CORRIGIDA
function filtrarExercicios() {
    const filtroGrupo = document.getElementById('filtro-grupo').value;
    const busca = document.getElementById('busca-exercicio').value.toLowerCase();
    
    document.querySelectorAll('.exercicio-biblioteca').forEach(exercicioElem => {
        const nomeExercicio = exercicioElem.querySelector('strong').textContent.toLowerCase();
        const grupoExercicio = exercicioElem.getAttribute('data-grupo');
        
        let deveMostrar = true;
        
        // Filtro por grupo
        if (filtroGrupo && grupoExercicio !== filtroGrupo) {
            deveMostrar = false;
        }
        
        // Filtro por busca - CORREÇÃO: Agora funciona corretamente
        if (busca && !nomeExercicio.includes(busca)) {
            deveMostrar = false;
        }
        
        exercicioElem.style.display = deveMostrar ? 'flex' : 'none';
    });
    
    // Mostrar/ocultar grupos baseado nos exercícios visíveis - CORREÇÃO: Agora funciona corretamente
    document.querySelectorAll('.grupo-biblioteca').forEach(grupoElem => {
        const exerciciosVisiveis = grupoElem.querySelectorAll('.exercicio-biblioteca[style*="display: flex"], .exercicio-biblioteca:not([style])');
        grupoElem.style.display = exerciciosVisiveis.length > 0 ? 'block' : 'none';
    });
}

function adicionarExercicioTreino(treino, grupo, index, tipo) {
    let exercicio;
    
    if (tipo === 'principal') {
        exercicio = dadosTreinos.grupos_musculares[grupo].exercicios[index];
    } else {
        const exerciciosPessoais = JSON.parse(localStorage.getItem('exerciciosPessoais') || '[]');
        exercicio = exerciciosPessoais[index];
    }
    
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

function adicionarExercicioPessoal() {
    const nome = document.getElementById('novo-exercicio-nome').value.trim();
    const grupo = document.getElementById('novo-exercicio-grupo').value;
    const series = document.getElementById('novo-exercicio-series').value;
    const repeticoes = document.getElementById('novo-exercicio-repeticoes').value;
    const dica = document.getElementById('novo-exercicio-dica').value.trim();
    
    if (!nome || !series || !repeticoes) {
        mostrarFeedback('❌ Preencha todos os campos obrigatórios!');
        return;
    }
    
    const exerciciosPessoais = JSON.parse(localStorage.getItem('exerciciosPessoais') || '[]');
    
    const novoExercicio = {
        nome,
        grupo,
        series,
        repeticoes,
        dica: dica || ''
    };
    
    exerciciosPessoais.push(novoExercicio);
    localStorage.setItem('exerciciosPessoais', JSON.stringify(exerciciosPessoais));
    
    // Limpar campos
    document.getElementById('novo-exercicio-nome').value = '';
    document.getElementById('novo-exercicio-series').value = '';
    document.getElementById('novo-exercicio-repeticoes').value = '';
    document.getElementById('novo-exercicio-dica').value = '';
    
    // Recarregar biblioteca pessoal
    carregarBibliotecaPessoal();
    mostrarFeedback('✅ Exercício pessoal adicionado com sucesso!');
}

function removerExercicioPessoal(index) {
    if (!confirm('Tem certeza que deseja remover este exercício?')) return;
    
    const exerciciosPessoais = JSON.parse(localStorage.getItem('exerciciosPessoais') || '[]');
    exerciciosPessoais.splice(index, 1);
    localStorage.setItem('exerciciosPessoais', JSON.stringify(exerciciosPessoais));
    
    carregarBibliotecaPessoal();
    mostrarFeedback('✅ Exercício pessoal removido com sucesso!');
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

function validarNomesTreinos() {
    const nomesVazios = [];
    
    document.querySelectorAll('.nome-treino').forEach(input => {
        const grupo = input.closest('.grupo').getAttribute('data-grupo');
        const lista = document.querySelector(`.exercicios-lista[data-grupo="${grupo}"]`);
        
        // Só valida se o treino tiver exercícios
        if (lista && lista.children.length > 0 && !input.value.trim()) {
            nomesVazios.push(grupo);
        }
    });
    
    if (nomesVazios.length > 0) {
        alert(`⚠️ Atenção: Os seguintes treinos estão sem nome:\n${nomesVazios.map(t => `• Treino ${t}`).join('\n')}\n\nPor favor, preencha os nomes dos treinos que possuem exercícios antes de continuar.`);
        return false;
    }
    
    return true;
}

function salvarConfiguracao() {
    if (!validarNomesTreinos()) {
        return;
    }
    
    const configuracao = {
        treinos: {},
    };
    
    // Salvar apenas os treinos configurados (que têm exercícios)
    ['A', 'B', 'C', 'D', 'E'].forEach(grupo => {
        const lista = document.querySelector(`.exercicios-lista[data-grupo="${grupo}"]`);
        const nomeInput = document.querySelector(`.grupo[data-grupo="${grupo}"] .nome-treino`);
        
        // Só salva se tiver exercícios
        if (lista && lista.children.length > 0) {
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
    
    localStorage.setItem('configuracaoTreinosPersonalizada', JSON.stringify(configuracao));
    
    // SE É UMA NOVA CONFIGURAÇÃO, PERGUNTAR QUAL TREINO COMEÇAR
    const jaConfiguradoAnteriormente = localStorage.getItem('configuracaoJaRealizada');
    if (!jaConfiguradoAnteriormente && Object.keys(configuracao.treinos).length > 0) {
        setTimeout(() => {
            perguntarTreinoInicial();
        }, 1000);
    }
    
    mostrarFeedback('✅ Configuração salva com sucesso!');
    atualizarPreview();
}

function visualizarFichaAluno() {
    window.open('aluno.html', '_blank');
}

function resetarTudo() {
    if (confirm('Tem certeza que deseja resetar TODOS os treinos configurados?\n\nIsso irá:\n• Limpar todos os treinos A, B, C, D, E\n• Resetar o progresso do aluno\n• Perguntar qual treino começar hoje')) {
        localStorage.removeItem('configuracaoTreinosPersonalizada');
        
        // LIMPAR O ESTADO DO ALUNO para forçar nova configuração
        localStorage.removeItem('configuracaoJaRealizada');
        localStorage.removeItem('configuracaoInicial');
        
        // Limpar apenas os treinos na interface
        ['A', 'B', 'C', 'D', 'E'].forEach(limparTreino);
        
        // Resetar os nomes padrão dos treinos (apenas placeholders)
        document.querySelectorAll('.nome-treino').forEach(input => {
            const grupo = input.closest('.grupo').getAttribute('data-grupo');
            const placeholders = {
                'A': 'Ex: Perna e Glúteo',
                'B': 'Ex: Peito e Tríceps',
                'C': 'Ex: Costas e Bíceps',
                'D': 'Ex: Ombro e Trapézio',
                'E': 'Ex: Abdômen e Cardio'
            };
            input.value = '';
            input.placeholder = placeholders[grupo] || `Treino ${grupo}`;
        });
        
        mostrarFeedback('🔄 Todos os treinos foram resetados! O aluno será perguntado novamente por onde começar.');
        atualizarPreview();
    }
}

function carregarConfiguracaoSalva() {
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    if (!configuracaoSalva) return;
    
    try {
        const configuracao = JSON.parse(configuracaoSalva);
        
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
        let html = '<div class="preview-ciclo">';
        
        // Mostrar apenas os treinos que existem na configuração
        const treinosConfigurados = Object.keys(configuracao.treinos);
        
        if (treinosConfigurados.length === 0) {
            html = '<p>Nenhum treino configurado</p>';
        } else {
            html += '<h3>🔄 Ciclo de Treinos Configurado</h3>';
            html += '<div class="ciclo-treinos">';
            
            treinosConfigurados.forEach(treinoId => {
                const treino = configuracao.treinos[treinoId];
                html += `
                    <div class="treino-ciclo">
                        <h4>${treino.nome}</h4>
                        <div class="exercicios-ciclo">
                            ${treino.exercicios.slice(0, 3).map(ex => 
                                `<span>${ex.nome}</span>`
                            ).join('')}
                            ${treino.exercicios.length > 3 ? `<span>+${treino.exercicios.length - 3} mais</span>` : ''}
                        </div>
                    </div>
                `;
            });
            
            html += '</div>';
            html += `<p class="info-ciclo">O sistema seguirá automaticamente a sequência: ${treinosConfigurados.join(' → ')}</p>`;
        }
        
        html += '</div>';
        container.innerHTML = html;
        
    } catch (error) {
        container.innerHTML = '<p>Erro ao carregar pré-visualização.</p>';
    }
}

function mostrarFeedback(mensagem) {
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

// Sistema de sequência para uso global
const sequencias = ['A', 'B', 'C', 'D', 'E'];

function perguntarTreinoInicial() {
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    if (!configuracaoSalva) {
        mostrarFeedback('⚠️ Configure primeiro os treinos antes de escolher por onde começar.');
        return;
    }
    
    try {
        const configuracao = JSON.parse(configuracaoSalva);
        const treinosConfigurados = Object.keys(configuracao.treinos);
        
        if (treinosConfigurados.length === 0) {
            mostrarFeedback('⚠️ Adicione exercícios aos treinos antes de escolher por onde começar.');
            return;
        }
        
        // Criar opções para o select
        let opcoesHTML = '';
        treinosConfigurados.forEach(treinoId => {
            const treino = configuracao.treinos[treinoId];
            opcoesHTML += `<option value="${treinoId}">${treino.nome} (Treino ${treinoId})</option>`;
        });
        
        // Criar modal para escolher o treino inicial
        const modalHTML = `
            <div class="modal-overlay" id="modal-treino-inicial">
                <div class="modal">
                    <h3>🎯 Por qual treino você quer começar hoje?</h3>
                    <p>Escolha o treino inicial para dar início ao seu ciclo automático:</p>
                    <select id="select-treino-inicial" class="select-treino">
                        ${opcoesHTML}
                    </select>
                    <div class="modal-botoes">
                        <button id="btn-confirmar-treino" class="btn-principal">Confirmar Início</button>
                        <button id="btn-cancelar-treino" class="btn-secundario">Decidir Depois</button>
                    </div>
                </div>
            </div>
        `;
        
        // Adicionar modal ao body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Configurar event listeners do modal
        const modal = document.getElementById('modal-treino-inicial');
        const btnConfirmar = document.getElementById('btn-confirmar-treino');
        const btnCancelar = document.getElementById('btn-cancelar-treino');
        
        btnConfirmar.addEventListener('click', function() {
            const treinoSelecionado = document.getElementById('select-treino-inicial').value;
            definirTreinoInicial(treinoSelecionado);
            modal.remove();
        });
        
        btnCancelar.addEventListener('click', function() {
            modal.remove();
            mostrarFeedback('ℹ️ Você pode definir o treino inicial depois pelo painel do aluno.');
        });
        
        // Fechar modal ao clicar fora
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
                mostrarFeedback('ℹ️ Você pode definir o treino inicial depois pelo painel do aluno.');
            }
        });
        
    } catch (error) {
        console.error('Erro ao carregar configuração:', error);
        mostrarFeedback('❌ Erro ao carregar configuração dos treinos.');
    }
}

function definirTreinoInicial(treinoId) {
    // Carregar estado atual do aluno
    let estadoAluno = JSON.parse(localStorage.getItem('estadoAluno') || '{}');
    
    // Atualizar estado do aluno
    estadoAluno.treinoAtual = treinoId;
    estadoAluno.dataAtual = new Date().toISOString().split('T')[0];
    estadoAluno.inicioSistema = estadoAluno.inicioSistema || new Date().toISOString().split('T')[0];
    estadoAluno.progresso = estadoAluno.progresso || {};
    estadoAluno.streak = estadoAluno.streak || 0;
    estadoAluno.diasAcademia = estadoAluno.diasAcademia || 0;
    
    // Marcar que já foi configurado
    localStorage.setItem('configuracaoJaRealizada', 'true');
    localStorage.setItem('configuracaoInicial', treinoId);
    
    // Salvar estado atualizado
    localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
    
    mostrarFeedback(`✅ Ótimo! Você começará pelo ${treinoId}. O ciclo automático está ativo!`);
    
    // Atualizar preview para mostrar o ciclo
    setTimeout(() => {
        atualizarPreview();
    }, 1000);
}