import Block from "./Block";

interface ButtonProps {
    type?: string;
    className?: string;
    text?: string;
    events?: {
        clock: () => void
    }
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }

    render() {
        return this.props;
    }
}
