export default class SPUItemSheet extends ItemSheet {
    get template() {
        return `systems/spu/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}