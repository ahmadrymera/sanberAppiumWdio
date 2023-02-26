class formulirPage {
    get rebahanOption() {
      return $('[id="com.fghilmany.dietmealapp:id/rb_rest"]');
    }
    get selesaiButton() {
        return $('[id="com.fghilmany.dietmealapp:id/bt_finish"]');
      }

  
    async selectCondition() {
      await this.rebahanOption.click();
      await this.selesaiButton.click();
    }
  }
  
  module.exports = new formulirPage();