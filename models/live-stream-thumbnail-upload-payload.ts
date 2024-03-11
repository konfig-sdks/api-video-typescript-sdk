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
 * @interface LiveStreamThumbnailUploadPayload
 */
export interface LiveStreamThumbnailUploadPayload {
    /**
     * The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.
     * @type {Uint8Array | File | buffer.File}
     * @memberof LiveStreamThumbnailUploadPayload
     */
    'file': Uint8Array | File | buffer.File;
}

