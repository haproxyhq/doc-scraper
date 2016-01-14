#HAProxyHQ/DocScraper

This is a simple jQuery plugin, which scrapes the HAProxy configuration manual and returns the relevant data in JSON format.

##Usage

Just provide the URL to the HAProxy manual you want to scrape and a callback function.

```
$.scrapeHAPDocs("https://cbonte.github.io/haproxy-dconv/configuration-1.6.html", function(response) {
	console.log(response);
});
```