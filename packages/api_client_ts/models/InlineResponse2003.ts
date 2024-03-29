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
import {
    ReactionComment,
    ReactionCommentFromJSON,
    ReactionCommentFromJSONTyped,
    ReactionCommentToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {ReactionComment}
     * @memberof InlineResponse2003
     */
    reactionComment: ReactionComment;
}

export function InlineResponse2003FromJSON(json: any): InlineResponse2003 {
    return InlineResponse2003FromJSONTyped(json, false);
}

export function InlineResponse2003FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2003 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reactionComment': ReactionCommentFromJSON(json['reactionComment']),
    };
}

export function InlineResponse2003ToJSON(value?: InlineResponse2003 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reactionComment': ReactionCommentToJSON(value.reactionComment),
    };
}

