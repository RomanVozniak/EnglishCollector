using EnglishCollector.Communication;
using EnglishCollector.DataAccessLayer.Interfaces;
using EnglishCollector.DataAccessLayer.Models;
using EnglishCollector.DataLogicLayer.DTO;
using EnglishCollector.DataLogicLayer.FunctionsModels;
using EnglishCollector.DataLogicLayer.Interfaces;
using EnglishCollector.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.Services
{
    public class CardService : Service, ICardService
    {
        public CardService(IUnitOfWork unitOfWork): base(unitOfWork)
        {

        } 

        public CardResponse CreateCard(CardDAL card)
        {
            string message = FuncCard.ValidateCard(card);
            if (message != null)
            {
                return new CardResponse(message);
            }
            try
            {
                if(!FB.IsNothing(_unitOfWork.CardRepository.FindByName(card.Title))) {
                    return new CardResponse($"Card ({card.Title}) already exists");
                }
                _unitOfWork.CardRepository.Create(card);
                _unitOfWork.Save();
                return new CardResponse(card);
            }
            catch (Exception ex)
            {
                return new CardResponse($"Card save error: {ex.Message}");
            }
        }

        public CardResponse DeleteCard(int id)
        {
            try
            {
                CardDAL existingCard = _unitOfWork.CardRepository.FindById(id);
                if (existingCard == null)
                {
                    return new CardResponse("Card delete error: Card not found");
                }
                _unitOfWork.CardRepository.Delete(existingCard);
                _unitOfWork.Save();

                return new CardResponse(existingCard);
            }
            catch (Exception ex)
            {
                return new CardResponse($"Card save error: {ex.Message}");
            }
        }

        public IQueryable<CardDAL> GetAll()
        {
            IQueryable<CardDAL> cards = _unitOfWork.CardRepository.GetAll();
            return cards;
        }

        public CardResponse GetCard(int id)
        {
            CardDAL card = _unitOfWork.CardRepository.FindById(id);
            return new CardResponse(card);
        }

        public CardResponse UpdateCard(CardDAL card)
        {
            string message = FuncCard.ValidateCard(card);
            if (message != null)
            {
                return new CardResponse(message);
            }
            try
            {
                CardDAL existingCard = _unitOfWork.CardRepository.FindById(card.Id);
                if (existingCard == null)
                    return new CardResponse("Card not found");

                existingCard = FuncCard.UpdateCard(existingCard, card);
                _unitOfWork.CardRepository.Update(existingCard);
                _unitOfWork.Save();

                return new CardResponse(existingCard);
            }
            catch (Exception ex)
            {
                return new CardResponse($"Card update error: { ex.Message }");
            }
        }
    }
}
