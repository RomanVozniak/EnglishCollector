// react, redux
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchImportVocabulary, fetchGetVocabulary, fetchGetCards} from './../../actions/vocabulary'
// other
import { Button, Input, Label } from 'reactstrap';
import { convertToSelectOptions } from '../../js/globalJs'
// components
import { Select } from '../common/Select'


const inputCard = {
    width: "200px"
}

class VocabularyImport extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            import_string: "",
            cardId: null,
            newCardName: ""
        }
    }

    componentDidMount(){
        if(!this.props.fetched){
            this.props.fetchGetCards();
            this.props.fetchGetVocabulary();
        }
    }

    importRememberryJson = () => {
        if(this.state.cardId  || this.state.newCardName){
            let rememberry_json = ""
            if(this.state.import_string){
                rememberry_json = JSON.parse(this.state.import_string)
            }
            
            let data = {
                rememberryData: rememberry_json,
                cardId: this.state.cardId,
                newCardName: this.state.newCardName,
            }
            fetchImportVocabulary(data);
        } else {
            alert("Card is not selected");
        }
        
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render(){
        const cardsOptions = convertToSelectOptions(this.props.cards, 'title', 'id');

        return <React.Fragment>
            <div className="section">
                <Select id="cardId" 
                    name="cardId"
                    options={cardsOptions}
                    value={this.state.cardId}
                    label={"Card"} 
                    allowSelectOne={false}
                    onChange={this.handleInputChange} 
                    className={{width:"25%",float:"left", paddingRight:"10px"}} />

                <span>
                    <Label for="new-card-name" sm={2}>New card name</Label>
                    <Input type="text"
                        id="new-card-name" 
                        name="newCardName"
                        style={inputCard}
                        onChange={this.handleInputChange}/>
                </span>
                

                <Button className="without-label-align" onClick={this.importRememberryJson}>Import</Button>
            </div>
            <div className="section">
                <textarea id="import_string" 
                    name="import_string"
                    className="import-rememberry-json" 
                    onChange={this.handleInputChange}/>
            </div>
        </React.Fragment>
    }   
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        fetched: state.fetched
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchGetVocabulary: fetchGetVocabulary,
    fetchGetCards: fetchGetCards
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyImport);