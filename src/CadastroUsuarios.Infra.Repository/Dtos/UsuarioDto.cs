using CadastroUsuarios.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CadastroUsuarios.Infra.Repository.Dtos
{
    public class UsuarioDto
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("NOME")]
        public string Nome { get; set; }

        [Column("SOBRENOME")]
        public string Sobrenome { get; set; }

        [Column("EMAIL")]
        public string Email { get; set; }

        [Column("DATA_NASCIMENTO")]
        public DateTime DataNascimento { get; set; }

        [Column("ID_ESCOLARIDADE")]
        public Escolaridade Escolaridade { get; set; }
    }
}
