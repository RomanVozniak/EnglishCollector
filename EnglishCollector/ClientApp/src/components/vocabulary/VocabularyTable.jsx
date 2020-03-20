import React from 'react'
import { Table } from 'reactstrap';
import { VocabularyRow } from './VocabularyRow';

export class VocabularyTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.vocabulary == null){
            return <React.Fragment />
        }

        let cards = this.props.cards;
        let count = this.props.vocabulary.length;

        return <React.Fragment>
            <Table borderless>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Phrase</th>
                        <th>Traslation</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.vocabulary.map(function(row, index){
                        return <VocabularyRow 
                            key={row.id}
                            row={row} 
                            index={count - index} 
                            cards={cards}/>
                    })}
                </tbody>
            </Table>
        </React.Fragment>
    }
}