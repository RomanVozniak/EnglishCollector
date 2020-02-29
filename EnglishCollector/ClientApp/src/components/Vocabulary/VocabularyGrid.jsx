import React from 'react'
import { VocabularyTable } from './VocabularyTable';
import { api, convertToSelectOptions, test } from '../../js/globalJs'


export class VocabularyGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            filter: { },
            vocabulary: null,
            cards: null,
            cardId: null
        }

        this.loadVocabulary = this.loadVocabulary.bind(this);
        this.loadcards = this.loadcards.bind(this);
    }

    render(){
        return <React.Fragment>
            <VocabularyTable 
                vocabulary={this.state.vocabulary}
                cards={this.state.cards}
                onSave={() => this.loadVocabulary2()}/>
        </React.Fragment>
    }


    componentWillMount(){
        Promise.all([this.loadVocabulary(), this.loadcards()])
            .then(([_vocabulary, _cards]) => {
                this.setState({
                    vocabulary: _vocabulary,
                    cards: _cards
                });
            });
    }

    loadVocabulary(){
        return fetch(api.vocabulary.getVocabulary + "?" + "cardId=" + this.state.cardId)
            .then(function (response) {
                return response.json();
            })
            .then(function(data){
                return data;
            });
    }

    loadcards() {
        return fetch(api.cards.getCards)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    alert(api.cards.getCards + ": " + response.status);
                    return null;
                }
            });
    }
}