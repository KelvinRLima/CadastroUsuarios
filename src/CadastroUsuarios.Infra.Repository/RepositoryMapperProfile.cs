using AutoMapper;
using CadastroUsuarios.Domain.Models;
using CadastroUsuarios.Infra.Repository.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace CadastroUsuarios.Infra.Repository
{
    public class RepositoryMapperProfile : Profile
    {
        public RepositoryMapperProfile()
        {
            CreateMap<UsuarioDto, Usuario>().ReverseMap();
        }
    }
}
