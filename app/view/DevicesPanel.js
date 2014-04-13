/*
 * File: app/view/DevicesPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('UTalBus.view.DevicesPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.devicespanel',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'list',
                height: '100%',
                itemId: 'mylist2',
                itemTpl: [
                    '<div>{name}</div>'
                ],
                loadingText: 'Cargando...',
                store: 'DevicesStore'
            }
        ],
        listeners: [
            {
                fn: 'onPanelPainted',
                event: 'painted'
            }
        ]
    },

    onPanelPainted: function(element, eOpts) {
        track_device = false;

    }

});