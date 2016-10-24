/**
 * "index" index view controller
 *
 * @name: controller/index.js
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: index view controller
 * @params {none}
 * @return: none
 * @operations {"decimal2binary", "binary2decimal"}
 */
var indexController = {
	version: "0.0.1",
	operation: "decimal2binary",
	version: function () {
		return this.version;
	},
	/**
	 * @name: swapInputs
	 * @description: Changes the div decimal-block with the div binary-block, changes
	 				 the operation value of the object
 	 * @params {number}
 	 * @return: {none}
	 */
	swapInputs: function () {
		$("#decimal-block").swapWith("#binary-block");
	},
	/**
	 * @name: convert
	 * @description: Calls to converter to calculate the operation. Changes the
	                 input value from binary/decimal inputs with the result of the
	                 operation
 	 * @params {number}
 	 * @return: {none}
	 */
	convert: function () {
 		return false;
	},
};

$(document).ready(function()
{
$("#swap").click(indexController.swapInputs());
});
jQuery.fn.swapWith = function(to) {
    return this.each(function() {
        var copy_to = $(to).clone(true);
        var copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
};
