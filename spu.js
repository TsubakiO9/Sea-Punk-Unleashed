import SPUItemSheet from "./module/sheets/SPUItemSheet";

Hookss.once("init", function () {
    console.log("spu | Initialising Sea Punk Unleashed System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("spu", SPUItemSheet, {makeDefault: true});
})