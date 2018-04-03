import React from 'react';
import ReactDOM from 'react-dom';


class ToggleVis extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVis = this.handleToggleVis.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVis() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVis} >
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et augue ut lorem elementum mattis a nec ligula. Nunc ac suscipit ex. Integer tempor nisi eget mattis rhoncus. Nullam molestie interdum augue quis mollis. Quisque vulputate dignissim nunc, ut rhoncus ipsum auctor id. Nam sed varius mauris, in molestie arcu. Donec a consectetur arcu. Curabitur vel efficitur eros. Aliquam est lacus, tincidunt venenatis metus vitae, imperdiet pharetra erat. Ut eros nisl, sollicitudin ac orci placerat, congue ultrices justo. Nulla vel odio nec tellus porta molestie. Nulla venenatis efficitur mauris quis pretium. Quisque iaculis erat nibh, sed mattis odio malesuada sed. Ut vitae rutrum metus, sed tristique dui. Nam venenatis tempor euismod. Proin non ligula nec mauris semper lacinia ut ut ex.
                    </p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<ToggleVis />, document.getElementById('root'));

// let details;
// let visbility = false;

// const toggleVis = () => {
//     visbility = !visbility;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVis}>
//                 {visbility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visbility && (
//                 <div>
//                     <p>Some Text</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('root'));
// }