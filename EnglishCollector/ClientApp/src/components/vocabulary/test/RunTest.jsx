import React from 'react'
import { Button, Table } from 'reactstrap';

const lang_uk = 0;
const lang_en = 1;

export class RunTest extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            isRun: false,
            hideTranlation: true,
            langFirst: lang_uk
        }
        this.counter = 0;
        this.vocabulary = this.props.vocabulary;
    }

    startTest = () => {
        this.setState({
            isRun: true,
            counter: 0
        })
    }

    changeLang = () => {
        let nextLang = (this.state.langFirst == lang_uk ? lang_en : lang_uk);
        this.setState({ langFirst: nextLang });
    }

    render() {
        const { counter, hideTranlation, langFirst } = { ...this.state };
        const { phrase, translation } = { ...this.props.vocabulary[counter] };
        const count = this.props.vocabulary.length;
        const firstWord = (langFirst == lang_uk ? translation : phrase)
        const secondWord = (hideTranlation ? "" : (langFirst == lang_uk ? phrase : translation))

        const nextAction = {
            label: hideTranlation ? "Check" : "Next",
            action: () => {
                if (!hideTranlation) {
                    this.setState({
                        counter: counter + 1,
                        hideTranlation: true
                    });
                } else {
                    this.setState({ hideTranlation: false });
                }
            }
        }

        return <React.Fragment>
            <Table className={"run-test-table"}>
                <thead>
                    <tr>
                        <th><Button onClick={this.startTest}>Start Test</Button></th>
                        <th>{(counter + 1) + ' of ' + count}</th>
                        <th><Button onClick={this.changeLang}>Change Language (current {langFirst == lang_uk ? "uk" : "en"})</Button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="big-text">{firstWord}</td>
                        <td className="big-text">{secondWord}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Button onClick={nextAction.action}>{nextAction.label}</Button></td>
                        <td>{}</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    }
}