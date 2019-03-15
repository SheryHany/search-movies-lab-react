import React from 'react';

import MovieCard from './Card';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.changeTxt = this.changeTxt.bind(this);
        this.radioBtn = this.radioBtn.bind(this);
        this.state = {
            currendData: this.props.data,
            check: ''
        }
    }


    changeTxt(e) {
        let inputTxt = e.target.value;
        let filtered;
        if (this.state.check === 'watched') {
             filtered = this.props.data.filter(a => a.Title.toLowerCase().includes(inputTxt) && a.Watched==='true'); 
        }else{
             filtered = this.props.data.filter(a => a.Title.toLowerCase().includes(inputTxt) && a.Watched==='false');
        }
        this.setState({ currendData: filtered });
    }

    radioBtn(e){
        const check = e.target.value;
        this.setState({check});
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Search.." className="searchBox" onChange={this.changeTxt} />               
                <label><input type="radio" name="optradio" value="watched" onChange={this.radioBtn} />Watched</label>           
                <label><input type="radio" name="optradio" value="unwatched" onChange={this.radioBtn}/>UnWatched</label>               
                {
                    this.state.currendData.map(
                        a => <MovieCard key={a.imdbID} {...a} />
                    )
                }
            </>
                        )
                    }
                }
// const MovieList = ({data}) => data.map(a => <MovieCard key={a.imdbID} {...a} />);
                        
export default MovieList;