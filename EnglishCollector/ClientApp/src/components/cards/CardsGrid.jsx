// redux
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetCards, fetchGetVocabulary } from '../../actions/vocabulary'
import { getCards } from '../../reducers/rootReducer'
// components
import { CardsTable } from './CardsTable'

class CardsGrid extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(!this.props.fetched){
            this.props.fetchGetCards();
            this.props.fetchGetVocabulary();
        }
    }

    render(){
        const cards = this.props.cards;
        console.log("cardGrid", cards);

        return <React.Fragment>
            <CardsTable cards={cards}/>
        </React.Fragment>
    }   
}

const mapStateToProps = (state) => {
    return {
        cards: getCards(state),
        fetched: state.fetched
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchGetVocabulary: fetchGetVocabulary,
    fetchGetCards: fetchGetCards
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CardsGrid);