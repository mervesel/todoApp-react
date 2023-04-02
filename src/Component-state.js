var root = ReactDOM.createRoot(document.getElementById("root"));

class User extends React.Component{
    constructor(props){
        super(props);
        this.changeEmail=this.changeEmail.bind(this);

        this.state={
            name:"Merve Selçukoğlu",
            email:"merve@gmail.com"
        }
    }
    changeEmail(){
        
        this.setState({
            name:"Merve Sel",
            email:"merve-sel@outlook.com"
        })

    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.email}</p>
                <button onClick={this.changeEmail}>Change</button>

            </div>
        );
    }
}

root.render(<User />);
