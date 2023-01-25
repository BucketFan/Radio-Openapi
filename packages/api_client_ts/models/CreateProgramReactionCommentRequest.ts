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
 * @interface CreateProgramReactionCommentRequest
 */
export interface CreateProgramReactionCommentRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateProgramReactionCommentRequest
     */
    contents?: string;
}

/**
 * Check if a given object implements the CreateProgramReactionCommentRequest interface.
 */
export function instanceOfCreateProgramReactionCommentRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateProgramReactionCommentRequestFromJSON(json: any): CreateProgramReactionCommentRequest {
    return CreateProgramReactionCommentRequestFromJSONTyped(json, false);
}

export function CreateProgramReactionCommentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProgramReactionCommentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
    };
}

export function CreateProgramReactionCommentRequestToJSON(value?: CreateProgramReactionCommentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contents': value.contents,
    };
}

