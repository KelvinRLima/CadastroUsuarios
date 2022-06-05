using CadastroUsuarios.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace CadastroUsuarios.Domain.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public Escolaridade Escolaridade { get; set; }
    }
}
