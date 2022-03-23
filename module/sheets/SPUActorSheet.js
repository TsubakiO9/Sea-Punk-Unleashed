export default class SPUActorSheet extends ActorSheet {
    static get defaultOptions() {
        return margeObject(super.defaultOptions, {
            template: "systems/spu/templates/sheets/actor-sheet.html",
            classes: ["spu", "sheet", "actor"]
        })
    }
}