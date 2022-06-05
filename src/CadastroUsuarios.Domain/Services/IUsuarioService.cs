using CadastroUsuarios.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CadastroUsuarios.Domain.Services
{
    public interface IUsuarioService
    {
        /// <summary>
        /// Realiza pesquisa de usuarios.
        /// </summary>
        /// <returns>
        /// Lista de usuarios.
        /// </returns>
        Task<IEnumerable<Usuario>> ListarUsuario();

        /// <summary>
        /// Insere um novo usuario.
        /// </summary>
        /// <returns>
        /// Sucesso da operacao.
        /// </returns>
        Task<bool> AddUsuario(Usuario usuario);

        /// <summary>
        /// Atualiza dados do usuario.
        /// </summary>
        /// <returns>
        /// Sucesso da operacao.
        /// </returns>
        Task<bool> UpdateUsuario(Usuario usuario);

        /// <summary>
        /// Remove usuario.
        /// </summary>
        /// <returns>
        /// Sucesso da operacao.
        /// </returns>
        Task<bool> DeleteUsuario(int id);
    }
}
