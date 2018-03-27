import {Router} from './Modules/router.js';
import {UserController} from './Controller/userController.js';
import {ScoreboardController} from './Controller/scoreboardController.js';
import {LevelView} from './Views/LevelView/levelView.js';

document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementsByClassName('js-application')[0];
    const router = new Router(root);

    const userController = new UserController();
    const scoreboardController = new ScoreboardController();

    router.add('/level', new LevelView(), 'level');
    router.add('/scoreboard', scoreboardController.scoreboardView, 'scoreboard');
    router.add('/login', userController.loginView, 'login');
    router.add('/profile', userController.profileView, 'profile');
    router.add('/register', userController.registerView, 'register');
    router.add('/', userController.menuView, 'menu');
    userController.loadMe().then(() => {
        router.start();
    });
});