import React from 'react'
import { Input, Label } from 'reactstrap';

export class Select extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let label = this.props.label;
        let options = this.props.options;
        let value = this.props.value;
        let id = this.props.id;

        if(options == null){
            return <Label>{label}</Label>
        } else {
            return <React.Fragment>
                <Label for={id} sm={2}>{label}</Label>
                <Input type="select" 
                    id={id} name={id} 
                    value={this.props.value} 
                    onChange={this.props.onChange} 
                    >
                    {options.map(function(option){
                        return <option value={option.value} key={id + "_" + option.value}>
                                {option.label}
                            </option>
                    })}
                </Input>
            </React.Fragment>
        }
    }
}