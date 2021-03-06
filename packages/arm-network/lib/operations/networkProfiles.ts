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
import * as Models from "../models";
import * as Mappers from "../models/networkProfilesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a NetworkProfiles. */
export class NetworkProfiles {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a NetworkProfiles.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified network profile.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkProfileName The name of the NetworkProfile.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, networkProfileName: string): Promise<msRest.RestResponse>;
  deleteMethod(resourceGroupName: string, networkProfileName: string, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  deleteMethod(resourceGroupName: string, networkProfileName: string, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, networkProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, networkProfileName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the specified network profile in a specified resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkProfileName The name of the PublicIPPrefx.
   *
   * @param {NetworkProfilesGetOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, networkProfileName: string): Promise<Models.NetworkProfilesGetResponse>;
  get(resourceGroupName: string, networkProfileName: string, options: Models.NetworkProfilesGetOptionalParams): Promise<Models.NetworkProfilesGetResponse>;
  get(resourceGroupName: string, networkProfileName: string, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  get(resourceGroupName: string, networkProfileName: string, options: Models.NetworkProfilesGetOptionalParams, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  get(resourceGroupName: string, networkProfileName: string, options?: Models.NetworkProfilesGetOptionalParams, callback?: msRest.ServiceCallback<Models.NetworkProfile>): Promise<Models.NetworkProfilesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NetworkProfilesGetResponse>;
  }

  /**
   * Creates or updates a network profile.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkProfileName The name of the network profile.
   *
   * @param {NetworkProfile} parameters Parameters supplied to the create or update network profile
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile): Promise<Models.NetworkProfilesCreateOrUpdateResponse>;
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, options: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesCreateOrUpdateResponse>;
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkProfile>): Promise<Models.NetworkProfilesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.NetworkProfilesCreateOrUpdateResponse>;
  }

  /**
   * Updates network profile tags.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkProfileName The name of the network profile.
   *
   * @param {TagsObject} parameters Parameters supplied to update network profile tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject): Promise<Models.NetworkProfilesUpdateTagsResponse>;
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesUpdateTagsResponse>;
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkProfile>): Promise<Models.NetworkProfilesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        parameters,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.NetworkProfilesUpdateTagsResponse>;
  }

  /**
   * Gets all the network profiles in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(): Promise<Models.NetworkProfilesListAllResponse>;
  listAll(options: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListAllResponse>;
  listAll(callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.NetworkProfilesListAllResponse>;
  }

  /**
   * Gets all network profiles in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string): Promise<Models.NetworkProfilesListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.NetworkProfilesListResponse>;
  }

  /**
   * Gets all the network profiles in a subscription.
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
  listAllNext(nextPageLink: string): Promise<Models.NetworkProfilesListAllNextResponse>;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListAllNextResponse>;
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.NetworkProfilesListAllNextResponse>;
  }

  /**
   * Gets all network profiles in a resource group.
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
  listNext(nextPageLink: string): Promise<Models.NetworkProfilesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.NetworkProfilesListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.NetworkProfile,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfile
    },
    201: {
      bodyMapper: Mappers.NetworkProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/networkProfiles",
  urlParameters: [
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
      bodyMapper: Mappers.NetworkProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.NetworkProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.NetworkProfileListResult
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
      bodyMapper: Mappers.NetworkProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
