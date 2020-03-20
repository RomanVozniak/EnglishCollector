import { FETCH_GET_VOCABULARY, FETCH_CREATE_VOCAB, FETCH_UPDATE_VOCAB, FETCH_DELETE_VOCAB, FETCH_GET_CARDS, FILTER_VOCABULARY } from './../actions/vocabulary'
import { FETCH_DELETE_CARD } from './../actions/cards'

const initState = {
    vocabulary: [
        {"id":10000,"orderId":null,"phrase":"Hello1","translation":"дисперсія1","description":"","statusId":1,"importanceId":2,"complexityId":2,"successCount":0,"failCount":0,"cardId":10,"card":null,"created":"2020-02-18T21:25:26.6058902","lastOpening":"2020-02-18T21:25:26.6058932"},
        {"id":10001,"orderId":null,"phrase":"Hello2","translation":"дисперсія2","description":"","statusId":1,"importanceId":2,"complexityId":2,"successCount":0,"failCount":0,"cardId":10,"card":null,"created":"2020-02-18T21:25:26.6058902","lastOpening":"2020-02-18T21:25:26.6058932"},
        {"id":10002,"orderId":null,"phrase":"Hello2","translation":"дисперсія3","description":"","statusId":1,"importanceId":2,"complexityId":2,"successCount":0,"failCount":0,"cardId":10,"card":null,"created":"2020-02-18T21:25:26.6058902","lastOpening":"2020-02-18T21:25:26.6058932"}
    ],
    vocabularyFilter: {
        applyFilter: false,
        cardId: 0,
        statusId: 0,
        importanceId: 0,
        complexityId: 0
    },
    fetched: false,
    cards: [],
    importance: [
        {"title":"low",value:1},
        {"title":"normal",value:2},
        {"title":"height",value:3}
    ],
    complexity: [
        {"title":"easy",value:1},
        {"title":"normal",value:2},
        {"title":"hard",value:3}
    ],
    status: [
        {"title":"ready to start",value:1},
        {"title":"in progress",value:2},
        {"title":"completed",value:3}
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_GET_VOCABULARY:
            return {
                ...state,
                vocabulary: action.vocabulary,
                fetched: true
            }
        case FETCH_CREATE_VOCAB:
            return {
                ...state,
                vocabulary: addVocab(state, action.vocab)
            }
        case FETCH_UPDATE_VOCAB:
            return {
                ...state,
                vocabulary: updateVocab(state, action.vocab)
            }
        case FETCH_DELETE_VOCAB:
            return {
                ...state,
                vocabulary: deleteVocab(state, action.id)
            }
        case FETCH_GET_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        case FILTER_VOCABULARY:
            return {
                ...state,
                vocabularyFilter: action.vocabularyFilter
            }
        case FETCH_DELETE_CARD:
            return {
                ...state,
                cards: deleteCard(state, action.id)
            }
        default:
            return state
    }
}

export default rootReducer;

// EXPORT FUNCTIONS
export const getVocabulary = (state) => {
    let filteredVocabulary = state.vocabulary.filter(item => {
        if(state.vocabularyFilter.applyFilter){
            let allowByCard = true;
            let allowByStatus = true;
            let allowByImportance = true;
            let allowByComplexity = true;

            if(state.vocabularyFilter.cardId != 0){
                allowByCard = item.cardId == state.vocabularyFilter.cardId;
            }
            if(state.vocabularyFilter.statusId){
                allowByStatus = item.statusId >= state.vocabularyFilter.statusId;
            }
            if(state.vocabularyFilter.importanceId){
                allowByImportance = item.importanceId >= state.vocabularyFilter.importanceId;
            }
            if(state.vocabularyFilter.complexityId){
                allowByComplexity = item.complexityId >= state.vocabularyFilter.complexityId;
            }
            return allowByCard && allowByStatus && allowByImportance && allowByComplexity
        } 
        else {
            return item;
        }
    })

    return filteredVocabulary;
}

export const getCards = (state) => {
    return state.cards;
}

// INNER FUNCTION
function updateVocab(state, vocab){
    let newVocabulary = state.vocabulary.filter(item => {
        if(item.id === vocab.id){
            return vocab;
        } else {
            return item;
        }
    })
    return newVocabulary;
}

function deleteVocab(state, id) {
    let newVocabulary = state.vocabulary.filter(vocab => {
        return vocab.id !== id;
    })
    return newVocabulary;
}

function deleteCard(state, id) {
    let newCards = state.cards.filter(card => {
        return card.id !== id;
    })
    return newCards;
}

function addVocab(state, vocab){
    return [vocab, ...state.vocabulary];
}