using AutoMapper;
using EnglishCollector.DataAccessLayer.Interfaces;
using EnglishCollector.DataLogicLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.Services
{
    public class Service : IService
    {
        protected IUnitOfWork _unitOfWork { get; set; }
        protected IMapper _mapper { get; set; } 

        public Service(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

    }
}
