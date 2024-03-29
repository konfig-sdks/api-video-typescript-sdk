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
 * @interface VideoStatusEncodingMetadata
 */
export interface VideoStatusEncodingMetadata {
    /**
     * The width of the video in pixels.
     * @type {number}
     * @memberof VideoStatusEncodingMetadata
     */
    'width'?: number | null;
    /**
     * The height of the video in pixels.
     * @type {number}
     * @memberof VideoStatusEncodingMetadata
     */
    'height'?: number | null;
    /**
     * The number of bits processed per second.
     * @type {number}
     * @memberof VideoStatusEncodingMetadata
     */
    'bitrate'?: number | null;
    /**
     * The length of the video.
     * @type {number}
     * @memberof VideoStatusEncodingMetadata
     */
    'duration'?: number | null;
    /**
     * The frequency with which consecutive images or frames appear on a display. Shown in this API as frames per second (fps).
     * @type {number}
     * @memberof VideoStatusEncodingMetadata
     */
    'framerate'?: number | null;
    /**
     * How many samples per second a digital audio system uses to record an audio signal. The higher the rate, the higher the frequencies that can be recorded. They are presented in this API using hertz.
     * @type {number}
     * @memberof VideoStatusEncodingMetadata
     */
    'samplerate'?: number | null;
    /**
     * The method used to compress and decompress digital video. API Video supports all codecs in the libavcodec library. 
     * @type {string}
     * @memberof VideoStatusEncodingMetadata
     */
    'videoCodec'?: string | null;
    /**
     * The method used to compress and decompress digital audio for your video.
     * @type {string}
     * @memberof VideoStatusEncodingMetadata
     */
    'audioCodec'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatusEncodingMetadata
     */
    'aspectRatio'?: string | null;
}

