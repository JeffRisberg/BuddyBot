/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var app = require('../app');
var request = require('supertest');
var nock = require('nock');

describe('i18n-en', function() {
  it('English localized page should contain specific text when GET /', function(done) {
	request(app)
		.get('/')
		.set('Accept-language', 'en')
		.expect(200)
		.expect(function containsString(res) {
    		if (res.text.indexOf('Try the service') == -1) 
    			throw new Error("Invalid translation string");
    	})
		.end(done);
  });
});
