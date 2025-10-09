// Dados dos exercícios
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
                { nome: "Flexora Deitada (Leg Curl)", series: "4", repeticoes: "12", dica: "Controle a descida" },
                { nome: "Flexora em Pé", series: "4", repeticoes: "12", dica: "Variação em pé" },
                { nome: "Flexora Sentada", series: "4", repeticoes: "12", dica: "Posição sentada para isolar" },
                { nome: "Stiff", series: "3", repeticoes: "12", dica: "Mantenha as costas retas" },
                { nome: "Bom Dia (Good Morning)", series: "3", repeticoes: "12", dica: "Cuidado com a postura" },
                { nome: "Adução Sentado", series: "3", repeticoes: "15", dica: "Trabalho de adutores" },
                { nome: "Abdução Sentado DROPSET", series: "3", repeticoes: "10 + 10", dica: "Drop set para intensidade" },
                { nome: "Adução em Pé", series: "3", repeticoes: "15", dica: "Variação em pé" },
                { nome: "Abdução em Pé", series: "3", repeticoes: "15", dica: "Trabalho de abdutores" },
                { nome: "Glúteo na Máquina", series: "3", repeticoes: "12", dica: "Máquina específica para glúteo" },
                { nome: "AFUNDO", series: "3", repeticoes: "12", dica: "Passo amplo e controlado" },
                { nome: "Subida no Banco", series: "3", repeticoes: "12", dica: "Trabalho unilateral" },
                { nome: "Barra Hexagonal", series: "3", repeticoes: "12", dica: "Barra hexagonal para melhor pegada" },
                { nome: "Glúteo no Cross", series: "3", repeticoes: "12", dica: "Uso do cabo para glúteo" },
                { nome: "Elevação Pélvica", series: "3", repeticoes: "12", dica: "Foco máximo no glúteo" },
                { nome: "Avanço Livre", series: "3", repeticoes: "12", dica: "Avanço com peso livre" },
                { nome: "Avanço no Smith", series: "3", repeticoes: "12", dica: "Avanço com barra guiada" },
                { nome: "Panturrilha Sentada", series: "4", repeticoes: "15", dica: "Trabalho da panturrilha sentado" },
                { nome: "Panturrilha em Pé", series: "4", repeticoes: "15", dica: "Amplitude máxima" },
                { nome: "Panturrilha no Leg", series: "4", repeticoes: "15", dica: "Uso do leg press" },
                { nome: "Panturrilha no Mini Hack", series: "4", repeticoes: "15", dica: "Máquina específica" }
            ]
        },
        B: {
            nome: "💪 PEITO E TRÍCEPS",
            exercicios: [
                { nome: "Crucifixo Declinado", series: "3", repeticoes: "12", dica: "Foco no peitoral inferior" },
                { nome: "Pull Over", series: "3", repeticoes: "12", dica: "Alongamento do peitoral" },
                { nome: "Cross Over", series: "3", repeticoes: "12", dica: "Pico de contração" },
                { nome: "Paralela", series: "3", repeticoes: "12", dica: "Excelente para peitoral" },
                { nome: "Pec Fly", series: "3", repeticoes: "12", dica: "Máquina de voador" },
                { nome: "Supino Reto", series: "4", repeticoes: "10", dica: "Controle o movimento" },
                { nome: "Tríceps na Polia (com a barra)", series: "3", repeticoes: "12-15", dica: "Cotovelos fixos" },
                { nome: "Tríceps Corda", series: "3", repeticoes: "12-15", dica: "Maior amplitude" },
                { nome: "Tríceps Coice", series: "3", repeticoes: "12", dica: "Isolamento do tríceps" },
                { nome: "Tríceps Testa", series: "3", repeticoes: "12", dica: "Alongamento completo" },
                { nome: "Diagonal na Polia", series: "3", repeticoes: "12", dica: "Ângulo diferenciado" },
                { nome: "Tríceps nas Paralelas", series: "3", repeticoes: "12", dica: "Exercício composto" },
                { nome: "Rosca Francesa", series: "3", repeticoes: "12", dica: "Cabeça alongada do tríceps" },
                { nome: "Individual na Corda", series: "3", repeticoes: "12", dica: "Trabalho unilateral" },
                { nome: "Individual no Estribo", series: "3", repeticoes: "12", dica: "Pegada diferente" },
                { nome: "Invertido na Polia", series: "3", repeticoes: "12", dica: "Pegada invertida" },
                { nome: "Tríceps Supinado (pressão)", series: "3", repeticoes: "12", dica: "Supinação para variação" },
                { nome: "Mergulho no Banco", series: "3", repeticoes: "12", dica: "Exercício com peso corporal" },
                { nome: "Extensão Unilateral", series: "3", repeticoes: "12", dica: "Foco em um braço por vez" },
                { nome: "Tríceps na Máquina", series: "3", repeticoes: "12", dica: "Máquina específica" }
            ]
        },
        C: {
            nome: "🏋️‍♂️ COSTAS E BÍCEPS",
            exercicios: [
                { nome: "Puxador por Frente", series: "4", repeticoes: "10", dica: "Costas arqueadas" },
                { nome: "Puxador Pegada Fechada", series: "4", repeticoes: "10", dica: "Pegada fechada para variação" },
                { nome: "Puxador Individual", series: "4", repeticoes: "10", dica: "Trabalho unilateral" },
                { nome: "Puxador Pegada Supinada (POST)", series: "3", repeticoes: "12", dica: "Ativação de bíceps" },
                { nome: "Remada Baixa Fechada", series: "4", repeticoes: "10", dica: "Pegada fechada" },
                { nome: "Remada Baixa Aberta (NEUTRO)", series: "4", repeticoes: "10", dica: "Pegada neutra" },
                { nome: "Remada Curvada (Barra T)", series: "4", repeticoes: "10", dica: "Barra T para costas" },
                { nome: "Remada Unilateral", series: "4", repeticoes: "10", dica: "Trabalho individual" },
                { nome: "Remada Sentada (na máquina)", series: "4", repeticoes: "10", dica: "Máquina específica" },
                { nome: "Remada Strong", series: "4", repeticoes: "10", dica: "Variação de remada" },
                { nome: "Remada Cavalinho", series: "4", repeticoes: "10", dica: "Remada curvada" },
                { nome: "Voador Invertido", series: "3", repeticoes: "12", dica: "Para parte posterior" },
                { nome: "Extensão Dorsal (Lombar / B. Romano)", series: "3", repeticoes: "12", dica: "Fortalecimento lombar" },
                { nome: "Pulldown", series: "3", repeticoes: "12", dica: "Variação do puxador" },
                { nome: "Barra Fixa", series: "3", repeticoes: "8-12", dica: "Exercício soberano" },
                { nome: "Puxador Articulado", series: "3", repeticoes: "12", dica: "Máquina articulada" },
                { nome: "Facepull", series: "3", repeticoes: "15", dica: "Para saúde dos ombros" },
                { nome: "Rosca Direta", series: "4", repeticoes: "10", dica: "Básico para bíceps" },
                { nome: "Rosca Alternada", series: "4", repeticoes: "10", dica: "Trabalho alternado" },
                { nome: "Rosca Simultânea", series: "4", repeticoes: "10", dica: "Ambos os braços juntos" },
                { nome: "Rosca 21", series: "3", repeticoes: "21", dica: "Técnica de 21 repetições" },
                { nome: "Bíceps em Cruz (Polia Alta)", series: "3", repeticoes: "12", dica: "Polia cruzada" },
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
        D: {
            nome: "🧠 ABDÔMEN E CÁRDIO",
            exercicios: [
                { nome: "Abdominal Clássico 45° (colchonete)", series: "4", repeticoes: "20", dica: "Foco na contração" },
                { nome: "Abdominal na Máquina (tijolinho)", series: "4", repeticoes: "15", dica: "Máquina específica" },
                { nome: "Abdominal no Rolinho", series: "4", repeticoes: "12", dica: "Para core avançado" },
                { nome: "Abdominal na Bola", series: "4", repeticoes: "15", dica: "Maior amplitude" },
                { nome: "Abdominal no Cross (flexão de tronco)", series: "4", repeticoes: "15", dica: "Uso do cabo" },
                { nome: "Oblíquos no Colchonete", series: "4", repeticoes: "15", dica: "Para oblíquos" },
                { nome: "Abdominal Articulado", series: "4", repeticoes: "15", dica: "Máquina articulada" },
                { nome: "Infra na Prancha", series: "4", repeticoes: "20s", dica: "Isometria do core" },
                { nome: "Infra nas Paralelas", series: "4", repeticoes: "15", dica: "Elevação de pernas" },
                { nome: "Infra no Colchonete", series: "4", repeticoes: "15", dica: "Porção inferior" },
                { nome: "Esteira", series: "1", repeticoes: "20min", dica: "Cardio moderado" },
                { nome: "Bicicleta", series: "1", repeticoes: "15min", dica: "Baixo impacto" },
                { nome: "Oblíquo na Máquina", series: "4", repeticoes: "15", dica: "Máquina para oblíquos" },
                { nome: "Step", series: "1", repeticoes: "15min", dica: "Cardio com step" },
                { nome: "Escada", series: "1", repeticoes: "10min", dica: "Cardio intenso" },
                { nome: "Prancha Abdominal", series: "4", repeticoes: "30s", dica: "Isometria do core" },
                { nome: "Elevação de Pernas", series: "4", repeticoes: "15", dica: "Porção inferior" }
            ]
        }
    }
};

// Estado global dos treinos personalizados
let treinosPersonalizados = {
    A: { nome: "Perna e Glúteo", exercicios: [] },
    B: { nome: "Peito e Tríceps", exercicios: [] },
    C: { nome: "Costas e Bíceps", exercicios: [] },
    D: { nome: "Abdômen e Cardio", exercicios: [] }
};

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Inicializando sistema Personal...');
    inicializarSistemaPersonal();
});

function inicializarSistemaPersonal() {
    console.log('Inicializando página do Personal...');
    carregarBibliotecaExercicios();
    carregarConfiguracaoSalva();
    configurarEventListenersPersonal();
    atualizarPreview();
}

// Carrega a biblioteca de exercícios
function carregarBibliotecaExercicios() {
    const container = document.getElementById('lista-exercicios');
    if (!container) return;

    let html = '';
    
    for (const grupo in dadosTreinos.grupos_treino) {
        const grupoData = dadosTreinos.grupos_treino[grupo];
        
        html += `<div class="grupo-biblioteca" data-grupo="${grupo}">`;
        html += `<h5>${grupoData.nome}</h5>`;
        html += `<div class="exercicios-grupo">`;
        
        grupoData.exercicios.forEach((exercicio, index) => {
            html += `
                <div class="exercicio-biblioteca" data-grupo="${grupo}" data-index="${index}">
                    <div class="exercicio-info">
                        <strong>${exercicio.nome}</strong>
                        <span>${exercicio.series}x${exercicio.repeticoes}</span>
                    </div>
                    <div class="exercicio-acoes">
                        <button class="btn-add" data-treino="A" data-grupo="${grupo}" data-index="${index}">A</button>
                        <button class="btn-add" data-treino="B" data-grupo="${grupo}" data-index="${index}">B</button>
                        <button class="btn-add" data-treino="C" data-grupo="${grupo}" data-index="${index}">C</button>
                        <button class="btn-add" data-treino="D" data-grupo="${grupo}" data-index="${index}">D</button>
                    </div>
                    <div class="exercicio-dica">💡 ${exercicio.dica}</div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    container.innerHTML = html;
}

// Configura event listeners da página do personal
function configurarEventListenersPersonal() {
    console.log('Configurando event listeners do Personal...');
    
    // Event delegation para botões de adicionar
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add')) {
            const treino = e.target.getAttribute('data-treino');
            const grupo = e.target.getAttribute('data-grupo');
            const index = parseInt(e.target.getAttribute('data-index'));
            adicionarExercicio(treino, grupo, index);
        }
        
        if (e.target.classList.contains('btn-remover-exercicio')) {
            const treino = e.target.getAttribute('data-treino');
            const index = parseInt(e.target.getAttribute('data-index'));
            removerExercicio(treino, index);
        }
        
        if (e.target.classList.contains('btn-limpar')) {
            const treino = e.target.getAttribute('data-treino');
            limparTreino(treino);
        }
    });
    
    // Event listeners para inputs
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('series-input')) {
            const treino = e.target.getAttribute('data-treino');
            const index = parseInt(e.target.getAttribute('data-index'));
            const valor = e.target.value;
            atualizarConfiguracaoExercicio(treino, index, 'seriesPersonalizada', valor);
        }
        
        if (e.target.classList.contains('repeticoes-input')) {
            const treino = e.target.getAttribute('data-treino');
            const index = parseInt(e.target.getAttribute('data-index'));
            const valor = e.target.value;
            atualizarConfiguracaoExercicio(treino, index, 'repeticoesPersonalizada', valor);
        }
        
        if (e.target.classList.contains('nome-treino')) {
            const treino = e.target.closest('.grupo').dataset.grupo;
            atualizarNomeTreino(treino, e.target.value);
        }
    });
    
    // Filtro de grupo
    const filtroGrupo = document.getElementById('filtro-grupo');
    if (filtroGrupo) {
        filtroGrupo.addEventListener('change', filtrarExercicios);
    }
    
    // Busca de exercícios
    const buscaExercicio = document.getElementById('busca-exercicio');
    if (buscaExercicio) {
        buscaExercicio.addEventListener('input', filtrarExercicios);
    }
    
    // Botões de ação principais
    const btnSalvar = document.getElementById('btn-salvar');
    if (btnSalvar) {
        btnSalvar.addEventListener('click', salvarConfiguracao);
    }
    
    const btnVisualizar = document.getElementById('btn-visualizar');
    if (btnVisualizar) {
        btnVisualizar.addEventListener('click', () => {
            if (salvarConfiguracao()) {
                window.open('aluno.html', '_blank');
            }
        });
    }
    
    const btnResetar = document.getElementById('btn-resetar');
    if (btnResetar) {
        btnResetar.addEventListener('click', resetarTudo);
    }
}

// Adiciona exercício ao treino
function adicionarExercicio(treino, grupoOrigem, indexExercicio) {
    const exercicio = dadosTreinos.grupos_treino[grupoOrigem].exercicios[indexExercicio];
    
    const exercicioPersonalizado = {
        nome: exercicio.nome,
        series: exercicio.series,
        repeticoes: exercicio.repeticoes,
        dica: exercicio.dica,
        seriesPersonalizada: exercicio.series,
        repeticoesPersonalizada: exercicio.repeticoes
    };
    
    const jaExiste = treinosPersonalizados[treino].exercicios.some(
        ex => ex.nome === exercicioPersonalizado.nome
    );
    
    if (!jaExiste) {
        treinosPersonalizados[treino].exercicios.push(exercicioPersonalizado);
        atualizarInterfaceTreino(treino);
        mostrarFeedback(`✅ ${exercicio.nome} adicionado ao Treino ${treino}`);
    } else {
        mostrarFeedback(`⚠️ Exercício já está no Treino ${treino}`);
    }
}

// Remove exercício do treino
function removerExercicio(treino, index) {
    treinosPersonalizados[treino].exercicios.splice(index, 1);
    atualizarInterfaceTreino(treino);
    mostrarFeedback(`🗑️ Exercício removido do Treino ${treino}`);
}

// Atualiza configuração do exercício
function atualizarConfiguracaoExercicio(treino, index, campo, valor) {
    if (treinosPersonalizados[treino].exercicios[index]) {
        treinosPersonalizados[treino].exercicios[index][campo] = valor;
        atualizarPreview();
    }
}

// Atualiza interface do treino
function atualizarInterfaceTreino(treino) {
    const container = document.querySelector(`.exercicios-lista[data-grupo="${treino}"]`);
    const contador = document.querySelector(`[data-grupo="${treino}"] .contador`);
    
    if (!container || !contador) return;
    
    container.innerHTML = '';
    
    treinosPersonalizados[treino].exercicios.forEach((exercicio, index) => {
        const div = document.createElement('div');
        div.className = 'exercicio-selecionado';
        div.innerHTML = `
            <div>
                <strong>${exercicio.nome}</strong>
                <div class="exercicio-config">
                    <input type="number" class="series-input" 
                           value="${exercicio.seriesPersonalizada}" 
                           min="1" max="10"
                           data-treino="${treino}" data-index="${index}">
                    <span>x</span>
                    <input type="text" class="repeticoes-input" 
                           value="${exercicio.repeticoesPersonalizada}"
                           data-treino="${treino}" data-index="${index}">
                </div>
            </div>
            <button class="btn-remover-exercicio" data-treino="${treino}" data-index="${index}">🗑️</button>
        `;
        container.appendChild(div);
    });
    
    contador.textContent = `${treinosPersonalizados[treino].exercicios.length} exercícios`;
}

// Limpa treino completo
function limparTreino(treino) {
    if (confirm(`Tem certeza que deseja limpar todo o Treino ${treino}?`)) {
        treinosPersonalizados[treino].exercicios = [];
        atualizarInterfaceTreino(treino);
        mostrarFeedback(`🗑️ Treino ${treino} limpo`);
    }
}

// Atualiza nome do treino
function atualizarNomeTreino(treino, novoNome) {
    treinosPersonalizados[treino].nome = novoNome;
    atualizarPreview();
}

// Filtra exercícios na biblioteca
function filtrarExercicios() {
    const filtroGrupo = document.getElementById('filtro-grupo').value;
    const busca = document.getElementById('busca-exercicio').value.toLowerCase();
    
    document.querySelectorAll('.grupo-biblioteca').forEach(grupo => {
        const grupoId = grupo.dataset.grupo;
        let mostrarGrupo = !filtroGrupo || grupoId === filtroGrupo;
        
        if (mostrarGrupo) {
            let exerciciosVisiveis = 0;
            
            grupo.querySelectorAll('.exercicio-biblioteca').forEach(exercicio => {
                const textoExercicio = exercicio.querySelector('strong').textContent.toLowerCase();
                const mostrarExercicio = textoExercicio.includes(busca);
                
                exercicio.style.display = mostrarExercicio ? 'flex' : 'none';
                if (mostrarExercicio) exerciciosVisiveis++;
            });
            
            grupo.style.display = exerciciosVisiveis > 0 ? 'block' : 'none';
        } else {
            grupo.style.display = 'none';
        }
    });
}

// Salva configuração completa
function salvarConfiguracao() {
    const configuracao = {
        treinos: JSON.parse(JSON.stringify(treinosPersonalizados)),
        semana: {}
    };
    
    // Salva distribuição semanal
    const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    let todosPreenchidos = true;
    
    dias.forEach(dia => {
        const select = document.getElementById(dia);
        if (select) {
            configuracao.semana[dia] = select.value;
            
            if (!select.value) {
                todosPreenchidos = false;
                select.style.border = "2px solid #ff6b6b";
            } else {
                select.style.border = "1px solid #444";
            }
        }
    });
    
    // Verifica se todos os treinos têm exercícios
    const treinosVazios = [];
    for (const treino in configuracao.treinos) {
        if (configuracao.treinos[treino].exercicios.length === 0) {
            treinosVazios.push(treino);
        }
    }
    
    if (treinosVazios.length > 0) {
        alert(`Os seguintes treinos estão vazios: ${treinosVazios.join(', ')}. Adicione exercícios antes de salvar.`);
        return false;
    }
    
    if (!todosPreenchidos) {
        alert("Por favor, selecione um treino para todos os dias da semana.");
        return false;
    }
    
    localStorage.setItem('configuracaoTreinosPersonalizada', JSON.stringify(configuracao));
    localStorage.setItem('progressoAluno', JSON.stringify({}));
    
    mostrarFeedback("✅ Configuração salva com sucesso!");
    atualizarPreview();
    return true;
}

// Carrega configuração salva
function carregarConfiguracaoSalva() {
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    
    if (configuracaoSalva) {
        try {
            const configuracao = JSON.parse(configuracaoSalva);
            
            // Carrega treinos personalizados
            if (configuracao.treinos) {
                treinosPersonalizados = configuracao.treinos;
            }
            
            // Atualiza interface dos treinos
            for (const treino in treinosPersonalizados) {
                atualizarInterfaceTreino(treino);
                
                // Atualiza nomes dos treinos
                const inputNome = document.querySelector(`[data-grupo="${treino}"] .nome-treino`);
                if (inputNome && treinosPersonalizados[treino].nome) {
                    inputNome.value = treinosPersonalizados[treino].nome;
                }
            }
            
            // Carrega distribuição semanal
            const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
            dias.forEach(dia => {
                const select = document.getElementById(dia);
                if (select && configuracao.semana && configuracao.semana[dia]) {
                    select.value = configuracao.semana[dia];
                }
            });
            
        } catch (error) {
            console.error('Erro ao carregar configuração salva:', error);
        }
    }
}

// Atualiza pré-visualização
function atualizarPreview() {
    const container = document.getElementById('preview-container');
    if (!container) return;
    
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    
    if (!configuracaoSalva) {
        container.innerHTML = "<p>Configure os treinos da semana para ver a pré-visualização.</p>";
        return;
    }
    
    try {
        const configuracao = JSON.parse(configuracaoSalva);
        const diasSemana = {
            'segunda': 'Segunda-feira',
            'terca': 'Terça-feira', 
            'quarta': 'Quarta-feira',
            'quinta': 'Quinta-feira',
            'sexta': 'Sexta-feira',
            'sabado': 'Sábado'
        };
        
        let html = '<div class="preview-lista">';
        
        for (const [dia, treinoId] of Object.entries(configuracao.semana)) {
            const treino = configuracao.treinos[treinoId];
            if (treino) {
                html += `
                    <div class="preview-dia">
                        <h3>${diasSemana[dia]}</h3>
                        <p><strong>${treino.nome}</strong></p>
                        <small>${treino.exercicios.length} exercícios</small>
                        <div class="preview-exercicios">
                            ${treino.exercicios.slice(0, 3).map(ex => 
                                `<span>• ${ex.nome} - ${ex.seriesPersonalizada}x${ex.repeticoesPersonalizada}</span>`
                            ).join('')}
                            ${treino.exercicios.length > 3 ? 
                                `<span>• +${treino.exercicios.length - 3} mais...</span>` : ''}
                        </div>
                    </div>
                `;
            }
        }
        
        html += '</div>';
        container.innerHTML = html;
    } catch (error) {
        console.error('Erro ao atualizar preview:', error);
        container.innerHTML = "<p>Erro ao carregar pré-visualização.</p>";
    }
}

// Reset completo
function resetarTudo() {
    if (confirm('Tem certeza que deseja resetar TODA a configuração? Isso apagará todos os treinos personalizados.')) {
        treinosPersonalizados = {
            A: { nome: "Perna e Glúteo", exercicios: [] },
            B: { nome: "Peito e Tríceps", exercicios: [] },
            C: { nome: "Costas e Bíceps", exercicios: [] },
            D: { nome: "Abdômen e Cardio", exercicios: [] }
        };
        
        // Atualiza interface
        for (const treino in treinosPersonalizados) {
            atualizarInterfaceTreino(treino);
            const inputNome = document.querySelector(`[data-grupo="${treino}"] .nome-treino`);
            if (inputNome) inputNome.value = treinosPersonalizados[treino].nome;
        }
        
        // Limpa selects
        document.querySelectorAll('select').forEach(select => {
            if (select.id && select.id !== 'filtro-grupo') {
                select.value = '';
            }
        });
        
        localStorage.removeItem('configuracaoTreinosPersonalizada');
        localStorage.removeItem('progressoAluno');
        
        mostrarFeedback('🔄 Configuração resetada com sucesso!');
        atualizarPreview();
    }
}

// Mostra feedback temporário
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
