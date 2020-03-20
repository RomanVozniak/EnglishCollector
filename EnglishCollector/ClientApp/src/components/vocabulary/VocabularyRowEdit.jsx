// react, redux
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUpdateVocab } from './../../actions/vocabulary'
// other
import { Input } from 'reactstrap'
import { convertToSelectOptions } from '../../js/globalJs'
import { MdDone } from 'react-icons/md'
// components
import { Select } from '../common/Select'


class VocabularyRowEdit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vocab: this.props.vocab
        }
        this.isChanged = false;
        this.cardsOptions = convertToSelectOptions(this.props.cards, 'title', 'id');
        this.statusOptions = convertToSelectOptions(this.props.status, 'title', 'value');
        this.importanceOptions = convertToSelectOptions(this.props.importance, 'title', 'value');
        this.complexityOptions = convertToSelectOptions(this.props.complexity, 'title', 'value');

        this.onSave = this.onSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSave() {
        if(this.isChanged){
            this.props.fetchUpdateVocab(this.state.vocab);
        }
        this.props.onSwitchView();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.isChanged = true;
        let updated_vocab = this.state.vocab;
        updated_vocab[name] = value;

        this.setState({ vocab: updated_vocab });
    }

    render(){
        const vocab = this.state.vocab;
        const phrase = vocab ? vocab.phrase : null;
        const translation = vocab ? vocab.translation : null;
        const description = vocab ? vocab.description : null;
        const cardId = vocab ? vocab.cardId : null;
        const statusId = vocab ? vocab.statusId : null;
        const importanceId = vocab ? vocab.importanceId : null;
        const complexityId = vocab ? vocab.complexityId : null;

        return <React.Fragment>
            <tr>
                <td>{this.props.index}</td>
                <td><Input type="text" name="phrase" value={vocab.phrase} placeholder="phrase" onChange={this.handleInputChange} /></td>
                <td><Input type="text" name="translation" value={vocab.translation} placeholder="translation" onChange={this.handleInputChange} /></td>
                <td>
                    <span className="icon-separate"><MdDone onClick={this.onSave}/></span>
                </td>
            </tr>
            <tr>
                <td></td>
                <td colSpan="2"><Input type="text" name="description" value={vocab.description} placeholder="description" onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
                <td></td>
                <td colSpan="2">
                    <Select id="cardId" options={this.cardsOptions} value={vocab.cardId} label={"Card"} onChange={this.handleInputChange} className={{width:"25%",float:"left", paddingRight:"10px"}} />
                    <Select id="statusId" options={this.statusOptions} value={vocab.statusId} label={"Status"} onChange={this.handleInputChange} className={{width:"25%",float:"left", paddingRight:"10px"}} />
                    <Select id="importanceId" options={this.importanceOptions} value={vocab.importanceId} label={"Importance"} onChange={this.handleInputChange} className={{width:"25%",float:"left", paddingRight:"10px"}} />
                    <Select id="complexityId" options={this.complexityOptions} value={vocab.complexityId} label={"Complexity"} onChange={this.handleInputChange} className={{width:"25%",float:"left"}} />
                </td>
            </tr>
        </React.Fragment>
    }
}

const mapeStateToProps = (state, ownProps) => {
    return {
        vocab: state.vocabulary.find(vocab => vocab.id === ownProps.id),
        cards: state.cards,
        importance: state.importance,
        complexity: state.complexity,
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchUpdateVocab: fetchUpdateVocab
}, dispatch)

export default connect(mapeStateToProps, mapDispatchToProps)(VocabularyRowEdit)