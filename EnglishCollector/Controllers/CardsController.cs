using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EnglishCollector.Communication;
using EnglishCollector.DataAccessLayer.Models;
using EnglishCollector.DataLogicLayer.DTO;
using EnglishCollector.DataLogicLayer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EnglishCollector.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController : ControllerBase
    {
        private readonly ICardService _cardService;
        private IMapper _mapper { get; set; }

        public CardsController(ICardService cardService)
        {
            _cardService = cardService;
            _mapper = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<CardDAL, CardDTO>();
                cfg.CreateMap<CardDTO, CardDAL>();
                cfg.CreateMap<VocabularyDAL, VocabularyDTO>();
                cfg.CreateMap<VocabularyDTO, VocabularyDAL>();
            }).CreateMapper();
        }

        [HttpGet]
        public IEnumerable<CardDTO> Get()
        {
            IEnumerable<CardDTO> cards = _mapper.Map<IEnumerable<CardDTO>>(_cardService.GetAll());
            return cards;
        }

        [Route("/api/cards/get/{id}")]
        [HttpGet]
        public IActionResult Get([FromRoute] int id)
        {
            CardResponse response = _cardService.GetCard(id);

            if (response.Success)
            {
                return Ok(response.Card);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }

        [Route("/api/{controller}/add")]
        [HttpPost]
        public IActionResult Add([FromBody] CardDTO card)
        {
            CardDAL cardDAL = _mapper.Map<CardDAL>(card);
            CardResponse response = _cardService.CreateCard(cardDAL);

            if (response.Success)
            {
                return Ok(response.Card);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }

        [Route("/api/{controller}/update")]
        [HttpPost]
        public IActionResult Update([FromBody] CardDTO card)
        {
            CardDAL cardDAL = _mapper.Map<CardDAL>(card);
            CardResponse response = _cardService.UpdateCard(cardDAL);

            if (response.Success)
            {
                return Ok(response.Card);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }

        [Route("/api/{controller}/delete/{id}")]
        [HttpDelete]
        public IActionResult Delete([FromRoute] int id)
        {
            CardResponse response = _cardService.DeleteCard(id);

            if (response.Success)
            {
                return Ok(response.Card);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }
    }
}