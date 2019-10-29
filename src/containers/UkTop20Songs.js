import React, {Component} from 'react';
import SongTable from '../components/SongsTable';

class UkTop20Songs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(songs => this.setState({data: songs.feed.entry}))
        .catch(err => console.error);
    }


    render () {
        console.log(songs)
        return (
            <div>
                <SongTable songs={this.state.data}/>
            </div>
        )
    }

}

export default UkTop20Songs;