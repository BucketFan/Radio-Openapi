/* tslint:disable */
/* eslint-disable */
/**
 * radio_openapi
 * radio_openapi
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@anycloud.co.jp
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateProgramRequestChaptersInner
 */
export interface CreateProgramRequestChaptersInner {
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequestChaptersInner
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequestChaptersInner
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequestChaptersInner
     */
    mediaUrl: string;
    /**
     * mineType 例：image/jpeg
     * @type {string}
     * @memberof CreateProgramRequestChaptersInner
     */
    contentType: string;
    /**
     * 
     * @type {number}
     * @memberof CreateProgramRequestChaptersInner
     */
    playTimeSeconds: number;
    /**
     * 
     * @type {number}
     * @memberof CreateProgramRequestChaptersInner
     */
    order: number;
}

/**
 * Check if a given object implements the CreateProgramRequestChaptersInner interface.
 */
export function instanceOfCreateProgramRequestChaptersInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "mediaUrl" in value;
    isInstance = isInstance && "contentType" in value;
    isInstance = isInstance && "playTimeSeconds" in value;
    isInstance = isInstance && "order" in value;

    return isInstance;
}

export function CreateProgramRequestChaptersInnerFromJSON(json: any): CreateProgramRequestChaptersInner {
    return CreateProgramRequestChaptersInnerFromJSONTyped(json, false);
}

export function CreateProgramRequestChaptersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProgramRequestChaptersInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'fileName': json['fileName'],
        'mediaUrl': json['mediaUrl'],
        'contentType': json['contentType'],
        'playTimeSeconds': json['playTimeSeconds'],
        'order': json['order'],
    };
}

export function CreateProgramRequestChaptersInnerToJSON(value?: CreateProgramRequestChaptersInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'fileName': value.fileName,
        'mediaUrl': value.mediaUrl,
        'contentType': value.contentType,
        'playTimeSeconds': value.playTimeSeconds,
        'order': value.order,
    };
}

