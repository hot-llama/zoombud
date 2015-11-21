MenuForm = React.createClass({

    getInitialState() {
      return { value: "fail" };
    },


    _onChangeHandler(e) {
      var self = this;
      this.setState({value: e.target.value}, function(){
        self.props.onValueChange(self.state.value);
      });
    },

    render() {
        return (
            <select className="menu-select" onChange={this._onChangeHandler} value={this.state.value}>
                {this.props.dataPrice.map(function (result, id) {
                   return <option key={id}>{result[0]} / {result[1]} (g)</option>
                })}
            </select>
        )
    }
})
