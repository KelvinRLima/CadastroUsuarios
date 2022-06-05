using CadastroUsuarios.Domain.Configuracoes;
using CadastroUsuarios.Infra.Repository.Dtos;
using Microsoft.EntityFrameworkCore;
using System;

namespace CadastroUsuarios.Infra.Repository.Context
{
    public class UsuarioContext : DbContext
    {
        private readonly Connections _connections;
        public DbSet<UsuarioDto> TB_USUARIOS { get; set; }

        public UsuarioContext(Connections connections)
        {
            this._connections = connections ??
                throw new ArgumentNullException(nameof(connections));
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connections.ConnectionString);
        }
    }
}
