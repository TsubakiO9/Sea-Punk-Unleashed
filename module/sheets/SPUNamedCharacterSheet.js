// Export document classes.
export default class SPUActorCharacterSheet extends ActorSheet{
  static get defaultOptions() {
    return margeObject(super.defaultOptions), {
      template: "systems/spu/templates/namedCharacter-sheet.html",
      classes: ["spu", "sheet", "namedCharacter"]
    }
  }
}
