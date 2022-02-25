/*
 * Yoast.com provisioning API
 * The Yoast provisioning API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
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
    factory(root.expect, root.YoastProvisionerApiClient);
  }
}(this, function(expect, YoastProvisionerApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YoastProvisionerApiClient.ProvisioningDownloadsApi();
  });

  describe('(package)', function() {
    describe('ProvisioningDownloadsApi', function() {
      describe('apiProvisioningDownloadsCurrentVersionGet', function() {
        it('should call apiProvisioningDownloadsCurrentVersionGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProvisioningDownloadsCurrentVersionGet call and complete the assertions
          /*

          instance.apiProvisioningDownloadsCurrentVersionGet(productCode, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(&#x27;string&#x27;);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiProvisioningDownloadsCurrentZipGet', function() {
        it('should call apiProvisioningDownloadsCurrentZipGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProvisioningDownloadsCurrentZipGet call
          /*

          instance.apiProvisioningDownloadsCurrentZipGet(productCode, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
