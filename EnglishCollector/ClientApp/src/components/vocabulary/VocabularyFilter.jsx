// react, redux
import React from 'react'
import { connect } from 'react-redux'
import { filterVocabularyAction } from '../../actions/vocabulary'
// other
import { Table, Button } from 'reactstrap'
import { convertToSelectOptions } from '../../js/globalJs'
// css
import './../../css/default.css'
// components
import { Select } from '../common/Select'


class VocabularyFilter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vocabularyFilter: this.props.vocabularyFilter
        }
    }

    onSave = () => {
        if(this.isChanged){
            let newVocabularyFilter = this.props.vocabularyFilter;
            newVocabularyFilter.cardId = this.state.vocabularyFilter.cardId;
            newVocabularyFilter.statusId = this.state.vocabularyFilter.statusId;
            newVocabularyFilter.importanceId = this.state.vocabularyFilter.importanceId;
            newVocabularyFilter.complexityId = this.state.vocabularyFilter.complexityId;
            newVocabularyFilter.applyFilter = true;
            this.props.filterVocabulary(newVocabularyFilter);
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.isChanged = true;
        let updated_filter = this.state.vocabularyFilter;
        updated_filter[name] = value;

        this.setState({ vocabularyFilter: updated_filter });
    }

    render(){
        const cardsOptions = convertToSelectOptions(this.props.cards, 'title', 'id');
        const statusOptions = convertToSelectOptions(this.props.status, 'title', 'value');
        const importanceOptions = convertToSelectOptions(this.props.importance, 'title', 'value');
        const complexityOptions = convertToSelectOptions(this.props.complexity, 'title', 'value');

        const { cardId, statusId, importanceId, complexityId } = this.state.vocabularyFilter;

        return <React.Fragment>
            <Table borderless className="section-shadow">
                <tbody>
                    <tr>
                        <td></td>
                        <td colSpan="2">
                            <Select id="cardId" 
                                options={cardsOptions}
                                value={cardId}
                                label={"Card"} 
                                allowSelectOne={true}
                                onChange={this.handleInputChange} 
                                className={{width:"25%",float:"left", paddingRight:"10px"}} /> 

                            <Select id="statusId" 
                                options={statusOptions} 
                                value={statusId} 
                                label={"Status"} 
                                onChange={this.handleInputChange} 
                                className={{width:"25%",float:"left", paddingRight:"10px"}} />

                            <Select id="importanceId" 
                                options={importanceOptions} 
                                value={importanceId}
                                label={"Importance"} 
                                onChange={this.handleInputChange} 
                                className={{width:"25%",float:"left", paddingRight:"10px"}} />

                            <Select id="complexityId" 
                                options={complexityOptions} 
                                value={complexityId} 
                                label={"Complexity"} 
                                onChange={this.handleInputChange} 
                                className={{width:"25%",float:"left"}} />
                        </td>
                        <td>
                            <Button style={{marginTop: "37px"}} onClick={this.onSave}>Filter</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    }
}

const mapeStateToProps = (state, ownProps) => {
    return {
        cards: state.cards,
        importance: state.importance,
        complexity: state.complexity,
        status: state.status,
        vocabularyFilter: state.vocabularyFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterVocabulary: (vocabularyFilter) => {
            dispatch(filterVocabularyAction(vocabularyFilter))
        }
    }
}

export default connect(mapeStateToProps, mapDispatchToProps)(VocabularyFilter)