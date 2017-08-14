import React from 'react';

export default class Loader extends React.Component {
    render() {
        return(
            <div className="loader_wrapper inner align-items-center text-center">
                <div className="load7 load-wrapper">
                    <div className="loading_img"></div>
                    <div className="loader"> Loading... </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
