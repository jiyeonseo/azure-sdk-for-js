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
import * as Mappers from "../models/expressRouteCrossConnectionPeeringsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCrossConnectionPeerings. */
export class ExpressRouteCrossConnectionPeerings {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCrossConnectionPeerings.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all peerings in a specified ExpressRouteCrossConnection.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, crossConnectionName: string): Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse>;
  list(resourceGroupName: string, crossConnectionName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse>;
  list(resourceGroupName: string, crossConnectionName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  list(resourceGroupName: string, crossConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  list(resourceGroupName: string, crossConnectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse>;
  }


  /**
   * Deletes the specified peering from the ExpressRouteCrossConnection.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, crossConnectionName, peeringName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified peering for the ExpressRouteCrossConnection.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string): Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse>;
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse>;
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>): void;
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>): void;
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>): Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse>;
  }


  /**
   * Creates or updates a peering in the specified ExpressRouteCrossConnection.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {ExpressRouteCrossConnectionPeering} peeringParameters Parameters supplied to the create
   * or update ExpressRouteCrossConnection peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, crossConnectionName: string, peeringName: string, peeringParameters: Models.ExpressRouteCrossConnectionPeering, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, crossConnectionName, peeringName, peeringParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified peering from the ExpressRouteCrossConnection.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a peering in the specified ExpressRouteCrossConnection.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {ExpressRouteCrossConnectionPeering} peeringParameters Parameters supplied to the create
   * or update ExpressRouteCrossConnection peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, crossConnectionName: string, peeringName: string, peeringParameters: Models.ExpressRouteCrossConnectionPeering, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        peeringParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all peerings in a specified ExpressRouteCrossConnection.
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
  listNext(nextPageLink: string): Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeeringList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeering
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
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

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "peeringParameters",
    mapper: {
      ...Mappers.ExpressRouteCrossConnectionPeering,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeering
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeering
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
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeeringList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
