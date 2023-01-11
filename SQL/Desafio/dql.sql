-- Consulta 1 --

SELECT CONVERT(VARCHAR(5), DATEADD(minute, DATEDIFF(MINUTE, '09:00', insp.hr_inspecao), 0), 114) as total
FROM producao.inspecao as insp
WHERE hr_inspecao IN (
	SELECT TOP 1 hr_inspecao as last_time
	FROM producao.inspecao as i
	INNER JOIN producao.ficha as f ON (i.cd_ficha = f.cd_ficha)
	INNER JOIN producao.inspetor as p ON (f.cd_matricula_inspetor = p.cd_matricula_inspetor)
	WHERE f.dt_inspecao = '20221216' AND p.nm_inspetor = 'Trancoso Da Silva'
	ORDER BY hr_inspecao
	DESC);

-- Consulta 2 --

SELECT hr_inspecao as last_time
FROM producao.inspecao as i
INNER JOIN producao.ficha as f ON (i.cd_ficha = f.cd_ficha)
INNER JOIN producao.inspetor as p ON (f.cd_matricula_inspetor = p.cd_matricula_inspetor)
WHERE f.dt_inspecao BETWEEN '20221201' and '20221222' AND p.nm_inspetor = 'Trancoso Da Silva';

-- Consulta 3 --

SELECT cd_avaliacao, COUNT(1) as recorrencia
FROM producao.inspecao as pi
INNER JOIN producao.ficha as pf ON (pi.cd_ficha = pf.cd_ficha)
WHERE pf.dt_inspecao BETWEEN CONVERT(datetime, '20221201')
	AND CONVERT(datetime, '20221222')
	AND cd_avaliacao != 'OK'
GROUP BY cd_avaliacao
ORDER BY recorrencia DESC;

-- Consulta 4 --

SELECT nm_inspetor, COUNT(1) as	produtos_tr
FROM producao.inspetor as i
INNER JOIN producao.ficha as f ON (i.cd_matricula_inspetor = f.cd_matricula_inspetor)
INNER JOIN producao.inspecao as pin ON (f.cd_ficha = ins.cd_ficha)
WHERE ins.cd_avaliacao = 'TR'
GROUP BY nm_inspetor
ORDER BY produtos_tr DESC;

-- Consulta 5 --

SELECT CONCAT(cd_produto, '.', linha_produto, '.', ano_produto) as cod_produto
FROM producao.inspecao
WHERE cd_avaliacao = 'OK' AND cd_produto IN (
    SELECT cd_produto
    FROM producao.inspecao
    GROUP BY cd_produto
    HAVING COUNT(distinct cd_avaliacao) > 1);