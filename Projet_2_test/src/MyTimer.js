import {Component} from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.timer = 0;
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        console.log('La création du composant a eu lieu');
    }

    componentWillMount(){
        this.timer = setTimeout(() => {
            this.setState({
                time: new Date()
            });
            this.componentWillMount();
            console.log("un update a eu lieu");
        }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    
    render() {
        return this.state.time.toLocaleTimeString();
    }
}

export default Timer;