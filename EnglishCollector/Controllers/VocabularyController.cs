using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EnglishCollector.DataLogicLayer.DTO;
using EnglishCollector.DataLogicLayer.Interfaces;
using EnglishCollector.DataAccessLayer.Models;
using AutoMapper;
using EnglishCollector.Communication;
using EnglishCollector.Functions;

namespace EnglishCollector.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VocabularyController : ControllerBase
    {
        private readonly IVocabularyService _vocabularyService;
        private readonly ICardService _cardService;
        private  IMapper _mapper { get; set; }

        public VocabularyController(IVocabularyService vocabularyService, ICardService cardService)
        {
            _vocabularyService = vocabularyService;
            _cardService = cardService;
            _mapper = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<VocabularyDTO, VocabularyDAL>();
                cfg.CreateMap<VocabularyDAL, VocabularyDTO>();
                cfg.CreateMap<CardDAL, CardDTO>();
                cfg.CreateMap<CardDTO, CardDAL>();
            }).CreateMapper();
        }
        
        [Route("/api/{controller}")]
        [HttpGet]
        public IEnumerable<VocabularyDTO> Get()
        {
            IEnumerable<VocabularyDTO> vocabularyList = _mapper.Map<IEnumerable<VocabularyDTO>>(_vocabularyService.List());
            return vocabularyList;
        }

        [Route("/api/{controller}/create")]
        [HttpPost]
        public IActionResult Add([FromBody]VocabularyDTO vocabularyDTO)
        {
            VocabularyDAL vocabularyDAL = _mapper.Map<VocabularyDAL>(vocabularyDTO);
            VocabularyResponse response = _vocabularyService.CreateVocabulary(vocabularyDAL);

            if (response.Success)
            {
                return Ok(response.Vocabulary);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }

        [Route("/api/{controller}/update")]
        [HttpPost]
        public IActionResult Update([FromBody]VocabularyDTO vocabularyDTO)
        {
            VocabularyDAL vocabularyDAL = _mapper.Map<VocabularyDAL>(vocabularyDTO);
            VocabularyResponse response = _vocabularyService.UpdateVocabulary(vocabularyDAL);

            if (response.Success)
            {
                return Ok(response.Vocabulary);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }
        [Route("/api/{controller}/delete/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            VocabularyResponse response = _vocabularyService.DeleteVocabulary(id);
            if(response.Success)
            {
                return Ok(response.Vocabulary);
            }
            else
            {
                return BadRequest(response.Message);
            }
        }

        [Route("/api/{controller}/rememberryImport")]
        [HttpPost]
        public IActionResult ImportRememberry([FromBody] ImportVocabularyDTO importVocabularyDTO)
        {
            int? cardId = importVocabularyDTO.cardId;
            RememberryDTO rememberryData = importVocabularyDTO.rememberryData;

            if (!FB.IsNothing(importVocabularyDTO.newCardName))
            {
                CardDTO newCardDTO = new CardDTO();
                newCardDTO.Title = importVocabularyDTO.newCardName;

                CardDAL cardDAL = _mapper.Map<CardDAL>(newCardDTO);
                CardResponse response = _cardService.CreateCard(cardDAL);

                if (response.Success)
                {
                    cardId = response.Card.Id;
                }
                else
                {
                    cardId = null;
                }
            }

            if (!FB.IsNothing(cardId))
            {
                string errorMessages = "";
                foreach (var item in rememberryData.cards)
                {
                    VocabularyDAL vocabularyDAL = new VocabularyDAL();
                    vocabularyDAL.Phrase = item.O;
                    vocabularyDAL.Translation = item.T.First<string>();
                    vocabularyDAL.CardId = cardId;
                    vocabularyDAL.ComplexityId = 2;
                    vocabularyDAL.ImportanceId = 2;

                    VocabularyResponse response = _vocabularyService.CreateVocabulary(vocabularyDAL);
                    if (!response.Success)
                    {
                        errorMessages += response.Message + "\n";
                    }
                }
                if (!FB.IsNothing(errorMessages))
                {
                    return BadRequest(errorMessages);
                }
                else
                {
                    return Ok(rememberryData);
                }
            }
            else
            {
                return BadRequest("Card was not created");
            }
        }
    }
}
