"use strict";

let mediator = function () {

    /**
     * Channels where the events could be
     * published
     */
    let ChannelEnum = {
        COMPLETE: 'complete',
        DELETE: 'delete'
    };

    Object.freeze(ChannelEnum);

    let channels = {};

    /**
     * If channel does not exist, it will create a channel with
     * an array of subcribers.
     * 
     * It will subscrible the context and the function
     * to the subscribers array inside the channel.
     * 
     * @param {ChannelEnum} channel - Channel where events are published 
     * @param {Object} context Context passed to the function when it is called
     * @param {function} func - Function that is called when an event happens 
     */
    let subscribe = function (channel, context, func) {
        if (!channels[channel]) {
            channels[channel] = {
                subscribers: []
            };
        }
        channels[channel].subscribers.push({
            context: context,
            func: func
        });
    };

    /**
     * Publish an event to a channel.
     * 
     * If the channel doesn't exist, returns false.
     * 
     * Accepts other parameters rather than channel.
     * 
     * Will call the function passing the context on every subscriber
     * that has been registered to the channel.
     * 
     * @param {ChannelEnum} channel - Channel where the event is published
     */
    let publish = function (channel) {
        if (!channels[channel]) {
            return false;
        }
        let args = Array.prototype.slice.call(arguments, 1);
        let channelSubscribers = channels[channel].subscribes;
        for (let subscribersIndex = 0; subscribersIndex < channelSubscribers.length; subscribersIndex++) {
            let subscriber = channelSubscribers[subscribersIndex];
            subscriber.func.apply(subscriber.context, args);
        }
    }

    return {
        ChannelEnum: ChannelEnum,
        subscribe: subscribe,
        publish: publish
    }
}

module.exports = mediator();