import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles'
import axios from 'axios'
import GetUsers from './GetUsers'
import Collection from 'ruby-script'
import '../../css/App.css';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotdog: 0,
            burger: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        if (document.cookie.includes('votes') !== true) {
            document.cookie = 'votes=0; expires=Fri, 19 Aug 2099 23:59:59 GMT'
        }
        if (document.cookie.includes('hotdog') !== true) {
            document.cookie = 'hotdog=0; expires=Fri, 19 Aug 2099 23:59:59 GMT'
        }
        if (document.cookie.includes('burger') !== true) {
            document.cookie = 'burger=0; expires=Fri, 19 Aug 2099 23:59:59 GMT'
        }

        let collection = new Collection(document.cookie.split(';'));
        let hotdog = collection[collection.find_index((s) => {
            return s.includes('hotdog')
        })];
        
       hotdog = parseInt(hotdog ? hotdog.split('=')[1] : 0)
        
       let burger = collection[collection.find_index((s) => {
            return s.includes('burger')
        })];
        
        burger = parseInt(burger ? burger.split('=')[1] : 0)
        
        this.setState({hotdog: hotdog, burger: burger})
    }

    handleClick = (value, url) => {
        let collection = new Collection(document.cookie.split(';'));
        let votes = parseInt(collection[collection.find_index((s) => {
            return s.includes('votes')
        })]);
            
       votes = parseInt(votes ? votes.split('=')[1] : 0)

        if (votes < 3 && url.includes('add')) {
            axios.post(`https://diaper-party.herokuapp.com/${url}`);

            document.cookie = `votes=${votes + 1}; expires=Fri, 19 Aug 2099 23:59:59 GMT`;
            if (value === 'hotdog') {
                document.cookie = `hotdog=${this.state.hotdog + 1}; expires=Fri, 19 Aug 2099 23:59:59 GMT`;
                this.setState({hotdog: this.state.hotdog + 1})
            } else {
                document.cookie = `burger=${this.state.burger + 1}; expires=Fri, 19 Aug 2099 23:59:59 GMT`;
                this.setState({burger: this.state.burger + 1})
            }
        }
        if (votes > 0 && url.includes('subtract')) {
            axios.post(`https://diaper-party.herokuapp.com/${url}`);

            document.cookie = `votes=${votes - 1}; expires=Fri, 19 Aug 2099 23:59:59 GMT`;
            if (value === 'hotdog') {
                document.cookie = `hotdog=${this.state.hotdog - 1}; expires=Fri, 19 Aug 2099 23:59:59 GMT`;
                this.setState({hotdog: this.state.hotdog - 1})
            } else {
                document.cookie = `burger=${this.state.burger - 1}; expires=Fri, 19 Aug 2099 23:59:59 GMT`;
                this.setState({burger: this.state.burger - 1})
            }
        }
    };

    render() {
        return (
            <div className="App" id={"app"}>
                <GetUsers handleClick={this.handleClick} burger={this.state.burger} hotdog={this.state.hotdog}/>
            </div>
        );
    }

}

const styles = {
    paper: {
        padding: '8px',
        margin: '20px'
    }
};

export default withStyles(styles)(App)
