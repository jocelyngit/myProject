//import store from '../../../../../.sencha/temp/.ide/store.json';
/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.etats.CompteOppController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.compteopp',


    requires: [
        'Ext.window.Toast'
    ],

    /*
    init: function(view) {
        var form = this.lookupReference('formMembreRef');
        //btn = form.items.items;

        console.log(form);

        
        buttons = tb.items.items,
            ui = view.colorScheme;

        //Apply styling buttons
        if (ui) {
            buttons[1].setUI(ui);
            buttons[2].setUI(ui);
        }
        
    },
    */

    /*
    onNextClick: function(button) {
        //This is where you can handle any logic prior to moving to the next card
        var panel = button.up('panel');

        panel.getViewModel().set('atBeginning', false);

        this.navigate(button, panel, 'next');
    },

    onPreviousClick: function(button) {
        var panel = button.up('panel');

        panel.getViewModel().set('atEnd', false);

        this.navigate(button, panel, 'prev');
    },

    navigate: function(button, panel, direction) {
        var layout = panel.getLayout(),
            progress = this.lookupReference('progress'),
            model = panel.getViewModel(),
            progressItems = progress.items.items,
            item, i, activeItem, activeIndex;

        layout[direction]();

        activeItem = layout.getActiveItem();
        activeIndex = panel.items.indexOf(activeItem);

        for (i = 0; i < progressItems.length; i++) {
            item = progressItems[i];

            if (activeIndex === item.step) {
                item.setPressed(true);
            } else {
                item.setPressed(false);
            }

            // IE8 has an odd bug with handling font icons in pseudo elements;
            // it will render the icon once and not update it when something
            // like text color is changed via style addition or removal.
            // We have to force icon repaint by adding a style with forced empty
            // pseudo element content, (x-sync-repaint) and removing it back to work
            // around this issue.
            // See this: https://github.com/FortAwesome/Font-Awesome/issues/954
            // and this: https://github.com/twbs/bootstrap/issues/13863
            if (Ext.isIE8) {
                item.btnIconEl.syncRepaint();
            }
        }

        activeItem.focus();

        // beginning disables previous
        if (activeIndex === 0) {
            model.set('atBeginning', true);
        }

        // wizard is 4 steps. Disable next at end.
        if (activeIndex === 3) {
            model.set('atEnd', true);
        }
    },
    */


    onBtnListeCompteOppPrint : function()
    {
        var grid = this.getView();
        //console.log(grid);
        var printer = Ext.ux.grid.Printer;
        printer.printAutomatically = false;
        printer.print(grid);

    },

});