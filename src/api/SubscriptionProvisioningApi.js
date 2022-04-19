/*
 * Yoast.com provisioning API
 * The Yoast provisioning API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {CancelProvisionedSubscriptionDto} from '../model/CancelProvisionedSubscriptionDto';
import {CreateProvisionedSubscriptionDto} from '../model/CreateProvisionedSubscriptionDto';
import {SetProvisionedSiteDto} from '../model/SetProvisionedSiteDto';
import {SubscriptionProvisioningResponseDto} from '../model/SubscriptionProvisioningResponseDto';

/**
* SubscriptionProvisioning service.
* @module api/SubscriptionProvisioningApi
* @version 1.0.0
*/
export class SubscriptionProvisioningApi {

    /**
    * Constructs a new SubscriptionProvisioningApi. 
    * @alias module:api/SubscriptionProvisioningApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsCreatePost operation.
     * @callback moduleapi/SubscriptionProvisioningApi~apiProvisioningSubscriptionsCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a subscription
     * Creates a subscription for a customer.
     * @param {module:model/CreateProvisionedSubscriptionDto} body 
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiProvisioningSubscriptionsCreatePost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiProvisioningSubscriptionsCreatePost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdCancelPost operation.
     * @callback moduleapi/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a single subscription
     * Cancel the subscription when the period ends or immediately.
     * @param {module:model/CancelProvisionedSubscriptionDto} body 
     * @param {String} id 
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiProvisioningSubscriptionsIdCancelPost(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiProvisioningSubscriptionsIdCancelPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProvisioningSubscriptionsIdCancelPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdGet operation.
     * @callback moduleapi/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a subscription
     * Get a single subscription that was provisioned for a third party
     * @param {String} id 
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiProvisioningSubscriptionsIdGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProvisioningSubscriptionsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdRefundPost operation.
     * @callback moduleapi/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdRefundPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund a single subscription
     * Refund the subscription.
     * @param {String} id 
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdRefundPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiProvisioningSubscriptionsIdRefundPost(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProvisioningSubscriptionsIdRefundPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/refund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdRenewPost operation.
     * @callback moduleapi/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdRenewPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Renew a subscription
     * Renew the subscription for a new period.
     * @param {String} id 
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdRenewPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiProvisioningSubscriptionsIdRenewPost(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProvisioningSubscriptionsIdRenewPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/renew', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdSetSitePost operation.
     * @callback moduleapi/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdSetSitePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Link a subscription to a site
     * Links the subscription to a customer&#x27;s website. Setting a site the the subscription will remove the site if already set.
     * @param {module:model/SetProvisionedSiteDto} body 
     * @param {String} id 
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdSetSitePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiProvisioningSubscriptionsIdSetSitePost(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiProvisioningSubscriptionsIdSetSitePost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProvisioningSubscriptionsIdSetSitePost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/set-site', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}