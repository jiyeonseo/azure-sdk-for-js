/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/zonesMappers";
import * as Parameters from "../models/parameters";
import { DnsManagementClientContext } from "../dnsManagementClientContext";

/** Class representing a Zones. */
export class Zones {
  private readonly client: DnsManagementClientContext;

  /**
   * Create a Zones.
   * @param {DnsManagementClientContext} client Reference to the service client.
   */
  constructor(client: DnsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a DNS zone. Does not modify DNS records within the zone.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} zoneName The name of the DNS zone (without a terminating dot).
   *
   * @param {Zone} parameters Parameters supplied to the CreateOrUpdate operation.
   *
   * @param {ZonesCreateOrUpdateOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone): Promise<Models.ZonesCreateOrUpdateResponse>;
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options: Models.ZonesCreateOrUpdateOptionalParams): Promise<Models.ZonesCreateOrUpdateResponse>;
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, callback: msRest.ServiceCallback<Models.Zone>): void;
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options: Models.ZonesCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Zone>): void;
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options?: Models.ZonesCreateOrUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.Zone>): Promise<Models.ZonesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ZonesCreateOrUpdateResponse>;
  }


  /**
   * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
   * cannot be undone.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} zoneName The name of the DNS zone (without a terminating dot).
   *
   * @param {ZonesDeleteMethodOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, zoneName: string, options?: Models.ZonesDeleteMethodOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, zoneName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} zoneName The name of the DNS zone (without a terminating dot).
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, zoneName: string): Promise<Models.ZonesGetResponse>;
  get(resourceGroupName: string, zoneName: string, options: msRest.RequestOptionsBase): Promise<Models.ZonesGetResponse>;
  get(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.Zone>): void;
  get(resourceGroupName: string, zoneName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Zone>): void;
  get(resourceGroupName: string, zoneName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Zone>): Promise<Models.ZonesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ZonesGetResponse>;
  }

  /**
   * Updates a DNS zone. Does not modify DNS records within the zone.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} zoneName The name of the DNS zone (without a terminating dot).
   *
   * @param {ZoneUpdate} parameters Parameters supplied to the Update operation.
   *
   * @param {ZonesUpdateOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  update(resourceGroupName: string, zoneName: string, parameters: Models.ZoneUpdate): Promise<Models.ZonesUpdateResponse>;
  update(resourceGroupName: string, zoneName: string, parameters: Models.ZoneUpdate, options: Models.ZonesUpdateOptionalParams): Promise<Models.ZonesUpdateResponse>;
  update(resourceGroupName: string, zoneName: string, parameters: Models.ZoneUpdate, callback: msRest.ServiceCallback<Models.Zone>): void;
  update(resourceGroupName: string, zoneName: string, parameters: Models.ZoneUpdate, options: Models.ZonesUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Zone>): void;
  update(resourceGroupName: string, zoneName: string, parameters: Models.ZoneUpdate, options?: Models.ZonesUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.Zone>): Promise<Models.ZonesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ZonesUpdateResponse>;
  }

  /**
   * Lists the DNS zones within a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {ZonesListByResourceGroupOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByResourceGroup(resourceGroupName: string): Promise<Models.ZonesListByResourceGroupResponse>;
  listByResourceGroup(resourceGroupName: string, options: Models.ZonesListByResourceGroupOptionalParams): Promise<Models.ZonesListByResourceGroupResponse>;
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listByResourceGroup(resourceGroupName: string, options: Models.ZonesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.ZonesListByResourceGroupOptionalParams, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ZonesListByResourceGroupResponse>;
  }

  /**
   * Lists the DNS zones in all resource groups in a subscription.
   *
   * @param {ZonesListOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(): Promise<Models.ZonesListResponse>;
  list(options: Models.ZonesListOptionalParams): Promise<Models.ZonesListResponse>;
  list(callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  list(options: Models.ZonesListOptionalParams, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  list(options?: Models.ZonesListOptionalParams, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ZonesListResponse>;
  }

  /**
   * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
   * cannot be undone.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} zoneName The name of the DNS zone (without a terminating dot).
   *
   * @param {ZonesBeginDeleteMethodOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, zoneName: string, options?: Models.ZonesBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        zoneName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists the DNS zones within a resource group.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByResourceGroupNext(nextPageLink: string): Promise<Models.ZonesListByResourceGroupNextResponse>;
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ZonesListByResourceGroupNextResponse>;
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ZonesListByResourceGroupNextResponse>;
  }

  /**
   * Lists the DNS zones in all resource groups in a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.ZonesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ZonesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ZonesListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Zone,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    201: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ZoneUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
