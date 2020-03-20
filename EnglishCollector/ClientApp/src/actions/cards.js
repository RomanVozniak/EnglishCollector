import { api } from './../js/globalJs'

export const FETCH_DELETE_CARD = 'FETCH_DELETE_CARD'

export const fetchDeleteCardAction = (id) => {
    return {
        type: FETCH_DELETE_CARD,
        id: id
    }
}

// FUNCTIONS FOR ACTIONS
export const fetchDeleteCard = (id) => {
    return dispatch => {
        fetch(api.cards.deleteCard + id, {
            method: "DELETE"
        })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                dispatch(fetchDeleteCardAction(data.id));
            })
    }
}