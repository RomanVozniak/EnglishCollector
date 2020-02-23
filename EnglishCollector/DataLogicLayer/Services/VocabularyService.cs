using EnglishCollector.Communication;
using EnglishCollector.DataAccessLayer.Interfaces;
using EnglishCollector.DataAccessLayer.Models;
using EnglishCollector.DataLogicLayer.FunctionsModels;
using EnglishCollector.DataLogicLayer.Interfaces;
using EnglishCollector.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.Services
{
    public class VocabularyService : Service, IVocabularyService
    {
        public VocabularyService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {

        }

        public VocabularyResponse CreateVocabulary(VocabularyDAL vocabulary)
        {
            string message = FuncVocabulary.ValidateVocabulary(vocabulary);
            if (message != null)
            {
                return new VocabularyResponse(message);
            }
            try
            {
                if (!FB.IsNothing(_unitOfWork.VocabularyRepository.FindByPhrase(vocabulary.Phrase))) {
                    return new VocabularyResponse($"Vocabulary ({vocabulary.Id}, {vocabulary.Phrase}) already exists");
                }
                _unitOfWork.VocabularyRepository.Create(vocabulary);
                _unitOfWork.Save();

                return new VocabularyResponse(vocabulary);
            }
            catch(Exception ex)
            {
                return new VocabularyResponse($"Vocabulary save error: {ex.Message}");
            }

        }

        public VocabularyResponse DeleteVocabulary(int id)
        {
            var existingVocabulary = _unitOfWork.VocabularyRepository.FindById(id);
            if (existingVocabulary == null)
                return new VocabularyResponse("Phrase delete error: Phrase not found");

            try
            {
                _unitOfWork.VocabularyRepository.Delete(existingVocabulary);
                _unitOfWork.Save();

                return new VocabularyResponse(existingVocabulary);
            }
            catch(Exception ex)
            {
                return new VocabularyResponse($"Phrase delete error: {ex.Message}");
            }
        }

        public IQueryable<VocabularyDAL> List()
        {
            var vocabularies = _unitOfWork.VocabularyRepository.GetAll().AsQueryable();
            return vocabularies;
        }

        public VocabularyResponse UpdateVocabulary(VocabularyDAL vocabulary)
        {

            string message = FuncVocabulary.ValidateVocabulary(vocabulary);
            if (message != null)
            {
                return new VocabularyResponse(message);
            }
            try
            {
                VocabularyDAL existingVocabulary = _unitOfWork.VocabularyRepository.FindById(vocabulary.Id);
                if (existingVocabulary == null)
                    return new VocabularyResponse("Phrase not found");

                existingVocabulary = FuncVocabulary.UpdateVocabulary(existingVocabulary, vocabulary);
                _unitOfWork.VocabularyRepository.Update(existingVocabulary);
                _unitOfWork.Save();

                return new VocabularyResponse(existingVocabulary);
            }
            catch(Exception ex)
            {
                return new VocabularyResponse($"Task update error: { ex.Message }");
            }
        }


        
    }
}
