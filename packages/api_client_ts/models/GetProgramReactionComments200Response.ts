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
import type { ReactionComment } from './ReactionComment';
import {
    ReactionCommentFromJSON,
    ReactionCommentFromJSONTyped,
    ReactionCommentToJSON,
} from './ReactionComment';

/**
 * 
 * @export
 * @interface GetProgramReactionComments200Response
 */
export interface GetProgramReactionComments200Response {
    /**
     * 
     * @type {Array<ReactionComment>}
     * @memberof GetProgramReactionComments200Response
     */
    reactionComments: Array<ReactionComment>;
    /**
     * 
     * @type {number}
     * @memberof GetProgramReactionComments200Response
     */
    nextCursor?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProgramReactionComments200Response
     */
    totalCounts?: number;
}

/**
 * Check if a given object implements the GetProgramReactionComments200Response interface.
 */
export function instanceOfGetProgramReactionComments200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "reactionComments" in value;

    return isInstance;
}

export function GetProgramReactionComments200ResponseFromJSON(json: any): GetProgramReactionComments200Response {
    return GetProgramReactionComments200ResponseFromJSONTyped(json, false);
}

export function GetProgramReactionComments200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProgramReactionComments200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reactionComments': ((json['reactionComments'] as Array<any>).map(ReactionCommentFromJSON)),
        'nextCursor': !exists(json, 'nextCursor') ? undefined : json['nextCursor'],
        'totalCounts': !exists(json, 'totalCounts') ? undefined : json['totalCounts'],
    };
}

export function GetProgramReactionComments200ResponseToJSON(value?: GetProgramReactionComments200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reactionComments': ((value.reactionComments as Array<any>).map(ReactionCommentToJSON)),
        'nextCursor': value.nextCursor,
        'totalCounts': value.totalCounts,
    };
}

