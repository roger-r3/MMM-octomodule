/* global Module */

/* Magic Mirror
 * Module: OctoMirror-Module
 *
 * By Kieran Ramnarine
 * MIT Licensed.
 */

Module.register("octomirror-module", {
	defaults: {
		
		height:"480px",
		width:"640px"
	},
	
	//Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("img");
		wrapper.width = this.config.width;
		wrapper.height = this.config.height;
		wrapper.src = "192.168.1.19:8080/?action=stream";
		return wrapper;
	},
	getHeader: function() {
		return 'Octoprint!';
	}
});