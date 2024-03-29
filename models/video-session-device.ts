/*
api.video

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * What type of device the user is on when in the video session.
 * @export
 * @interface VideoSessionDevice
 */
export interface VideoSessionDevice {
    /**
     * What the type is like desktop, laptop, mobile.
     * @type {string}
     * @memberof VideoSessionDevice
     */
    'type'?: string;
    /**
     * If known, what the brand of the device is, like Apple, Dell, etc.
     * @type {string}
     * @memberof VideoSessionDevice
     */
    'vendor'?: string;
    /**
     * The specific model of the device, if known.
     * @type {string}
     * @memberof VideoSessionDevice
     */
    'model'?: string;
}

