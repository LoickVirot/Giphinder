import React from 'react';
import GifItem from "../containers/GifItem";

class GridLayout extends React.Component {

    renderGifs(gif) {
        return (
            <GifItem gif={gif} key={gif.id}/>
        );
    };

    render() {

        if (!this.props.items) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        let i = 0;
        let gifs = [[], [], [], []];
        this.props.items.map(item => {
            gifs[i].push(item);
            i >= 3 ? i = 0 : i++;
            return true;
        });

        return (
            <div className="grid-layout row">
                <div className="col-md-3">
                    {gifs[0].map(this.renderGifs)}
                </div>
                <div className="col-md-3">
                    {gifs[1].map(this.renderGifs)}
                </div>
                <div className="col-md-3">
                    {gifs[2].map(this.renderGifs)}
                </div>
                <div className="col-md-3">
                    {gifs[3].map(this.renderGifs)}
                </div>
            </div>
        );
    }
}

export default GridLayout;