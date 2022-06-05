using AutoMapper;
using CadastroUsuarios.Domain.Models;
using CadastroUsuarios.WebApi.Dtos;

namespace CadastroUsuarios.WebApi
{
    public class WebApiMapperProfile : Profile
    {
        public WebApiMapperProfile()
        {
            CreateMap<Usuario, UsuarioGetAllResult>();
        }
    }
}
