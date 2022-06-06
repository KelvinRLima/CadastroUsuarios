﻿using AutoMapper;
using CadastroUsuarios.Domain.Models;
using CadastroUsuarios.Domain.Services;
using CadastroUsuarios.WebApi.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CadastroUsuarios.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        private readonly IMapper _mapper;

        public UsuarioController(IUsuarioService usuarioService, IMapper mapper)
        {
            this._usuarioService = usuarioService ??
                throw new ArgumentNullException(nameof(usuarioService));

            this._mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
        }

        // GET: api/<UsuarioController>
        [HttpGet("GetAll")]
        [ProducesResponseType(typeof(IEnumerable<UsuarioGetAllResult>), 200)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                Result<IEnumerable<Usuario>> result = await _usuarioService.ListarUsuario();

                Result<IEnumerable<UsuarioGetAllResult>> resultApi =
                    new Result<IEnumerable<UsuarioGetAllResult>>
                    {
                        Message = result.Message,
                        Status = result.Status
                    };

                if (result.Status)
                {
                    resultApi.Data = _mapper.Map<IEnumerable<UsuarioGetAllResult>>(result.Data);
                }

                return Ok(resultApi);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // POST: api/<UsuarioController>
        [HttpPost("Add")]
        [ProducesResponseType(typeof(bool), 200)]
        public async Task<IActionResult> Add([FromBody] Usuario usuario)
        {
            try
            {
                Result<bool> result = await _usuarioService.AddUsuario(usuario);

                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT: api/<UsuarioController>
        [HttpPut("Update")]
        [ProducesResponseType(typeof(bool), 200)]
        public async Task<IActionResult> Update([FromBody] Usuario usuario)
        {
            try
            {
                Result<bool> result = await _usuarioService.UpdateUsuario(usuario);

                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // DELETE: api/<UsuarioController>
        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(typeof(bool), 200)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                Result<bool> result = await _usuarioService.DeleteUsuario(id);

                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
