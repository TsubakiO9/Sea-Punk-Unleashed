// Export document classes.
export default class SPUActorSheet extends ActorSheet{
  static get defaultOptions() {
    return margeObject(super.defaultOptions), {
      template: "systems/spu/templates/actor-sheet.html",
      classes: ["spu", "sheet", "actor"]
    }
  }
}
