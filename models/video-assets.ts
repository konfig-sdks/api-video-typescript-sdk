/*
api.video

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Collection of details about the video object that you can use to work with the video object.
 * @export
 * @interface VideoAssets
 */
export interface VideoAssets {
    /**
     * This is the manifest URL. For HTTP Live Streaming (HLS), when a HLS video stream is initiated, the first file to download is the manifest. This file has the extension M3U8, and provides the video player with information about the various bitrates available for streaming.
     * @type {string}
     * @memberof VideoAssets
     */
    'hls'?: string;
    /**
     * Code to use video from a third party website
     * @type {string}
     * @memberof VideoAssets
     */
    'iframe'?: string;
    /**
     * Raw url of the player.
     * @type {string}
     * @memberof VideoAssets
     */
    'player'?: string;
    /**
     * Poster of the video.
     * @type {string}
     * @memberof VideoAssets
     */
    'thumbnail'?: string;
    /**
     * Available only if mp4Support is enabled. Raw mp4 url.
     * @type {string}
     * @memberof VideoAssets
     */
    'mp4'?: string;
}
