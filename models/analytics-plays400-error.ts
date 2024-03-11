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
 * @interface AnalyticsPlays400Error
 */
export interface AnalyticsPlays400Error {
    /**
     * A description of the error that occurred.
     * @type {string}
     * @memberof AnalyticsPlays400Error
     */
    'title'?: string;
    /**
     * A link to the error documentation.
     * @type {string}
     * @memberof AnalyticsPlays400Error
     */
    'type'?: string;
    /**
     * The HTTP status code.
     * @type {number}
     * @memberof AnalyticsPlays400Error
     */
    'status'?: number;
    /**
     * A solution for the error.
     * @type {string}
     * @memberof AnalyticsPlays400Error
     */
    'detail'?: string;
    /**
     * The name of the parameter that caused the error.
     * @type {string}
     * @memberof AnalyticsPlays400Error
     */
    'name'?: string;
}
