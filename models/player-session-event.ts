/*
api.video

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PlayerSessionEvent
 */
export interface PlayerSessionEvent {
    /**
     * Possible values are: ready, play, pause, resume, seek.backward, seek.forward, end
     * @type {string}
     * @memberof PlayerSessionEvent
     */
    'type'?: string;
    /**
     * When an event occurred, presented in ISO-8601 format.
     * @type {string}
     * @memberof PlayerSessionEvent
     */
    'emittedAt'?: string;
    /**
     * 
     * @type {number}
     * @memberof PlayerSessionEvent
     */
    'at'?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerSessionEvent
     */
    'from'?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerSessionEvent
     */
    'to'?: number;
}
