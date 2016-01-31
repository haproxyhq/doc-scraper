(function($) {
	$.extend({
		scrapeHAPDocs: function(url, callback) {
			var docData = [];
			var virtualKeywordsDom = null;

			loadDocPage();

			function loadDocPage() {
				$.ajax({
					url: url,
					success: initVirtualDom,
					error: function() {
						callback([]);
					}
				});
			}

			function initVirtualDom(htmlString) {
				virtualKeywordsDom = $($.parseHTML(htmlString)[13]).find(".keyword");
				parseDocData();
			}

			function parseDocData() {
				virtualKeywordsDom.each(parseKeyword);
				callback(docData);
			}

			function parseKeyword() {
				var anchor = $(this).find("b a:not(.anchor)")[0];
				var keyword = $(anchor).text();
				var params = $(this).text().substring(keyword.length);

				var command = {
					"keyword": keyword,
					"params": params,
					"anchor": $(anchor).attr("href")
				};

				docData.push(command);
			}
		}
	});
})(jQuery);
