// Export document classes.
export default class SPUItemSheet extends ItemSheet{
  get template() {
    return `systems/spu/templates/${this.item.data.type}-sheet.html`;
  }

  getData() {
    const data = super.getData();

    data.config = CONFIG.spu;

    return data;
  }
}
