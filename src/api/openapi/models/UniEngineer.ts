/* tslint:disable */
/* eslint-disable */
/**
 * DockerSpring POC
 * My API Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UniEngineer
 */
export interface UniEngineer {
    /**
     * 
     * @type {number}
     * @memberof UniEngineer
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UniEngineer
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UniEngineer
     */
    email?: string;
}

/**
 * Check if a given object implements the UniEngineer interface.
 */
export function instanceOfUniEngineer(value: object): value is UniEngineer {
    return true;
}

export function UniEngineerFromJSON(json: any): UniEngineer {
    return UniEngineerFromJSONTyped(json, false);
}

export function UniEngineerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UniEngineer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function UniEngineerToJSON(json: any): UniEngineer {
    return UniEngineerToJSONTyped(json, false);
}

export function UniEngineerToJSONTyped(value?: UniEngineer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'email': value['email'],
    };
}

