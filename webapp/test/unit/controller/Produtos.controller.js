/*global QUnit*/

sap.ui.define([
	"brcomprodutos/produtos/controller/Produtos.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Produtos Controller");

	QUnit.test("I should test the Produtos controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
