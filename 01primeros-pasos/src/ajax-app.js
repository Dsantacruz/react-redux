//Componente ServerInfo
const ServerInfo = React.createClass({
	loadData()
	{
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: (data) => {
				this.setState({data});
			},
			error: (error) => {
				//this.setState({data});
            }
		})
	},
	getInitialState()
	{
		return {
			data: []
		}
	},
	//Cuando el componente se haya montado
	componentDidMount()
	{
		this.loadData();
	},
	render()
	{//console.log(this.state);
		return (
			<ul>
				{this.state.data.map((res) => {
					return <li key={res.id}>{res.name}</li>
				})}
			</ul>
		)
	}
});

const DisplayData = React.createClass({
	render()
	{
		return (
			<ServerInfo url="./data/users.json" />
		)
	}
});

ReactDOM.render(<DisplayData />, document.getElementById('ajax-app'));