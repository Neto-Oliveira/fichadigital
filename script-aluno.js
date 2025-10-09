// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Inicializando sistema Aluno...');
    inicializarSistemaAluno();
});

function inicializarSistemaAluno() {
    console.log('Inicializando página do Aluno...');
    configurarEventListenersAluno();
    atualizarProgressoSemanal();
    // Mostra segunda-feira por padrão
    mostrarTreino('segunda');
}

// Configura event listeners da página do aluno
function configurarEventListenersAluno() {
    console.log('Configurando event listeners do Aluno...');
    
    // Botões dos dias
    document.querySelectorAll('.dias button').forEach(btn => {
        btn.addEventListener('click', function() {
            const dia = this.getAttribute('data-dia');
            console.log(`Botão dia clicado: ${dia}`);
            mostrarTreino(dia);
        });
    });
    
    // Event delegation para checkboxes e botões
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('checkbox-treino')) {
            const dia = e.target.getAttribute('data-dia');
            const index = parseInt(e.target.getAttribute('data-index'));
            const checked = e.target.checked;
            marcarExercicio(dia, index, checked);
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-finalizar-treino')) {
            const dia = e.target.getAttribute('data-dia');
            finalizarTreino(dia);
        }
    });
}

// Mostra treino do dia com checkboxes
function mostrarTreino(dia) {
    const area = document.getElementById("conteudo-treino");
    if (!area) return;
    
    console.log(`Mostrando treino para ${dia}`);
    
    // Ativa botão do dia
    document.querySelectorAll('.dias button').forEach(btn => btn.classList.remove('active'));
    const btnDia = document.querySelector(`[data-dia="${dia}"]`);
    if (btnDia) btnDia.classList.add('active');
    
    // Recupera configuração
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    
    if (!configuracaoSalva) {
        area.innerHTML = `
            <div class="mensagem-inicial">
                <h2>Treino não configurado</h2>
                <p>Seu personal trainer ainda não configurou seus treinos.</p>
                <p>Peça para ele acessar a página do personal e salvar sua configuração.</p>
            </div>
        `;
        return;
    }
    
    try {
        const configuracao = JSON.parse(configuracaoSalva);
        const treinoId = configuracao.semana[dia];
        
        if (!treinoId) {
            area.innerHTML = `<p>Nenhum treino definido para ${getDiaSemana(dia)}.</p>`;
            return;
        }
        
        // Verifica progresso anterior
        const progressoSalvo = localStorage.getItem('progressoAluno');
        const progresso = progressoSalvo ? JSON.parse(progressoSalvo) : {};
        const treinoConcluido = progresso[dia] ? progresso[dia].concluido : false;
        const exerciciosConcluidos = progresso[dia] ? progresso[dia].exercicios || [] : [];
        
        // Se for descanso
        if (treinoId === 'descanso') {
            area.innerHTML = `
                <div class="descanso">
                    <h3>Descanso Ativo - ${getDiaSemana(dia)}</h3>
                    <p>Este é seu dia de descanso. Aproveite para se recuperar!</p>
                    ${treinoConcluido ? '<div class="status-concluido">✅ Dia de descanso registrado</div>' : ''}
                </div>
            `;
            return;
        }
        
        const treino = configuracao.treinos[treinoId];
        
        if (!treino || !treino.exercicios || treino.exercicios.length === 0) {
            area.innerHTML = `
                <div class="mensagem-inicial">
                    <h2>Treino ${treinoId} não configurado</h2>
                    <p>O treino ${treinoId} (${getDiaSemana(dia)}) ainda não tem exercícios.</p>
                    <p>Peça para seu personal adicionar exercícios a este treino.</p>
                </div>
            `;
            return;
        }

        let html = `<div class="treino">
            <h2>${treino.nome} - ${getDiaSemana(dia)}</h2>
            ${treinoConcluido ? '<div class="status-concluido">✅ TREINO CONCLUÍDO!</div>' : ''}
            
            ${treino.exercicios.map((ex, index) => {
                const concluido = exerciciosConcluidos.includes(index);
                return `
                <div class="exercicio ${concluido ? 'exercicio-concluido' : ''}">
                    <div>
                        <strong>${ex.nome}</strong>
                        <div>${ex.seriesPersonalizada}x${ex.repeticoesPersonalizada}</div>
                        ${ex.dica ? `<small class="exercicio-dica">💡 ${ex.dica}</small>` : ''}
                    </div>
                    <input type="checkbox" class="checkbox-treino" 
                           ${concluido ? 'checked' : ''}
                           data-dia="${dia}" data-index="${index}">
                </div>
            `}).join("")}
            
            <div class="acoes-treino">
                <button class="btn-principal btn-finalizar-treino" data-dia="${dia}" ${treinoConcluido ? 'disabled' : ''}>
                    ${treinoConcluido ? '✅ Treino Finalizado' : '🏁 Finalizar Treino'}
                </button>
            </div>
        </div>`;

        area.innerHTML = html;
        atualizarProgressoSemanal();
        verificarProgressoSequencial();
        
    } catch (error) {
        console.error('Erro ao mostrar treino:', error);
        area.innerHTML = `
            <div class="mensagem-inicial">
                <h2>Erro ao carregar treino</h2>
                <p>Ocorreu um erro ao carregar seu treino. Recarregue a página ou peça ajuda ao seu personal.</p>
            </div>
        `;
    }
}

// Funções auxiliares para página do aluno
function getDiaSemana(dia) {
    const dias = {
        'segunda': 'Segunda-feira',
        'terca': 'Terça-feira',
        'quarta': 'Quarta-feira', 
        'quinta': 'Quinta-feira',
        'sexta': 'Sexta-feira',
        'sabado': 'Sábado'
    };
    return dias[dia] || dia;
}

// Marca/desmarca exercício
function marcarExercicio(dia, index, concluido) {
    const progressoSalvo = localStorage.getItem('progressoAluno');
    const progresso = progressoSalvo ? JSON.parse(progressoSalvo) : {};
    
    if (!progresso[dia]) {
        progresso[dia] = { exercicios: [], concluido: false };
    }
    
    if (concluido) {
        if (!progresso[dia].exercicios.includes(index)) {
            progresso[dia].exercicios.push(index);
        }
    } else {
        progresso[dia].exercicios = progresso[dia].exercicios.filter(i => i !== index);
        progresso[dia].concluido = false;
    }
    
    localStorage.setItem('progressoAluno', JSON.stringify(progresso));
    atualizarProgressoSemanal();
}

// Finaliza treino do dia
function finalizarTreino(dia) {
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    if (!configuracaoSalva) {
        alert('Erro: Configuração de treinos não encontrada!');
        return;
    }
    
    const configuracao = JSON.parse(configuracaoSalva);
    const treinoId = configuracao.semana[dia];
    const treino = configuracao.treinos[treinoId];
    
    const progressoSalvo = localStorage.getItem('progressoAluno');
    const progresso = progressoSalvo ? JSON.parse(progressoSalvo) : {};
    
    if (!progresso[dia]) {
        progresso[dia] = { exercicios: [], concluido: true };
    } else {
        progresso[dia].concluido = true;
        progresso[dia].exercicios = Array.from({length: treino.exercicios.length}, (_, i) => i);
    }
    
    localStorage.setItem('progressoAluno', JSON.stringify(progresso));
    
    alert(`🎉 Parabéns! Treino ${treinoId} da ${getDiaSemana(dia)} concluído com sucesso!`);
    mostrarTreino(dia);
    verificarProgressoSequencial();
}

// Atualiza barras de progresso
function atualizarProgressoSemanal() {
    const progressoSalvo = localStorage.getItem('progressoAluno');
    const progresso = progressoSalvo ? JSON.parse(progressoSalvo) : {};
    const configuracaoSalva = localStorage.getItem('configuracaoTreinosPersonalizada');
    const configuracao = configuracaoSalva ? JSON.parse(configuracaoSalva) : { semana: {} };
    
    const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    
    let treinosConcluidos = 0;
    
    dias.forEach(dia => {
        const progressoDia = document.querySelector(`.dia-progresso[data-dia="${dia}"]`);
        if (!progressoDia) return;
        
        const barra = progressoDia.querySelector('.progresso');
        const percentual = progressoDia.querySelector('.percentual');
        
        if (progresso[dia] && progresso[dia].concluido) {
            barra.style.width = '100%';
            percentual.textContent = '100%';
            treinosConcluidos++;
        } else if (progresso[dia] && configuracao.treinos[configuracao.semana[dia]]) {
            const totalExercicios = configuracao.treinos[configuracao.semana[dia]].exercicios.length;
            const concluidos = progresso[dia].exercicios.length;
            const percent = totalExercicios > 0 ? (concluidos / totalExercicios) * 100 : 0;
            barra.style.width = `${percent}%`;
            percentual.textContent = `${Math.round(percent)}%`;
        } else {
            barra.style.width = '0%';
            percentual.textContent = '0%';
        }
    });
    
    // Atualiza status geral
    const statusElement = document.getElementById('status-treino');
    if (statusElement) {
        if (treinosConcluidos === dias.length) {
            statusElement.textContent = 'Treino da semana: CONCLUÍDO! 🎉';
            statusElement.className = 'status-concluido';
        } else {
            statusElement.textContent = `Treino da semana: ${treinosConcluidos}/${dias.length} dias`;
            statusElement.className = 'status-pendente';
        }
    }
}

// Verifica sequência de treinos
function verificarProgressoSequencial() {
    const diasOrdem = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const progressoSalvo = localStorage.getItem('progressoAluno');
    const progresso = progressoSalvo ? JSON.parse(progressoSalvo) : {};
    
    let diaAtualIndex = 0;
    
    for (let i = 0; i < diasOrdem.length; i++) {
        if (progresso[diasOrdem[i]] && progresso[diasOrdem[i]].concluido) {
            diaAtualIndex = i + 1;
        } else {
            break;
        }
    }
    
    if (diaAtualIndex < diasOrdem.length) {
        const diaAtual = diasOrdem[diaAtualIndex];
        const diaAnterior = diaAtualIndex > 0 ? diasOrdem[diaAtualIndex - 1] : null;
        
        if (diaAnterior && !progresso[diaAtual]?.concluido) {
            const area = document.getElementById("conteudo-treino");
            const alerta = document.createElement('div');
            alerta.className = 'alerta-treino';
            alerta.innerHTML = `
                <strong>⚠️ ATENÇÃO</strong>
                <p>Treino ${getDiaSemana(diaAnterior)} concluído! Para melhor evolução, conclua o treino ${getDiaSemana(diaAtual)} antes de avançar.</p>
            `;
            
            if (area && !area.querySelector('.alerta-treino')) {
                area.insertBefore(alerta, area.firstChild);
            }
        }
    }
}