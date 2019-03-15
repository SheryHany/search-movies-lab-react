import MovieCard from "./Card";
import { listenerCount } from "events";

indexedDB.js
ReactDOM.render(<App />, document.getElementById('root'));

app.js
const app = (props => <MovieList data={data} />);

Card.js
class myCard extends React.Component{
    render(){
        const {Title, Poster, Type} = props;
        return(
            <>
            <p>{Title}</p>
            <p>{Type}</p>
            <p>{Poster}</p>
            </>
        )
    }
}

list.js
// const myFunc = ({data}) => data.map(a => <MyCard key={a.Poster} data={...a}/>);
class myList extends React.Component{
    constructor(props){
        super(props);
        this.myOnChange = this.myOnChange.bind(this);
        this.state = {
            currentData: this.props.data
        }
    }
    
    myOnChange(event){
        const txt = event.target.value;
        /*ana mskt elfilter bl array props 34an lw msktha bl currentData awl mara 3mlt fiha 
        filter lw et3'ayart w ba2o 2 element bs gowa el array tani mara hay3ml filter
        3la el 2 elements dol bs w elba2i hayter*/
        const myFilter = this.props.data.filter(a => a.Title.ToLowerCase().includes(txt));
        this.setState({currentData: myFilter});
        // this.state.currentData = myFilter
    }

    render(){
        return(
            <>
            <input type="text" placeholder="Search.." onChange={this.myOnChange}/>
            this.state.currentData.map(a => <MyCard key={a.id} data={...a}/>)
            </>
        )
    }
}
