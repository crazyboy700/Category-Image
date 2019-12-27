var ax_category = {
	run: function() {
		$("a[name*=category]").each(function(){
			var anchor = $(this).attr("name");
			anchor = +anchor.replace("category-", "");
			// The for loop is a little kludgy, but I'm having some issues grabbing the data from the plugin settings correctly, so it works for now.
			for(var i = 0; i < proboards.plugin.get("ax_category").settings.categories.length; i++) {
				if(anchor == proboards.plugin.get("ax_category").settings.categories[i].category[0]) {
					$(this).next()
						.find("div.title-bar")
						.css({
							"background-image":"url("+proboards.plugin.get("ax_category").settings.categories[i].image+")"
						})
						.text("");
				}
			}
		});
	}
};
$(document).ready(function(){
	ax_category.run();
});
