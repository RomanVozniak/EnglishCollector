import React from 'react'
import { connect } from 'react-redux'
import { fetchDeleteCard } from '../../actions/cards'
import { MdDone } from 'react-icons/md';
import { MdClear } from 'react-icons/md';
import { MdModeEdit } from "react-icons/md";
import { bindActionCreators } from 'redux';

class CardRowDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    onDelete = () => {
        let id = this.props.card.id;
        this.props.fetchDeleteCard(id);
    }

    render(){
        const card = this.props.card;
        const index = this.props.index;
        const cardVocabulry = this.props.cardVocabulry;
        const count = cardVocabulry.length;

        return <tr>
            <td title={card.id}>{index}</td>
            <td>{card.title}</td>
            <td>{card.description}</td>
            <td>{count}</td>
            <td>
                <span className="icon-separate"><MdModeEdit onClick={this.props.onEditMode}/></span>
                <span className="icon-separate"><MdClear onClick={this.onDelete}/></span>
            </td>
        </tr>
    }
}

const mapeStateToProps = (state, ownProps) => {
    return {
        card: state.cards.find(card => card.id === ownProps.id),
        cardVocabulry: state.vocabulary.filter(vocab => {
            if(vocab.cardId === ownProps.id){
                return vocab;
            }
        })
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchDeleteCard: fetchDeleteCard
}, dispatch);

export default connect(mapeStateToProps, mapDispatchToProps)(CardRowDisplay);