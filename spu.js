// Import sheet classes.
import { spu } from "./module/config.js";
import { SPUItemSheet } from "./module/sheets/SPUItemSheet.js";
import { SPUNamedCharacterSheet } from "./module/sheets/SPUNamedCharacterSheet.js";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', function() {

    CONFIG.spu = spu;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("spu", SPUItemSheet,{makeDefault: true});

    Actor.unregisterSheet("core", ActorSheet);
    Actor.registerSheet("spu", SPUNamedCharacterSheet,{makeDefault: true});
});