const events = {};

export const pubsub = {
    on(event, handler) {
        (events[event] ||= []).push(handler);
    },
    emit(event, payload) {
        (events[event] || []).forEach(h => h(payload));
    },
    off(event, handler) 
    { 
        events[event] = (events[event] || []).filter(h => h !== handler);
    }
};