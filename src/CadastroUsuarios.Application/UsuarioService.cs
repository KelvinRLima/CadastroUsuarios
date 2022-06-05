using CadastroUsuarios.Domain.Models;
using CadastroUsuarios.Domain.Repositories;
using CadastroUsuarios.Domain.Services;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;

namespace CadastroUsuarios.Application
{
    public class UsuarioService: IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            this._usuarioRepository = usuarioRepository ??
                throw new ArgumentNullException(nameof(usuarioRepository));
        }

        public async Task<IEnumerable<Usuario>> ListarUsuario()
        {
            return await _usuarioRepository.ListarUsuario();
        }

        public async Task<bool> AddUsuario(Usuario usuario)
        {
            bool emailValido = ValidarEmail(usuario.Email);

            bool dataNascValida = ValidarDataNascimento(usuario.DataNascimento);

            if (!emailValido)
            {
                throw new Exception("Email Inválido!");
            }
            else if(!dataNascValida)
            {
                throw new Exception("Data de Nascimento deve ser maior que hoje!");
            }
            else
            {
                await _usuarioRepository.AddUsuario(usuario);
            }

            return true;
        }

        public async Task<bool> UpdateUsuario(Usuario usuario)
        {
            await _usuarioRepository.UpdateUsuario(usuario);

            return true;
        }

        public async Task<bool> DeleteUsuario(int id)
        {
            await _usuarioRepository.DeleteUsuario(id);

            return true;
        }

        private bool ValidarEmail(string email)
        {
            try
            {
                var addr = new MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        private bool ValidarDataNascimento(DateTime dataNascimento)
        {
            return !(dataNascimento > DateTime.Now);
        }
    }
}
