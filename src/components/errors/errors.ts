import Block from '../../block';
import error from './errors.hbs';

type ErrorProps = {
    error: string
    description: string
    events?: {}
}

export default class Errors extends Block<ErrorProps> {
    constructor(tagName: string, props: ErrorProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelector('.button-return')
            ?.addEventListener('click', this.props.events.click);
    }

    render() {
        return this.compile(error, this.props);
    }
}
