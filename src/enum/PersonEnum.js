const RolePerson = {
  tpDesenvolvedor: {
    value: "Desenvolvedor",
    descricao: "Analista de desenvolvimento",
  },
  tpSuporte: {
    value: "Suporte",
    descricao: "Analista de suporte técnico ao cliente",
  },
  tpNegocio: {
    value: "Negocio",
    descricao: "Analista de regras de negócio",
  },

  getDescricao: function (rolePerson) {
    return this[rolePerson].descricao;
  },

  getString: function (rolePerson) {
    return this[rolePerson].value;
  },
};

module.exports = RolePerson;
