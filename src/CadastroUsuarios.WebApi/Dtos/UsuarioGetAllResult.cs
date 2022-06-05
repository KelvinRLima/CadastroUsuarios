using CadastroUsuarios.Domain.Models.Enums;
using System;

namespace CadastroUsuarios.WebApi.Dtos
{
    public class UsuarioGetAllResult
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public Escolaridade Escolaridade { get; set; }
    }
}
