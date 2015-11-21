MenuList = React.createClass({
    render() {
        return (
            <div className="list">
            {this.props.menu.map(function (result, id) {
                return <MenuItem key={id} data={result} />
            })}
            </div>
        )
    }
})