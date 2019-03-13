/*
	MIT License
	Copyright (c) 2018 Ezra Rieben https://github.com/ezrarieben/
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;
(function($) {
    $.fn.extend({
        downloadr: function(options) {

            this.defaultOptions = {
                elements: {
                    selectors: {
                        link: '.download-r',
                    }
                }
            };

            var settings = $.extend({}, this.defaultOptions, options);

            var functions = {
                downloadFile: function(downloadr) {
                    var downloadLink = document.createElement('a');
                    downloadLink.href = $(downloadr).attr('href'); // Link to download from
                    downloadLink.download = downloadLink.href.substr(downloadLink.href.lastIndexOf("/") + 1); // Filename after download
                    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.match(/Trident.*rv\:11\./)) {
                        window.open(downloadLink.href, '_blank');
                    } else {
                        downloadLink.click();
                    }
                }
            }

            return this.each(function() {
                var _this = $(this);

                // downloadr elements used
                var elements = {
                    links: _this.find(settings.elements.selectors.link)
                };

                /**
                 * Add event handler for click on download link
                 */
                $(elements.links).on('click', function(e) {
                    e.preventDefault();
                    functions.downloadFile(this);
                });
            });
        }
    });
})(jQuery)
