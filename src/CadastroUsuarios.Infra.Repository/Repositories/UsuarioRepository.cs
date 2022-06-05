using AutoMapper;
using CadastroUsuarios.Domain.Configuracoes;
using CadastroUsuarios.Domain.Models;
using CadastroUsuarios.Domain.Repositories;
using CadastroUsuarios.Infra.Repository.Context;
using CadastroUsuarios.Infra.Repository.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CadastroUsuarios.Infra
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly IMapper _mapper;
        private readonly Connections _connections;

        public UsuarioRepository(IMapper mapper, Connections connections)
        {
            this._mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

            this._connections = connections ?? throw new ArgumentNullException(nameof(connections));
        }

        public async Task<IEnumerable<Usuario>> ListarUsuario()
        {
            IEnumerable<UsuarioDto> usuariosDto;

            using (var db = new UsuarioContext(_connections))
            {
                usuariosDto = db.TB_USUARIOS.ToList();
            }

            return _mapper.Map<IEnumerable<Usuario>>(usuariosDto);
        }

        public async Task AddUsuario(Usuario usuario)
        {
            UsuarioDto usuarioDto = _mapper.Map<UsuarioDto>(usuario);

            using (var db = new UsuarioContext(_connections))
            {
                db.TB_USUARIOS.Add(usuarioDto);
                db.SaveChanges();
            }
        }

        public async Task UpdateUsuario(Usuario usuario)
        {
            UsuarioDto usuarioDto = _mapper.Map<UsuarioDto>(usuario);

            using (var db = new UsuarioContext(_connections))
            {
                db.TB_USUARIOS.Update(usuarioDto);
                db.SaveChanges();
            }
        }

        public async Task DeleteUsuario(int id)
        {
            using (var db = new UsuarioContext(_connections))
            {
                db.TB_USUARIOS.Remove(db.TB_USUARIOS.Find(id));
                db.SaveChanges();
            }
        }
    }
}
