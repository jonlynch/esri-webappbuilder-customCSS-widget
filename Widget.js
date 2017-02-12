///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'jimu/BaseWidget'
  ],
  function(
    declare,
    lang,
    BaseWidget) {
    var clazz = declare([BaseWidget], {
      baseClass: 'jimu-widget-customcss',
      name: 'CustomCSS',
      styleTag: null,

      startup: function() {
        var css = this.config.css;

        if (this.styleTag) {
          this.styleTag.innerText = css;
        } else {
          this.styleTag = document.createElement('style');
          this.styleTag.type = 'text/css';
          this.styleTag.appendChild(document.createTextNode(css));
          document.head.appendChild(this.styleTag);
        }
      },

      destroy: function destroyCustomCSSWidget() {
        this.styleTag.parentNode.removeChild(this.styleTag);
        this.inherited(arguments);
      }

    });

    return clazz;
  });
