'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return e(
            'button',
            {onClick: () => this.setState({liked: true})},
            'Like');
    }
}

// class ShoppingList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {liked: false};
//     }
//     render() {
//         return (
//             <div className="shopping-list">
//                 <h1>Shopping List for {this.props.name}</h1>
//                 <ul>
//                     <li>Instagram</li>
//                     <li>WhatsApp</li>
//                     <li>Oculus</li>
//                 </ul>
//             </div>
//         );
//     }
// }

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<LikeButton name="btn" />);
//root.render(e(LikeButton));

// root.render(<ShoppingList name="Mark" />);