using CadastroUsuarios.Domain.Repositories;
using CadastroUsuarios.Infra;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class InfraRepositoryServiceCollection
    {
        public static IServiceCollection AddInfraRepository(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddScoped<IUsuarioRepository, UsuarioRepository>();

            return services;
        }
    }
}
