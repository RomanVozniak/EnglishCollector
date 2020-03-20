import React from 'react'
import { Table } from 'reactstrap';
import { CardRow } from './CardRow';

export class CardsTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.cards){ return <React.Fragment /> }

        const cards = this.props.cards;
        const count = this.props.cards.length;
        console.log("cardsTable", cards);

        return <React.Fragment>
            <Table borderless>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(function(row, index){
                        return <CardRow 
                            key={row.id}
                            row={row} 
                            index={count - index}/>
                    })}
                </tbody>
            </Table>
        </React.Fragment>
    }
}