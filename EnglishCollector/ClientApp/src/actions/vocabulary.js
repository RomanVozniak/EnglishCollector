import { api } from './../js/globalJs'

export const FETCH_GET_VOCABULARY = 'FETCH_GET_VOCABULARY'
export const FETCH_CREATE_VOCAB = 'FETCH_CREATE_VOCAB'
export const FETCH_UPDATE_VOCAB = 'FETCH_UPDATE_VOCAB'
export const FETCH_DELETE_VOCAB = 'FETCH_DELETE_VOCAB'
export const FETCH_GET_CARDS = 'FETCH_GET_CARDS'
export const FILTER_VOCABULARY = 'FILTER_VOCABULARY'

export const fetchGetVocabularyAction = (vocabulary) => {
    return {
        type: FETCH_GET_VOCABULARY,
        vocabulary: vocabulary
    }
}

export const fetchUpdateVocabAction = (vocab) => {
    return {
        type: FETCH_UPDATE_VOCAB,
        vocab: vocab
    }
}

export const fetchCreateVocabAction = (vocab) => {
    return {
        type: FETCH_CREATE_VOCAB,
        vocab: vocab
    }
}

export const fetchDeleteVocabAction = (id) => {
    return {
        type: FETCH_DELETE_VOCAB,
        id: id
    }
}

export const fetchGetCardsAction = (cards) => {
    return {
        type: FETCH_GET_CARDS,
        cards: cards
    }
}

export const filterVocabularyAction = (vocabularyFilter) => {
    return {
        type: FILTER_VOCABULARY,
        vocabularyFilter: vocabularyFilter
    }
}

// FUNCTIONS FOR ACTIONS
export const fetchGetVocabulary = () => {
    return dispatch => {
        fetch(api.vocabulary.getVocabulary + "?" + "cardId=")
            .then(function (response) {
                return response.json();
            })
            .then(function(data){
                dispatch(fetchGetVocabularyAction(data));
            });
    }
}

export const fetchCreateVocab = (vocab) => {
    return dispatch => {
        fetch(api.vocabulary.createVocab, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(vocab)
        })
        .then(function(response) {
            if(response.ok){
                return response.json().then(function(data){
                    dispatch(fetchCreateVocabAction(data));
                })
            } else {
                return response.text().then(function(text){
                    alert(text);
                })
            }
        })
    }
}

export const fetchUpdateVocab = (vocab) => {
    return dispatch => {
        fetch(api.vocabulary.updateVocab, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(vocab)
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            dispatch(fetchUpdateVocabAction(data));
        })
    }
}

export const fetchDeleteVocab = (id) => {
    return dispatch => {
        fetch(api.vocabulary.deleteVocab + id, {
            method: "DELETE"
        })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                dispatch(fetchDeleteVocabAction(data.id));
            })
    }
}

export const fetchGetCards = () => {
    return dispatch => {
        fetch(api.cards.getCards)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                dispatch(fetchGetCardsAction(data));
            })
    }
}

export const fetchImportVocabulary = (data) => {
    fetch(api.vocabulary.rememberryImport, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}