const db = require("../config/database");

exports.createProjeto = async (req, res) => {
  const { nome, dataInicio, dataFim, descricao, status, orcamento, risco } = req.body;
  const { rows } = await db.query(
    "INSERT INTO projeto (nome, data_inicio, data_fim, descricao, status, orcamento, risco) VALUES ($1, $2, $3,$4, $5, $6, $7)",
    [nome, dataInicio, dataFim, descricao, status, orcamento, risco ]
  );
  res.status(201).send({
    message: "Projeto added successfully!",
    body: {
      projeto: { nome, dataInicio, dataFim, descricao, status, orcamento, risco  }
    },
  });
};

exports.listAllProjetos = async (req, res) => {
  const response = await db.query('SELECT * FROM projeto ORDER BY data_inicio ASC');
  res.status(200).send(response.rows);
};


exports.findProjetoById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM projeto WHERE id = $1', [id]);
  res.status(200).send(response.rows);
}

exports.updateProjetoById = async (req, res) => {
  const projetoId = parseInt(req.params.id);
  const { nome, dataInicio, dataFim, descricao, status, orcamento, risco  } = req.body;
  const response = await db.query(
    "UPDATE projeto SET nome = $1, data_inicio = $2, data_fim = $3, descricao = $4, status = $5, orcamento = $6, risco = $7 WHERE id = $8",
    [nome, dataInicio, dataFim, descricao, status, orcamento, risco, projetoId]
  );
  res.status(200).send({ message: "Projeto Updated Successfully!" });
};


exports.deleteProjetoById = async (req, res) => {
  const projetoId = parseInt(req.params.id);
  await db.query('DELETE FROM projeto WHERE id = $1', [
    projetoId
  ]);
  res.status(200).send({ message: 'Projeto deleted successfully!', projetoId });
};