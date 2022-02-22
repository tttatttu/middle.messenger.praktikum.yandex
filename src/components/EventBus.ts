interface listeners {
    [key: string]: Function[];
}

export class EventBus {
    listeners: listeners = {};

    constructor() {
        this.listeners = {};
    }

    public on(event: string, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public off(event: string, callback: Function) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    public emit(event: string, ...args: any[]) {
        if (!this.listeners[event]) {
            return
        }

        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}
