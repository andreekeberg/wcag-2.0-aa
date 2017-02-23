// This creates a markdown file of all selected sections in the WCAG 2.0 Guidelines
// TODO: Catch the 4 top-level headings (principles) as well

var dump = '';

jQuery(".guideline.panel").each(function() {

	jQuery(this).find("button").remove();

	$panelHeading = jQuery(this).find(".panel-heading");

	var heading = $panelHeading.find("h3").text();
	var nodes   = $panelHeading.contents().filter(function () { return this.nodeType === 3; });

	dump += '## ' + heading + "\n" + nodes[0].nodeValue + "\n\n";

	var $articles = jQuery(this).find("article.sc-wrapper.current");

	$articles.each(function() {
		dump += '### ' + jQuery(this).find("header > h4").text() + ' - ' + jQuery(this).find("header > p.h4").text() + "\n";

		var list = '';
		jQuery(this).find(".sc-text ul li").each(function() {
			list += '* ' + jQuery(this).text() + "\n";
		});
		jQuery(this).find(".sc-text ul").remove();
		if ( list != '' ) list += "\n";

		var notes = '';
		jQuery(this).find(".sc-text aside.note").each(function() {
			notes += '_' + jQuery(this).text() + "_\n\n";
		});
		jQuery(this).find(".sc-text aside.note").remove();

		jQuery(this).find(".sc-text p").each(function() {
			dump += '- [ ]' + jQuery(this).text() + "\n\n";
		});

		dump += list;
		dump += notes;

	});

});