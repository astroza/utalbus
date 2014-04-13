/*
 * File: app/view/AboutPanel.js
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

Ext.define('UTalBus.view.AboutPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.aboutpanel',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'aboutPanel',
        padding: 10,
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '<img src="http://www.educandus.cl/imagenes_dta/logo_utalca.jpg"></img>',
            '<div><p>Este proyecto recibió apoyo de:</p>',
            '    <ul>',
            '        <li>La escuela de Ingenieria Civil en Computación: Servidor y costos operativos</li>',
            '        <li>La Vicerrectoria de Desarrollo Estudiantil: Equipos rastreadores</li>',
            '    </ul>',
            '</div>',
            '<div><h2>Creditos</h2>',
            '    <ul><h3>Programadores</h3>',
            '        <li>Felipe Astroza Araya</li>',
            '        <li>Fernando Torres Muñoz</li>',
            '        <li>Alex Muñoz Muñoz</li>',
            '    </ul>',
            '</div>',
            '    <ul><h3>Pruebas de software</h3>',
            '        <li>Fernando Torres</li>',
            '        <li>Alex Muñoz Muñoz</li>',
            '    </ul>',
            '    <ul><h3>Coordinación y redacción</h3>',
            '        <li>Marianela Iturriaga Jiménez</li>',
            '        <li>Alex Muñoz Muñoz</li>',
            '    </ul>',
            '    <ul><h3>Colaboradores adicionales</h3>',
            '        <li>Hernan Garrido Arce</li>',
            '    </ul>'
        ]
    },

    initialize: function() {
        this.callParent();
        this.setHtml(this.getTpl().applyTemplate(this));
    }

});