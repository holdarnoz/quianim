class EventManager {
    constructor() {
        this.handlers = []; // Initialize the handlers array
    }

    addHandler(handler) {
        this.handlers.push(handler); // Add a handler to the array
    }

    removeHandler(handler) {
        this.handlers = this.handlers.filter(h => h !== handler); // Remove a handler from the array
    }

    trigger(event) {
        this.handlers.forEach(handler => handler(event)); // Call each handler with the event
    }
}

const manager = new EventManager();
manager.addHandler((event) => console.log("Handler 1", event));
manager.addHandler((event) => console.log("Handler 2", event));

manager.trigger({ type: 'click' }); // Trigger an event
