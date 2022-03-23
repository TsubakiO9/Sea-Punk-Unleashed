import { spu } from "./module/config.js";
import SPUItemSheet from "./module/sheets/SPUItemSheet.js";
import SPUActorSheet from "./module/sheets/SPUActorSheet.js";


Hookss.once("init", function () {
    console.log("spu | Initialising Sea Punk Unleashed System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("spu", SPUItemSheet, {makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("spu", SPUActorSheet, {makeDefault: true});
})