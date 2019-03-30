class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this.options = [];
    for(let i=1; i<=10; i++)
      this.options.push(i);
    this.setValue = this.setValue.bind(this);
  }
  setValue(value) {
    this.setState({value});
  }
  render() {
    return (
      <div>
        <Select options={this.options} setValue={this.setValue}/> <br />
        You select "{this.state.value}"
      </div>
    );
  }
}