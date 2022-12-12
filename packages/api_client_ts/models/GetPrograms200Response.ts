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
import type { Program } from './Program';
import {
    ProgramFromJSON,
    ProgramFromJSONTyped,
    ProgramToJSON,
} from './Program';

/**
 * 
 * @export
 * @interface GetPrograms200Response
 */
export interface GetPrograms200Response {
    /**
     * 
     * @type {Array<Program>}
     * @memberof GetPrograms200Response
     */
    programs: Array<Program>;
}

/**
 * Check if a given object implements the GetPrograms200Response interface.
 */
export function instanceOfGetPrograms200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "programs" in value;

    return isInstance;
}

export function GetPrograms200ResponseFromJSON(json: any): GetPrograms200Response {
    return GetPrograms200ResponseFromJSONTyped(json, false);
}

export function GetPrograms200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPrograms200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'programs': ((json['programs'] as Array<any>).map(ProgramFromJSON)),
    };
}

export function GetPrograms200ResponseToJSON(value?: GetPrograms200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'programs': ((value.programs as Array<any>).map(ProgramToJSON)),
    };
}

