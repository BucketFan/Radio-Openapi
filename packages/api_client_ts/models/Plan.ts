/* tslint:disable */
/* eslint-disable */
/**
 * radio_openapi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    clubId: number;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    info: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    image?: string;
}

/**
 * Check if a given object implements the Plan interface.
 */
export function instanceOfPlan(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "clubId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "info" in value;

    return isInstance;
}

export function PlanFromJSON(json: any): Plan {
    return PlanFromJSONTyped(json, false);
}

export function PlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'clubId': json['clubId'],
        'name': json['name'],
        'info': json['info'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function PlanToJSON(value?: Plan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'clubId': value.clubId,
        'name': value.name,
        'info': value.info,
        'image': value.image,
    };
}

