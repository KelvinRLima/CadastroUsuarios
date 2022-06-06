using CadastroUsuarios.Domain.Models;
using CadastroUsuarios.Domain.Repositories;
using CadastroUsuarios.Domain.Services;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;

namespace CadastroUsuarios.Application
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            this._usuarioRepository = usuarioRepository ??
                throw new ArgumentNullException(nameof(usuarioRepository));
        }

        public async Task<Result<IEnumerable<Usuario>>> ListarUsuario()
        {
            var result = new Result<IEnumerable<Usuario>>();

            try
            {
                result.Data = await _usuarioRepository.ListarUsuario();
            }
            catch (Exception ex)
            {
                result = new Result<IEnumerable<Usuario>>()
                {
                    IsException = true,
                    Status = false,
                    Message = "Falha ao consultar usuários: " + ex.Message
                };
            }
            return result;
        }

        public async Task<Result<bool>> AddUsuario(Usuario usuario)
        {
            var result = new Result<bool>();

            try
            {
                bool emailValido = ValidarEmail(usuario.Email);

                bool dataNascValida = ValidarDataNascimento(usuario.DataNascimento);

                if (!emailValido)
                {
                    throw new Exception("Email Inválido!");
                }
                else if (!dataNascValida)
                {
                    throw new Exception("Data de Nascimento deve ser maior que hoje!");
                }
                else
                {
                    await _usuarioRepository.AddUsuario(usuario);
                }

                result.Data = true;
                result.Message = "Usuário adicionado com sucesso!";
            }
            catch (Exception ex)
            {
                result = new Result<bool>()
                {
                    IsException = true,
                    Status = false,
                    Message = ex.Message
                };
            }

            return result;
        }

        public async Task<Result<bool>> UpdateUsuario(Usuario usuario)
        {
            var result = new Result<bool>();

            try
            {
                await _usuarioRepository.UpdateUsuario(usuario);

                result.Data = true;
                result.Message = "Usuário atualizado com sucesso!";
            }
            catch (Exception ex)
            {
                result = new Result<bool>()
                {
                    IsException = true,
                    Status = false,
                    Message = ex.Message
                };
            }

            return result;
        }

        public async Task<Result<bool>> DeleteUsuario(int id)
        {
            var result = new Result<bool>();

            try
            {
                await _usuarioRepository.DeleteUsuario(id);

                result.Data = true;
                result.Message = "Usuário excluído com sucesso!";
            }
            catch (Exception ex)
            {
                result = new Result<bool>()
                {
                    IsException = true,
                    Status = false,
                    Message = ex.Message
                };
            }

            return result;
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
