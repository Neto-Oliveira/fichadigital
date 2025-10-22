// CORREÇÃO DO SISTEMA DE DATA
function obterDataAtual() {
    const agora = new Date();
    
    // CORREÇÃO: Usar fuso horário brasileiro (UTC-3)
    const offset = -3 * 60; // UTC-3 em minutos
    const dataCorrigida = new Date(agora.getTime() + offset * 60 * 1000);
    
    return dataCorrigida.toISOString().split('T')[0];
}

function formatarDataCompleta(dataISO) {
    const data = new Date(dataISO + 'T12:00:00-03:00'); // CORREÇÃO: Forçar fuso horário BR
    
    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'America/Sao_Paulo'
    };
    
    // CORREÇÃO: Usar locale pt-BR e timezone específica
    return data.toLocaleDateString('pt-BR', opcoes);
}

// Estado do aluno
let estadoAluno = {
    dataAtual: obterDataAtual(), // CORREÇÃO: Usar função corrigida
    treinoAtual: null,
    progresso: {},
    streak: 0,
    diasAcademia: 0,
    inicioSistema: obterDataAtual(), // CORREÇÃO: Usar função corrigida
    configuracaoInicial: localStorage.getItem('configuracaoInicial') || null,
    jaConfigurado: localStorage.getItem('configuracaoJaRealizada') === 'true'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Inicializando sistema Aluno...');
    inicializarSistemaAluno();
});

function inicializarSistemaAluno() {
    console.log('Inicializando página do Aluno...');
    carregarEstadoAluno();
    
    // VERIFICAÇÃO CORRIGIDA: Só pergunta se NUNCA configurou antes OU se não tem treino atual
    if (!estadoAluno.jaConfigurado || !estadoAluno.treinoAtual) {
        mostrarConfiguracaoInicial();
        return;
    }
    
    determinarTreinoAtual();
    configurarEventListenersAluno();
    carregarTreinoDoDia();
    calcularStreak();
    atualizarProgressoSemanal();
    atualizarContadores();
}

function mostrarConfiguracaoInicial() {
    const configuracao = JSON.parse(localStorage.getItem('configuracaoTreinosPersonalizada') || '{}');
    const treinosDisponiveis = Object.keys(configuracao.treinos || {});
    
    if (treinosDisponiveis.length === 0) {
        const container = document.getElementById('conteudo-treino');
        container.innerHTML = `
            <div class="configuracao-inicial">
                <h2>🎯 Aguardando Configuração</h2>
                <p>Seu personal trainer ainda não configurou os treinos.</p>
                <p>Entre em contato para mais informações.</p>
            </div>
        `;
        return;
    }
    
    const container = document.getElementById('conteudo-treino');
    let opcoesHTML = '';
    
    treinosDisponiveis.forEach(treinoId => {
        const treino = configuracao.treinos[treinoId];
        opcoesHTML += `
            <button class="btn-treino-inicial" data-treino="${treinoId}">
                ${getIconeTreino(treinoId)} ${treino.nome} (Treino ${treinoId})
            </button>
        `;
    });
    
    container.innerHTML = `
        <div class="configuracao-inicial">
            <h2>🎯 Primeira Vez Aqui?</h2>
            <p>Para começar, selecione qual treino você fará <strong>hoje</strong>:</p>
            <div class="opcoes-treino">
                ${opcoesHTML}
            </div>
            <p class="info-configuracao">⚠️ Esta pergunta aparecerá apenas esta vez</p>
        </div>
    `;
    
    document.querySelectorAll('.btn-treino-inicial').forEach(btn => {
        btn.addEventListener('click', function() {
            const treinoInicial = this.getAttribute('data-treino');
            finalizarConfiguracaoInicial(treinoInicial);
        });
    });
}

function getIconeTreino(treinoId) {
    const icones = {
        'A': '🦵',
        'B': '💪', 
        'C': '🏋️‍♂️',
        'D': '🔺',
        'E': '🧠'
    };
    return icones[treinoId] || '🎯';
}

function finalizarConfiguracaoInicial(treinoInicial) {
    estadoAluno.configuracaoInicial = treinoInicial;
    estadoAluno.treinoAtual = treinoInicial;
    estadoAluno.jaConfigurado = true; // MARCA QUE JÁ CONFIGUROU
    
    estadoAluno.progresso[estadoAluno.dataAtual] = {
        treino: treinoInicial,
        concluido: false,
        exercicios: {}
    };
    
    // SALVAR ambas as configurações
    localStorage.setItem('configuracaoInicial', treinoInicial);
    localStorage.setItem('configuracaoJaRealizada', 'true'); // NOVO: marca que já configurou
    localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
    
    mostrarFeedback('✅ Configuração concluída! Agora você verá seu treino automaticamente.');
    
    // Recarregar o sistema normalmente
    setTimeout(() => {
        inicializarSistemaAluno();
    }, 1500);
}

function carregarEstadoAluno() {
    const estadoSalvo = localStorage.getItem('estadoAluno');
    if (estadoSalvo) {
        const estado = JSON.parse(estadoSalvo);
        estadoAluno = {
            ...estadoAluno,
            ...estado,
            dataAtual: obterDataAtual() // CORREÇÃO: Usar função corrigida
        };
        
        // VERIFICAR SE AINDA TEM CONFIGURAÇÃO VÁLIDA
        const configuracao = JSON.parse(localStorage.getItem('configuracaoTreinosPersonalizada') || '{}');
        const treinosDisponiveis = Object.keys(configuracao.treinos || {});
        
        // Se o treino atual não existe mais na configuração, resetar
        if (estadoAluno.treinoAtual && !treinosDisponiveis.includes(estadoAluno.treinoAtual)) {
            estadoAluno.treinoAtual = null;
            estadoAluno.jaConfigurado = false;
            localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
        }
        
        // Contar dias de academia ao carregar
        contarDiasAcademia();
    }
}

// CORREÇÃO: Dias na academia conta TODOS os dias que fez algum exercício
function contarDiasAcademia() {
    let totalDias = 0;
    Object.keys(estadoAluno.progresso).forEach(data => {
        const progresso = estadoAluno.progresso[data];
        
        // Conta se fez ALGUM exercício (não precisa ser 100%)
        if (progresso.exercicios && Object.keys(progresso.exercicios).length > 0) {
            const exerciciosFeitos = Object.values(progresso.exercicios).filter(concluido => concluido).length;
            if (exerciciosFeitos > 0) {
                totalDias++;
            }
        }
    });
    estadoAluno.diasAcademia = totalDias;
}

function determinarTreinoAtual() {
    const configuracao = JSON.parse(localStorage.getItem('configuracaoTreinosPersonalizada') || '{}');
    const treinosDisponiveis = Object.keys(configuracao.treinos || {});
    
    if (treinosDisponiveis.length === 0) {
        estadoAluno.treinoAtual = null;
        return;
    }
    
    // Verificar se já temos um treino para hoje
    const progressoHoje = estadoAluno.progresso[estadoAluno.dataAtual];
    if (progressoHoje && progressoHoje.treino) {
        estadoAluno.treinoAtual = progressoHoje.treino;
        return;
    }
    
    // Se não tem treino para hoje, determinar qual deve ser
    let ultimoTreinoConcluido = estadoAluno.configuracaoInicial;
    
    // Buscar o último treino concluído em dias anteriores
    const datas = Object.keys(estadoAluno.progresso).sort().reverse();
    for (let data of datas) {
        const progresso = estadoAluno.progresso[data];
        if (progresso.concluido && progresso.treino && treinosDisponiveis.includes(progresso.treino)) {
            ultimoTreinoConcluido = progresso.treino;
            break;
        }
    }
    
    // Se não encontrou nenhum treino concluído, usar a configuração inicial
    if (!ultimoTreinoConcluido) {
        ultimoTreinoConcluido = estadoAluno.configuracaoInicial;
    }
    
    // Avançar para o próximo treino na sequência
    const indexAtual = treinosDisponiveis.indexOf(ultimoTreinoConcluido);
    let proximoIndex;
    
    if (indexAtual === -1) {
        proximoIndex = 0;
    } else {
        proximoIndex = (indexAtual + 1) % treinosDisponiveis.length;
    }
    
    estadoAluno.treinoAtual = treinosDisponiveis[proximoIndex];
    
    // Registrar o treino de hoje se não existir
    if (!estadoAluno.progresso[estadoAluno.dataAtual]) {
        estadoAluno.progresso[estadoAluno.dataAtual] = {
            treino: estadoAluno.treinoAtual,
            concluido: false,
            exercicios: {}
        };
    } else {
        estadoAluno.progresso[estadoAluno.dataAtual].treino = estadoAluno.treinoAtual;
    }
    
    localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
}

function configurarEventListenersAluno() {
    document.getElementById('btn-teste-avancar-dia')?.addEventListener('click', function() {
        const hoje = new Date(estadoAluno.dataAtual);
        hoje.setDate(hoje.getDate() + 1);
        estadoAluno.dataAtual = hoje.toISOString().split('T')[0];
        localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
        
        mostrarFeedback('🚀 TESTE: Data avançada para o próximo dia!');
        determinarTreinoAtual();
        carregarTreinoDoDia();
        calcularStreak();
        atualizarProgressoSemanal();
        atualizarContadores();
    });

    document.getElementById('btn-teste-resetar')?.addEventListener('click', function() {
        if (confirm('🚨 TESTE: Resetar TODO o progresso?\n\nIsso irá limpar todas as marcações mas manterá a configuração inicial.')) {
            estadoAluno.progresso = {};
            estadoAluno.streak = 0;
            estadoAluno.diasAcademia = 0;
            determinarTreinoAtual();
            localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
            
            mostrarFeedback('🔄 TESTE: Progresso resetado com sucesso!');
            carregarTreinoDoDia();
            calcularStreak();
            atualizarProgressoSemanal();
            atualizarContadores();
        }
    });

    // Event delegation para checkboxes - CORRIGIDO
    document.addEventListener('change', function(e) {
    if (e.target.classList.contains('checkbox-exercicio')) {
        const exercicioId = e.target.getAttribute('data-exercicio-id');
        const concluido = e.target.checked;
        
        estadoAluno.progresso[estadoAluno.dataAtual].exercicios[exercicioId] = concluido;
        
        const todosExercicios = document.querySelectorAll('.checkbox-exercicio');
        const todosConcluidos = Array.from(todosExercicios).every(checkbox => checkbox.checked);
        
        const jaEstavaConcluido = estadoAluno.progresso[estadoAluno.dataAtual].concluido;
        estadoAluno.progresso[estadoAluno.dataAtual].concluido = todosConcluidos;
        
        // CORREÇÃO: Recalcular dias na academia SEMPRE que mudar exercícios
        contarDiasAcademia(); // ← AGORA ATUALIZA IMEDIATAMENTE
        
        if (todosConcluidos && !jaEstavaConcluido) {
            document.getElementById('status-treino').className = 'status-concluido';
            document.getElementById('status-treino').textContent = '✅ Treino Concluído!';
            
            if (!estadoAluno.progresso[estadoAluno.dataAtual].jaContabilizado) {
                estadoAluno.progresso[estadoAluno.dataAtual].jaContabilizado = true;
                calcularStreak();
                atualizarContadores();
            }
        } else if (!todosConcluidos) {
            const exerciciosConcluidos = Array.from(todosExercicios).filter(cb => cb.checked).length;
            const progressoPercentual = Math.round((exerciciosConcluidos / todosExercicios.length) * 100);
            
            document.getElementById('status-treino').className = 'status-andamento';
            document.getElementById('status-treino').textContent = `⏳ ${progressoPercentual}% Concluído`;
            
            if (jaEstavaConcluido) {
                estadoAluno.progresso[estadoAluno.dataAtual].jaContabilizado = false;
                calcularStreak();
                atualizarContadores();
            }
        }
        
        // ATUALIZAR O CONTADOR VISUALMENTE IMEDIATAMENTE
        document.getElementById('contador-academia').textContent = estadoAluno.diasAcademia;
        
        localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
        atualizarProgressoSemanal();
    }
});
}

function carregarTreinoDoDia() {
    const configuracao = localStorage.getItem('configuracaoTreinosPersonalizada');
    const container = document.getElementById('conteudo-treino');
    
    if (!configuracao || !estadoAluno.treinoAtual) {
        container.innerHTML = `
            <div class="mensagem-inicial">
                <h2>Nenhum treino configurado</h2>
                <p>O personal trainer ainda não configurou seus treinos.</p>
                <p>Entre em contato com seu personal para mais informações.</p>
            </div>
        `;
        document.getElementById('status-treino').textContent = '❌ Treino Não Configurado';
        document.getElementById('treino-atual').textContent = '';
        return;
    }
    
    try {
        const config = JSON.parse(configuracao);
        const treino = config.treinos[estadoAluno.treinoAtual];
        
        if (!treino || !treino.exercicios || treino.exercicios.length === 0) {
            container.innerHTML = `
                <div class="mensagem-inicial">
                    <h2>Treino ${estadoAluno.treinoAtual} não configurado</h2>
                    <p>O treino ${estadoAluno.treinoAtual} está vazio ou não foi configurado.</p>
                    <p>Seu personal trainer precisa adicionar exercícios.</p>
                </div>
            `;
            document.getElementById('status-treino').textContent = '📝 Treino Vazio';
            document.getElementById('treino-atual').textContent = `Treino ${estadoAluno.treinoAtual}`;
            return;
        }
        
        let html = `
            <div class="cabecalho-treino">
                <h2>${treino.nome}</h2>
                <p>${formatarData(estadoAluno.dataAtual)}</p>
            </div>
            <div class="lista-exercicios-aluno">
        `;
        
        const progressoDia = estadoAluno.progresso[estadoAluno.dataAtual];
        let exerciciosConcluidos = 0;
        
        treino.exercicios.forEach((exercicio, index) => {
            const exercicioId = `${estadoAluno.treinoAtual}-${index}`;
            const concluido = progressoDia?.exercicios?.[exercicioId] || false;
            if (concluido) exerciciosConcluidos++;
            
            html += `
                <div class="exercicio-aluno ${concluido ? 'concluido' : ''}">
                    <div class="exercicio-info">
                        <h3>${exercicio.nome}</h3>
                        <span class="series-repeticoes">${exercicio.seriesPersonalizada || exercicio.series}x${exercicio.repeticoesPersonalizada || exercicio.repeticoes}</span>
                        ${exercicio.dica ? `<p class="dica-exercicio">💡 ${exercicio.dica}</p>` : ''}
                    </div>
                    <div class="exercicio-controle">
                        <label class="checkbox-container">
                            <input type="checkbox" class="checkbox-exercicio" data-exercicio-id="${exercicioId}" ${concluido ? 'checked' : ''}>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        
        const progressoPercentual = treino.exercicios.length > 0 ? Math.round((exerciciosConcluidos / treino.exercicios.length) * 100) : 0;
        
        if (progressoDia?.concluido) {
            document.getElementById('status-treino').className = 'status-concluido';
            document.getElementById('status-treino').textContent = '✅ Treino Concluído!';
        } else if (exerciciosConcluidos > 0) {
            document.getElementById('status-treino').className = 'status-andamento';
            document.getElementById('status-treino').textContent = `⏳ ${progressoPercentual}% Concluído`;
        } else {
            document.getElementById('status-treino').className = 'status-pendente';
            document.getElementById('status-treino').textContent = '📝 Treino Pendente';
        }
        
        document.getElementById('treino-atual').textContent = `Treino ${estadoAluno.treinoAtual} - ${treino.nome}`;
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Erro ao carregar treino:', error);
        container.innerHTML = `
            <div class="mensagem-inicial">
                <h2>Erro ao carregar treino</h2>
                <p>Ocorreu um erro ao carregar seu treino atual.</p>
                <p>Tente recarregar a página ou entre em contato com seu personal.</p>
            </div>
        `;
    }
}

function atualizarProgressoSemanal() {
    const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    let diasCompletos = 0;
    
    const dataAtualObj = new Date(estadoAluno.dataAtual);
    const inicioSemana = new Date(dataAtualObj);
    inicioSemana.setDate(dataAtualObj.getDate() - dataAtualObj.getDay());
    
    const configuracao = JSON.parse(localStorage.getItem('configuracaoTreinosPersonalizada') || '{}');
    
    dias.forEach((dia, index) => {
        const dataDia = new Date(inicioSemana);
        dataDia.setDate(inicioSemana.getDate() + index);
        const dataStr = dataDia.toISOString().split('T')[0];
        
        const progressoDia = estadoAluno.progresso[dataStr];
        let percentual = 0;
        let mostrarFaltou = false;
        
        // Verificar se é um dia passado
        const hoje = new Date(estadoAluno.dataAtual);
        const diaDaSemana = new Date(dataStr);
        const ehDiaPassado = diaDaSemana < hoje;
        
        // Calcular percentual baseado no treino real do dia
        if (progressoDia && progressoDia.treino) {
            const treinoDoDia = configuracao.treinos?.[progressoDia.treino];
            if (treinoDoDia && treinoDoDia.exercicios) {
                const totalExercicios = treinoDoDia.exercicios.length;
                if (totalExercicios > 0) {
                    let exerciciosConcluidos = 0;
                    treinoDoDia.exercicios.forEach((exercicio, index) => {
                        const exercicioId = `${progressoDia.treino}-${index}`;
                        if (progressoDia.exercicios?.[exercicioId]) {
                            exerciciosConcluidos++;
                        }
                    });
                    percentual = Math.round((exerciciosConcluidos / totalExercicios) * 100);
                }
            }
        }
        
        // Se é um dia passado sem nenhum progresso E tem treino definido, marca como "faltou"
        if (ehDiaPassado && percentual === 0 && progressoDia?.treino) {
            mostrarFaltou = true;
        }
        
        // Se o treino está marcado como concluído, forçar 100%
        if (progressoDia?.concluido) {
            percentual = 100;
            mostrarFaltou = false;
        }
        
        const treinoDoDia = progressoDia?.treino || '-';
        const nomeTreino = configuracao.treinos && configuracao.treinos[treinoDoDia] ? configuracao.treinos[treinoDoDia].nome : '-';
        
        const elementoDia = document.querySelector(`.dia-progresso[data-dia="${dia}"]`);
        if (elementoDia) {
            const barra = elementoDia.querySelector('.progresso');
            const percentualElem = elementoDia.querySelector('.percentual');
            const nomeTreinoElem = elementoDia.querySelector('.nome-treino');
            
            barra.style.width = `${percentual}%`;
            
            if (mostrarFaltou) {
                percentualElem.textContent = '❌ Faltou';
                percentualElem.className = 'percentual faltou';
            } else {
                percentualElem.textContent = `${percentual}%`;
                percentualElem.className = 'percentual';
            }
            
            nomeTreinoElem.textContent = nomeTreino;
            
            elementoDia.classList.remove('completo', 'parcial', 'vazio', 'faltou', 'ativo');
            
            if (percentual === 100) {
                elementoDia.classList.add('completo');
                diasCompletos++;
            } else if (percentual > 0) {
                elementoDia.classList.add('parcial');
            } else if (mostrarFaltou) {
                elementoDia.classList.add('faltou');
            } else {
                elementoDia.classList.add('vazio');
            }
            
            if (dataStr === estadoAluno.dataAtual) {
                elementoDia.classList.add('ativo');
            }
        }
    });
    
    document.getElementById('contador-semanal').textContent = `${diasCompletos}/7 dias completos esta semana`;
}

// FUNÇÃO CALCULAR STREAK CORRIGIDA - só conta dias 100% concluídos CONSECUTIVOS
function calcularStreak() {
    const hoje = new Date(estadoAluno.dataAtual);
    let streakAtual = 0;
    let dataVerificar = new Date(hoje);
    
    // Verificar de hoje para trás
    for (let i = 0; i < 365; i++) {
        const dataStr = dataVerificar.toISOString().split('T')[0];
        const progressoDia = estadoAluno.progresso[dataStr];
        
        // Se o dia tem treino definido
        if (progressoDia && progressoDia.treino) {
            const ehDiaPassado = dataVerificar < hoje;
            const ehDiaAtual = dataStr === estadoAluno.dataAtual;
            
            // Se foi 100% concluído, aumenta o streak
            if (progressoDia.concluido) {
                streakAtual++;
            } 
            // Se é um dia PASSADO com treino mas 0% feito = FALTOU (quebra streak)
            else if (ehDiaPassado && !progressoDia.concluido) {
                // Verificar se realmente não fez NADA (0%)
                let percentual = 0;
                const configuracao = JSON.parse(localStorage.getItem('configuracaoTreinosPersonalizada') || '{}');
                const treinoDoDia = configuracao.treinos?.[progressoDia.treino];
                
                if (treinoDoDia && treinoDoDia.exercicios) {
                    let exerciciosConcluidos = 0;
                    treinoDoDia.exercicios.forEach((exercicio, index) => {
                        const exercicioId = `${progressoDia.treino}-${index}`;
                        if (progressoDia.exercicios?.[exercicioId]) {
                            exerciciosConcluidos++;
                        }
                    });
                    percentual = Math.round((exerciciosConcluidos / treinoDoDia.exercicios.length) * 100);
                }
                
                // Se fez 0% em dia PASSADO = FALTOU (quebra streak)
                if (percentual === 0) {
                    break;
                }
                // Se fez algo (1-99%) em dia PASSADO, não quebra (só não aumenta)
            }
            // Se é o dia ATUAL e não concluiu ainda, não quebra (ainda pode fazer)
            else if (ehDiaAtual && !progressoDia.concluido) {
                // Não quebra - usuário ainda pode fazer o treino hoje
            }
        }
        // Se não tem treino definido, continua verificando
        
        // Voltar um dia
        dataVerificar.setDate(dataVerificar.getDate() - 1);
    }
    
    estadoAluno.streak = streakAtual;
    localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
    console.log('Streak calculado:', streakAtual, 'dias');
}

function atualizarContadores() {
    document.getElementById('contador-academia').textContent = estadoAluno.diasAcademia;
    document.getElementById('streak-atual').textContent = `🔥 Sequência atual: ${estadoAluno.streak} dias`;
}

function formatarData(dataStr) {
    return formatarDataCompleta(dataStr); // CORREÇÃO: Usar função corrigida
}

function mostrarFeedback(mensagem) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback-temporario';
    feedback.textContent = mensagem;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => feedback.remove(), 300);
    }, 3000);
}

// Função para resetar TUDO
function resetarTudo() {
    if (confirm('🚨 TEM CERTEZA QUE DESEJA RESETAR TUDO?\n\nIsso irá apagar:\n• Todo o seu progresso\n• Histórico de treinos\n• Sua sequência atual\n\nVocê começará do zero.')) {
        // MANTÉM a configuração inicial, apenas limpa o progresso
        const configInicialSalva = estadoAluno.configuracaoInicial;
        const jaConfiguradoSalvo = estadoAluno.jaConfigurado;
        
        estadoAluno = {
            dataAtual: obterDataAtual(), // CORREÇÃO: Usar função corrigida
            treinoAtual: configInicialSalva, // MANTÉM a configuração
            progresso: {},
            streak: 0,
            diasAcademia: 0,
            inicioSistema: obterDataAtual(), // CORREÇÃO: Usar função corrigida
            configuracaoInicial: configInicialSalva, // MANTÉM a configuração
            jaConfigurado: jaConfiguradoSalvo // MANTÉM que já configurou
        };
        
        // Atualiza apenas o dia atual
        estadoAluno.progresso[estadoAluno.dataAtual] = {
            treino: estadoAluno.treinoAtual,
            concluido: false,
            exercicios: {}
        };
        
        localStorage.setItem('estadoAluno', JSON.stringify(estadoAluno));
        
        mostrarFeedback('🔄 Progresso resetado! Sua configuração foi mantida.');
        
        // Recarrega a página para refletir as mudanças
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}