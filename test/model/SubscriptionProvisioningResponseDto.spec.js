/**
 * Yoast.com provisioning API
 * The Yoast provisioning API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YoastSubscriptionApiClient);
  }
}(this, function(expect, YoastSubscriptionApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SubscriptionProvisioningResponseDto', function() {
    it('should create an instance of SubscriptionProvisioningResponseDto', function() {
      // uncomment below and update the code to test SubscriptionProvisioningResponseDto
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be.a(YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionNumber (base name: "subscriptionNumber")', function() {
      // uncomment below and update the code to test the property subscriptionNumber
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property pluginDownloadUrls (base name: "pluginDownloadUrls")', function() {
      // uncomment below and update the code to test the property pluginDownloadUrls
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property siteUrl (base name: "siteUrl")', function() {
      // uncomment below and update the code to test the property siteUrl
      //var instane = new YoastSubscriptionApiClient.SubscriptionProvisioningResponseDto();
      //expect(instance).to.be();
    });

  });

}));
