import AppRouterDOM from './app/app-router-dom';
import Authorization from '@js/components/authPage/authPage.js';


const App = [
    AppRouterDOM.switch(
        AppRouterDOM.route('/', Authorization),
        // AppRouterDOM.route('/cabinet', Cabinet),
    )
];

export default App;