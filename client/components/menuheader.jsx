MenuHeader = React.createClass({
    render() {
        return (
            <div className="bar bar-header">
                <button className="button icon ion-navicon"></button>
                <h1 className="title" >Zoombud</h1>
                <UserAccount  />
            </div>
    )
    }
})
