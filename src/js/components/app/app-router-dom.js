import AppDOM from './app-dom';

class AppRouterDom {
    switch(...routes) {
        window.onpopstate = () => {
            AppDOM.reRender();
        };

        return class {
            render() {
                const path = window.location.pathname;

                const SourceComponent = routes.find((route) => route.path === path)?.Component;
                const ErrorComponent = routes.find((route) => route.path === undefined)?.Component;

                if (SourceComponent) {
                    return new SourceComponent().render();
                }

                return new ErrorComponent().render();
            }
        };
    }

    route(path, Component) {
        return { path, Component };
    }

    link(event) {
        event.preventDefault();
        this.#navigateTo(event.target.href);
    }

    menuLink(event, callback) {
        event.preventDefault();
        callback();

        const { currentTarget } = event;
        setTimeout(() => {
            this.#navigateTo(currentTarget.href);
        }, 250);
    }

    #navigateTo(url) {
        window.history.pushState(null, null, url);
        AppDOM.reRender();
    }
}

export default new AppRouterDom();
