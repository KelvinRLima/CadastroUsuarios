using CadastroUsuarios.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CadastroUsuarios.Domain.Repositories
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<Usuario>> ListarUsuario();
        Task AddUsuario(Usuario usuario);
        Task UpdateUsuario(Usuario usuario);
        Task DeleteUsuario(int id);
    }
}
